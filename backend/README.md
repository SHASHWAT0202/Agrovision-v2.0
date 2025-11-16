# 🌾 AgroVision Backend - Smart Farming API Services

<div align="center">
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/FastAPI-0.115.5-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/TensorFlow-2.18.0-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow" />
  <img src="https://img.shields.io/badge/LangChain-Latest-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" alt="LangChain" />
  <img src="https://img.shields.io/badge/Google_Earth_Engine-Enabled-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Earth Engine" />
</div>

<div align="center">
  <h3>🚀 AI-powered backend services for smart farming: Plant identification, soil analysis, crop recommendations, and intelligent chatbot</h3>
  
  **✅ Production Ready** • **🔐 Secure** • **🤖 AI-Powered** • **🌍 Real-time Data**
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Services](#-services)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Development](#-development)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Support](#-support)
- [Made by Swayam](#-made-by-swayam)

---

## 🌟 Overview

AgroVision Backend is a collection of FastAPI microservices that power the smart farming platform. The backend provides AI-powered services for plant identification, soil analysis, crop recommendations, and an intelligent agricultural chatbot.

### Key Features

- **🤖 AI Chatbot**: Google Gemini-powered agricultural assistant with LangChain
- **🌱 Plant Identification**: TensorFlow/ResNet50 model for 24+ plant species classification
- **🌾 Soil & Crop Analysis**: Machine learning models for soil moisture and crop recommendations
- **🗺️ Google Earth Engine Integration**: Satellite data analysis for agricultural insights
- **🎤 Voice-Enabled Services**: Text-to-speech plant classification
- **📊 RESTful APIs**: FastAPI-based services with automatic documentation

---

## 🏗️ Architecture

The backend is organized into multiple microservices, each handling a specific domain:

```
backend/
├── AgriBOT/                    # AI Chatbot Service
│   ├── app.py                  # FastAPI application
│   ├── main.py                 # CLI interface
│   ├── prompts.py              # LangChain prompts
│   └── requirements.txt        # Dependencies
│
├── Plants_Identification/       # Plant Classification Service
│   ├── app.py                  # FastAPI application
│   ├── Data/                   # Training dataset (24+ plant species)
│   ├── plant-cnn-model_kaggle.ipynb
│   └── requirements.txt        # Dependencies
│
├── Smart_Soil_GEE/             # Soil & Crop Analysis Service
│   ├── predict.py              # Prediction script
│   ├── train_model.py          # Model training
│   ├── gee_pred.py             # Google Earth Engine integration
│   └── requirements.txt        # Dependencies
│
├── AgriVOICEbot/               # Voice-Enabled Plant Classifier
│   ├── app.py                  # FastAPI application
│   ├── voice_model.py          # Voice processing logic
│   └── requirements.txt        # Dependencies
│
└── .gitignore                  # Git ignore rules
```

---

## 🔧 Services

### 1. **AgriBOT** - AI Chatbot Service

**Location**: `AgriBOT/`

**Description**: Intelligent agricultural chatbot powered by Google Gemini (via LangChain) that provides farming advice, crop recommendations, and agricultural knowledge.

**Features**:
- Google Gemini 1.5 Pro integration
- Few-shot learning with agricultural examples
- Streaming responses
- Context-aware conversations
- FastAPI REST API

**Endpoints**:
- `GET /health` - Health check
- `POST /chat/simple` - Simple chat endpoint

**Dependencies**:
- FastAPI
- LangChain
- LangChain Google Generative AI
- Python-dotenv
- Uvicorn

### 2. **Plants_Identification** - Plant Classification Service

**Location**: `Plants_Identification/`

**Description**: Deep learning service for identifying plant species using a ResNet50-based CNN model trained on 24+ plant species.

**Features**:
- TensorFlow/Keras model
- 24+ plant species classification
- Batch prediction support
- Base64 image support
- Automatic model download from Google Drive
- High accuracy predictions

**Supported Plant Species**:
Amla, Arali, Ashoka, Ashwagandha, Avacado, Bamboo, Basale, Castor, Corn, Curry_Leaf, Doddapatre, Ganike, Guava, Henna, Mint, Nooni, Pappaya, Rose, Wood_sorel, aloevera, banana, mango, orange, watermelon

**Endpoints**:
- `GET /` - API information
- `GET /health` - Health check
- `GET /classes` - List all supported classes
- `POST /predict` - Predict from uploaded image
- `POST /predict-base64` - Predict from base64 image
- `POST /predict-batch` - Batch prediction (up to 10 images)

**Dependencies**:
- FastAPI
- TensorFlow 2.18.0
- Keras 3.8.0
- NumPy
- Pillow
- gdown (for model download)

### 3. **Smart_Soil_GEE** - Soil & Crop Analysis Service

**Location**: `Smart_Soil_GEE/`

**Description**: Machine learning service for soil moisture prediction and crop recommendations using Google Earth Engine satellite data.

**Features**:
- Soil moisture level prediction (Low, Medium, High)
- Crop recommendation system
- Google Earth Engine integration
- Satellite band analysis (B2, B3, B4, B8)
- Gradient Boosting Classifier models
- India-specific location validation

**Endpoints**:
- Prediction API (via `predict.py`)
- Google Earth Engine data fetching (via `gee_pred.py`)

**Dependencies**:
- scikit-learn
- pandas
- numpy
- joblib
- Google Earth Engine Python API

### 4. **AgriVOICEbot** - Voice-Enabled Plant Classifier

**Location**: `AgriVOICEbot/`

**Description**: Voice-enabled plant classification service with text-to-speech output.

**Features**:
- Plant image classification
- Text-to-speech (TTS) output
- Audio file generation
- Voice engine integration

**Endpoints**:
- `GET /` - Health check
- `POST /predict/` - Predict plant and generate voice output
- `GET /get_audio` - Retrieve generated audio file

**Dependencies**:
- FastAPI
- gTTS (Google Text-to-Speech)
- pyttsx3
- Pillow
- OpenCV

---

## 🛠️ Tech Stack

### **Core Framework**
- **FastAPI 0.115.5** - Modern, fast web framework for building APIs
- **Python 3.8+** - Programming language
- **Uvicorn** - ASGI server

### **AI & Machine Learning**
- **TensorFlow 2.18.0** - Deep learning framework
- **Keras 3.8.0** - High-level neural networks API
- **LangChain** - Framework for LLM applications
- **Google Gemini 1.5 Pro** - Large language model
- **scikit-learn** - Machine learning library
- **NumPy** - Numerical computing

### **Data Processing**
- **Pandas** - Data manipulation and analysis
- **Pillow (PIL)** - Image processing
- **OpenCV** - Computer vision

### **APIs & Services**
- **Google Earth Engine** - Satellite data analysis
- **Google Text-to-Speech (gTTS)** - Text-to-speech conversion
- **gdown** - Google Drive file download

### **Development Tools**
- **python-dotenv** - Environment variable management
- **Rich** - Rich text and beautiful formatting
- **pydantic** - Data validation

---

## 🚀 Getting Started

### Prerequisites

- **Python 3.8+** (recommended: Python 3.10+)
- **pip** or **conda** package manager
- **Google API Key** (for AgriBOT - Gemini)
- **Google Earth Engine Account** (for Smart_Soil_GEE)
- **Virtual environment** (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SHASHWAT0202/agrovision-growsmart-main.git
   cd agrovision-growsmart-main/backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On Linux/Mac
   source venv/bin/activate
   ```

3. **Install dependencies for each service**

   **AgriBOT:**
   ```bash
   cd AgriBOT
   pip install -r requirements.txt
   cd ..
   ```

   **Plants_Identification:**
   ```bash
   cd Plants_Identification
   pip install -r requirements.txt
   cd ..
   ```

   **Smart_Soil_GEE:**
   ```bash
   cd Smart_Soil_GEE
   pip install -r requirements.txt
   cd ..
   ```

   **AgriVOICEbot:**
   ```bash
   cd AgriVOICEbot
   pip install -r requirements.txt
   cd ..
   ```

4. **Set up environment variables**

   Create a `.env` file in each service directory:

   **AgriBOT/.env:**
   ```env
   GOOGLE_API_KEY=your_google_api_key_here
   ```

   **Smart_Soil_GEE/.env:**
   ```env
   # Google Earth Engine credentials
   # Place your service account JSON file in the directory
   ```

### Running Services

#### AgriBOT Service

```bash
cd AgriBOT
# Development
uvicorn app:app --reload --port 8000

# Production
uvicorn app:app --host 0.0.0.0 --port 8000
```

**Access**: `http://localhost:8000`
**API Docs**: `http://localhost:8000/docs`

#### Plants_Identification Service

```bash
cd Plants_Identification
uvicorn app:app --reload --port 8001
```

**Access**: `http://localhost:8001`
**API Docs**: `http://localhost:8001/docs`

#### Smart_Soil_GEE Service

```bash
cd Smart_Soil_GEE
# Run prediction script
python predict.py

# Or integrate with FastAPI (if available)
```

#### AgriVOICEbot Service

```bash
cd AgriVOICEbot
uvicorn app:app --reload --port 8002
```

**Access**: `http://localhost:8002`
**API Docs**: `http://localhost:8002/docs`

---

## 📚 API Documentation

### AgriBOT API

#### Health Check
```http
GET /health
```

**Response**:
```json
{
  "status": "ok"
}
```

#### Simple Chat
```http
POST /chat/simple
Content-Type: application/json

{
  "user_input": "What crops grow well in sandy soil?"
}
```

**Response**:
```json
{
  "output": "Suitable crops for sandy soil include groundnut, maize, watermelon, and pulses..."
}
```

### Plants_Identification API

#### Health Check
```http
GET /health
```

**Response**:
```json
{
  "status": "healthy",
  "model_loaded": true,
  "num_classes": 24
}
```

#### Get Classes
```http
GET /classes
```

**Response**:
```json
{
  "classes": ["Amla", "Arali", "Ashoka", ...],
  "count": 24
}
```

#### Predict Plant
```http
POST /predict
Content-Type: multipart/form-data

file: <image_file>
```

**Response**:
```json
{
  "filename": "plant.jpg",
  "index": 8,
  "predicted_class": "Corn",
  "confidence": 0.95
}
```

#### Predict from Base64
```http
POST /predict-base64
Content-Type: application/json

{
  "image": "base64_encoded_image_string"
}
```

### Smart_Soil_GEE API

The service provides functions for:
- Soil moisture prediction
- Crop recommendation
- Google Earth Engine data fetching

**Usage Example**:
```python
from predict import predict_moisture_and_crop

# Predict from satellite band values
moisture_level, crop_recommendation = predict_moisture_and_crop(
    B2=55, B3=65, B4=50, B8=100
)
```

### AgriVOICEbot API

#### Predict with Voice
```http
POST /predict/
Content-Type: multipart/form-data

file: <image_file>
```

**Response**:
```json
{
  "message": "This plant is identified as Corn with 95% confidence.",
  "audio_url": "/get_audio"
}
```

#### Get Audio
```http
GET /get_audio
```

**Response**: Audio file (MP3)

---

## ⚙️ Configuration

### Environment Variables

#### AgriBOT
```env
GOOGLE_API_KEY=your_google_gemini_api_key
RAILWAY_ENV=production  # Optional: for Railway deployment
```

#### Smart_Soil_GEE
```env
# Google Earth Engine Service Account
# Place JSON credentials file in the directory
# File should be named: swaoil-*.json
```

### Model Files

#### Plants_Identification
- Model is automatically downloaded from Google Drive on first run
- Model file: `plant_species_Model_kaggle.h5`
- Google Drive ID: `115K_QMpftnQxZ3DwoUargZp5WkOvGXcA`

#### Smart_Soil_GEE
- `moisture_model.pkl` - Soil moisture classifier
- `crop_model.pkl` - Crop recommendation classifier
- `feature_scaler.pkl` - Feature scaler
- `crop_label_encoder.pkl` - Crop label encoder
- `moisture_label_encoder.pkl` - Moisture label encoder

### CORS Configuration

All services have CORS middleware enabled. For production, update CORS settings:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://your-frontend-domain.com"],  # Update this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 🚀 Deployment

### Railway Deployment

Each service can be deployed independently on Railway:

1. **Create Railway project**
2. **Connect GitHub repository**
3. **Set environment variables**
4. **Configure build command**: `pip install -r requirements.txt`
5. **Configure start command**: `uvicorn app:app --host 0.0.0.0 --port $PORT`

### Docker Deployment

Create a `Dockerfile` for each service:

```dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Heroku Deployment

1. **Create Procfile** (already included in some services)
   ```
   web: uvicorn app:app --host 0.0.0.0 --port $PORT
   ```

2. **Deploy**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Environment-Specific Configuration

- **Development**: Uses `.env` file
- **Production**: Uses environment variables (Railway, Heroku, etc.)
- **Local Testing**: Can use CLI interfaces (e.g., `main.py` in AgriBOT)

---

## 💻 Development

### Project Structure

Each service follows a similar structure:
- `app.py` - FastAPI application
- `requirements.txt` - Python dependencies
- `Procfile` - Deployment configuration (if applicable)
- `.env` - Environment variables (not committed)

### Adding New Features

1. **Create feature branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make changes**
3. **Test locally**
4. **Update documentation**
5. **Commit and push**

### Testing

#### Manual Testing
- Use FastAPI automatic docs: `http://localhost:PORT/docs`
- Use curl or Postman for API testing

#### Example Test Request
```bash
# Test AgriBOT
curl -X POST "http://localhost:8000/chat/simple" \
  -H "Content-Type: application/json" \
  -d '{"user_input": "What is organic farming?"}'

# Test Plants_Identification
curl -X POST "http://localhost:8001/predict" \
  -F "file=@plant_image.jpg"
```

### Code Style

- Follow PEP 8 Python style guide
- Use type hints where possible
- Add docstrings to functions
- Keep functions focused and small

---

## 🔧 Troubleshooting

### Common Issues

#### Model Not Loading (Plants_Identification)
- **Issue**: Model file not found
- **Solution**: Model will auto-download from Google Drive on first run
- **Manual**: Download from Google Drive ID: `115K_QMpftnQxZ3DwoUargZp5WkOvGXcA`

#### Google API Key Error (AgriBOT)
- **Issue**: `No GOOGLE_API_KEY found!`
- **Solution**: 
  - Create `.env` file in `AgriBOT/` directory
  - Add: `GOOGLE_API_KEY=your_key_here`
  - Or set environment variable: `export GOOGLE_API_KEY=your_key_here`

#### Google Earth Engine Authentication (Smart_Soil_GEE)
- **Issue**: Authentication failed
- **Solution**:
  - Authenticate: `earthengine authenticate`
  - Or use service account JSON file
  - Place credentials file in `Smart_Soil_GEE/` directory

#### CORS Errors
- **Issue**: CORS policy blocking requests
- **Solution**: Update CORS middleware in `app.py` to allow your frontend domain

#### Port Already in Use
- **Issue**: Port 8000 already in use
- **Solution**: 
  ```bash
  # Find and kill process
  lsof -ti:8000 | xargs kill -9
  # Or use different port
  uvicorn app:app --port 8001
  ```

#### TensorFlow Memory Issues
- **Issue**: Out of memory errors
- **Solution**:
  - Reduce batch size
  - Use GPU if available
  - Limit image resolution

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

```
MIT License

Copyright (c) 2025 AgroVision

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **TensorFlow team** for the deep learning framework
- **FastAPI team** for the excellent web framework
- **LangChain team** for the LLM application framework
- **Google** for Gemini API and Earth Engine
- **The plant dataset contributors** for providing training data
- **scikit-learn team** for machine learning tools
- **All open-source contributors** who made this project possible

---

## 🆘 Support

For issues and questions:

- **Create an issue** in the repository
- **Check the API documentation** at `/docs` when running locally
- **Review the health endpoint** at `/health` for system status
- **Check service logs** for detailed error messages

### Health Check Endpoints

- **AgriBOT**: `http://localhost:8000/health`
- **Plants_Identification**: `http://localhost:8001/health`
- **AgriVOICEbot**: `http://localhost:8002/`

### API Documentation

FastAPI automatically generates interactive API documentation:

- **Swagger UI**: `http://localhost:PORT/docs`
- **ReDoc**: `http://localhost:PORT/redoc`

### Getting Help

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review service-specific README files (if available)
3. Check FastAPI documentation: https://fastapi.tiangolo.com/
4. Open an issue on GitHub with:
   - Service name
   - Error message
   - Steps to reproduce
   - Environment details

---

## 👨‍💻 Made by Swayam

**Developer**: Swayam Agarwal

- **LinkedIn**: [Swayam Agarwal](https://www.linkedin.com/in/swayam-agarwal)
- **GitHub**: [SwayamAg](https://github.com/SwayamAg)

---

<div align="center">
  <h3>🌾 Built with ❤️ for sustainable farming</h3>
  
  **[⭐ Star us on GitHub](https://github.com/SHASHWAT0202/agrovision-growsmart-main)** • 
  **[📚 View API Docs](http://localhost:8000/docs)** • 
  **[🐛 Report Issues](https://github.com/SHASHWAT0202/agrovision-growsmart-main/issues)**
  
  *Powered by FastAPI, TensorFlow, and modern AI technologies*
</div>

