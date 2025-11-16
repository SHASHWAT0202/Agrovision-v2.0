from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import os
from typing import List
import logging
from contextlib import asynccontextmanager
import gdown
import base64

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Global variables for model
model = None

# Google Drive link (replace with your file ID)
MODEL_PATH = "plant_species_Model_kaggle.h5"
GDRIVE_URL = "https://drive.google.com/uc?id=115K_QMpftnQxZ3DwoUargZp5WkOvGXcA"

# Fixed class mapping (from train.py)
CLASS_MAPPING = {
    'Amla': 0, 'Arali': 1, 'Ashoka': 2, 'Ashwagandha': 3, 'Avacado': 4,
    'Bamboo': 5, 'Basale': 6, 'Castor': 7, 'Corn': 8, 'Curry_Leaf': 9,
    'Doddapatre': 10, 'Ganike': 11, 'Guava': 12, 'Henna': 13, 'Mint': 14,
    'Nooni': 15, 'Pappaya': 16, 'Rose': 17, 'Wood_sorel': 18,
    'aloevera': 19, 'banana': 20, 'mango': 21, 'orange': 22, 'watermelon': 23
}
INDEX_TO_CLASS = {v: k for k, v in CLASS_MAPPING.items()}

def download_model():
    """Download model from Google Drive if not exists"""
    if not os.path.exists(MODEL_PATH):
        logger.info("Model not found locally. Downloading from Google Drive...")
        gdown.download(GDRIVE_URL, MODEL_PATH, quiet=False)
        logger.info("Model downloaded successfully.")

def load_model():
    """Load the trained model"""
    global model
    try:
        # Ensure model exists (download if missing)
        download_model()
        # Load the model
        model = tf.keras.models.load_model(MODEL_PATH)
        logger.info("Model loaded successfully")
    except Exception as e:
        logger.error(f"Error loading model: {str(e)}")
        raise

# Lifespan context manager to replace deprecated on_event
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Starting up Plant Classification API...")
    load_model()
    logger.info("API startup complete")
    yield
    # Shutdown (if needed)
    logger.info("Shutting down Plant Classification API...")

# Initialize FastAPI app with lifespan
app = FastAPI(
    title="Plant Species Classification API",
    description="A FastAPI service for classifying plant species using ResNet50",
    version="1.0.0",
    lifespan=lifespan
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure this properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def preprocess_image(image_bytes: bytes) -> np.ndarray:
    """Preprocess image for model prediction"""
    try:
        image = Image.open(io.BytesIO(image_bytes))
        if image.mode != 'RGB':
            image = image.convert('RGB')
        image = image.resize((224, 224))
        image_array = np.array(image).astype('float32') / 255.0
        image_array = np.expand_dims(image_array, axis=0)
        return image_array
    except Exception as e:
        logger.error(f"Error preprocessing image: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Error processing image: {str(e)}")

@app.get("/")
async def root():
    return {
        "message": "Plant Species Classification API",
        "version": "1.0.0",
        "status": "running",
        "num_classes": len(CLASS_MAPPING)
    }

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "model_loaded": model is not None,
        "num_classes": len(CLASS_MAPPING)
    }

@app.get("/classes")
async def get_classes():
    return {"classes": list(CLASS_MAPPING.keys()), "count": len(CLASS_MAPPING)}

@app.post("/predict")
async def predict_plant(file: UploadFile = File(...)):
    if not file.content_type.startswith('image/'):
        raise HTTPException(status_code=400, detail="File must be an image")
    try:
        image_bytes = await file.read()
        processed_image = preprocess_image(image_bytes)
        predictions = model.predict(processed_image, verbose=0)
        predicted_class_index = int(np.argmax(predictions[0]))
        confidence = float(predictions[0][predicted_class_index])
        result = {
            "filename": file.filename,
            "index": predicted_class_index,
            "predicted_class": INDEX_TO_CLASS.get(predicted_class_index, "Unknown"),
            "confidence": confidence
        }
        return result
    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

@app.post("/predict-base64")
async def predict_plant_base64(request: dict):
    try:
        if 'image' not in request:
            raise HTTPException(status_code=400, detail="Missing 'image' field in request")
        image_data = base64.b64decode(request['image'])
        processed_image = preprocess_image(image_data)
        predictions = model.predict(processed_image, verbose=0)
        predicted_class_index = int(np.argmax(predictions[0]))
        confidence = float(predictions[0][predicted_class_index])
        result = {
            "index": predicted_class_index,
            "predicted_class": INDEX_TO_CLASS.get(predicted_class_index, "Unknown"),
            "confidence": confidence
        }
        return result
    except Exception as e:
        logger.error(f"Base64 prediction error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

@app.post("/predict-batch")
async def predict_batch(files: List[UploadFile] = File(...)):
    if len(files) > 10:
        raise HTTPException(status_code=400, detail="Maximum 10 images allowed per batch")
    results = []
    for file in files:
        try:
            if not file.content_type.startswith('image/'):
                results.append({"filename": file.filename, "error": "File must be an image"})
                continue
            image_bytes = await file.read()
            processed_image = preprocess_image(image_bytes)
            predictions = model.predict(processed_image, verbose=0)
            predicted_class_index = int(np.argmax(predictions[0]))
            confidence = float(predictions[0][predicted_class_index])
            item = {
                "filename": file.filename,
                "index": predicted_class_index,
                "predicted_class": INDEX_TO_CLASS.get(predicted_class_index, "Unknown"),
                "confidence": confidence
            }
            results.append(item)
        except Exception as e:
            results.append({"filename": file.filename, "error": str(e)})
    return {"results": results}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
