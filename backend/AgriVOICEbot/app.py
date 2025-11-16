from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
from voice_model import predict_plant, initialize_voice_engine, load_image_from_path
from gtts import gTTS
import uvicorn
import os

# --------------------------------------------------------
# Initialize FastAPI App
# --------------------------------------------------------
app = FastAPI(title="Voice-Enabled Plant Classifier")

# Enable CORS for frontend or external apps
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict to ["https://yourfrontend.com"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure static folder exists for saving audio output
os.makedirs("static", exist_ok=True)

# Initialize pyttsx3 engine (for optional local testing)
engine = initialize_voice_engine()


@app.get("/")
def root():
    """Root route for health check"""
    return {"message": "Voice Plant Classifier API is running 🚀"}


@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    """Receive an image → Predict plant → Generate voice output"""
    try:
        # Save uploaded file temporarily
        temp_path = "temp_image.jpg"
        with open(temp_path, "wb") as f:
            f.write(await file.read())

        # Load image
        image = load_image_from_path(temp_path)
        if image is None:
            return JSONResponse({"error": "Invalid image file"}, status_code=400)

        # Get prediction text from your model logic
        result_text = predict_plant(image)

        # Convert text to speech (TTS)
        audio_path = "static/result.mp3"
        tts = gTTS(text=result_text, lang="en")
        tts.save(audio_path)

        print("✅ Prediction:", result_text)

        # Return both prediction and voice file path
        return {
            "message": result_text,
            "audio_url": "/get_audio"
        }

    except Exception as e:
        print("❌ Error:", e)
        return JSONResponse({"error": str(e)}, status_code=500)


@app.get("/get_audio")
def get_audio():
    """Serve generated audio"""
    audio_file = "static/result.mp3"
    if os.path.exists(audio_file):
        return FileResponse(audio_file, media_type="audio/mpeg")
    return JSONResponse({"error": "Audio not found"}, status_code=404)


# --------------------------------------------------------
# Entry Point (local run)
# --------------------------------------------------------
if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
