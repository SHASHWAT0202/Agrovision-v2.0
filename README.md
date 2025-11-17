# 🌾 AgroVision - AI-Powered Smart Farming Platform

<div align="center">
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge" alt="Version" />
</div>

<div align="center">
  <h3>🚀 Revolutionize your farming with AI-driven insights, real-time monitoring, and smart recommendations for maximum yield and sustainability.</h3>
  
  **🌐 [AgroVision](https://agrovisioncm.vercel.app/)** • **📚 [Frontend Docs](./Frontend/README.md)** • **🔧 [Backend Docs](./backend/README.md)**
</div>

---

## 🌟 Overview

**AgroVision** is a comprehensive smart farming platform that leverages artificial intelligence and modern web technologies to help farmers make data-driven decisions. The platform combines real-time weather forecasting, interactive farm mapping, plant disease detection, soil analysis, crop recommendations, and an intelligent AI chatbot to provide a complete farming solution.

### 🎯 Key Features

- **🌤️ Real-time Weather Forecasting** - 7-day weather predictions with GPS-based location detection
- **🗺️ Interactive Farm Mapping** - Google Maps integration with satellite imagery and sensor data visualization
- **🌱 Plant Identification** - AI-powered plant species classification for 24+ species with high accuracy
- **🌾 Soil & Crop Analysis** - Machine learning models for soil moisture prediction and crop recommendations
- **🤖 AI Chatbot** - Google Gemini-powered agricultural assistant for 24/7 farming support
- **🛒 Agricultural Marketplace** - Integrated shopping platform with secure Razorpay payment processing
- **📅 Smart Farmer's Calendar** - Region-based farming schedules and seasonal recommendations
- **🎨 Modern UI/UX** - Responsive design with dark mode support

---

## 🏗️ Architecture

This project is organized into two main components:

```
Agrovision-v2.0-main/
├── Frontend/          # React + TypeScript web application
│   └── README.md      # Detailed frontend documentation
│
├── backend/          # FastAPI microservices
│   └── README.md     # Detailed backend documentation
│
└── README.md         # This file (project overview)
```

### **Frontend** (`/Frontend`)
Modern React application built with:
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** components
- **Google Maps API** for interactive mapping
- **Razorpay** for payment processing

👉 **[View Frontend Documentation](./Frontend/README.md)**

### **Backend** (`/backend`)
FastAPI microservices including:

#### 1. **AgriBOT** - AI Chatbot Service
- **Location**: `AgriBOT/`
- **Description**: Intelligent agricultural chatbot powered by Google Gemini (via LangChain) that provides farming advice, crop recommendations, and agricultural knowledge.
- **Features**: Google Gemini 1.5 Pro integration, few-shot learning, streaming responses, context-aware conversations
- **Endpoints**: `GET /health`, `POST /chat/simple`
- **Port**: 8000

#### 2. **Plants_Identification** - Plant Classification Service
- **Location**: `Plants_Identification/`
- **Description**: Deep learning service for identifying plant species using a ResNet50-based CNN model trained on 24+ plant species.
- **Features**: TensorFlow/Keras model, 24+ plant species classification, batch prediction support, base64 image support
- **Supported Species**: Amla, Arali, Ashoka, Ashwagandha, Avacado, Bamboo, Basale, Castor, Corn, Curry_Leaf, Doddapatre, Ganike, Guava, Henna, Mint, Nooni, Pappaya, Rose, Wood_sorel, aloevera, banana, mango, orange, watermelon
- **Endpoints**: `GET /health`, `GET /classes`, `POST /predict`, `POST /predict-base64`, `POST /predict-batch`
- **Port**: 8001

#### 3. **Smart_Soil_GEE** - Soil & Crop Analysis Service
- **Location**: `Smart_Soil_GEE/`
- **Description**: Machine learning service for soil moisture prediction and crop recommendations using Google Earth Engine satellite data.
- **Features**: Soil moisture level prediction (Low, Medium, High), crop recommendation system, Google Earth Engine integration, satellite band analysis
- **Port**: Available via API

#### 4. **AgriVOICEbot** - Voice-Enabled Plant Classifier
- **Location**: `AgriVOICEbot/`
- **Description**: Voice-enabled plant classification service with text-to-speech output.
- **Features**: Plant image classification, text-to-speech (TTS) output, audio file generation
- **Endpoints**: `GET /`, `POST /predict/`, `GET /get_audio`
- **Port**: 8002

👉 **[View Backend Documentation](./backend/README.md)**

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (for Frontend)
- **Python** 3.8+ (for Backend)
- **Google Maps API Key** (for maps functionality)
- **Google API Key** (for AI chatbot)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SHASHWAT0202/agrovision-growsmart-main.git
   cd agrovision-growsmart-main
   ```

2. **Set up Frontend**
   ```bash
   cd Frontend
   npm install
   # See Frontend/README.md for detailed setup
   ```

3. **Set up Backend**
   ```bash
   cd backend
   # Create virtual environment
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On Linux/Mac
   source venv/bin/activate
   
   # Install dependencies for each service
   cd AgriBOT && pip install -r requirements.txt && cd ..
   cd Plants_Identification && pip install -r requirements.txt && cd ..
   cd Smart_Soil_GEE && pip install -r requirements.txt && cd ..
   cd AgriVOICEbot && pip install -r requirements.txt && cd ..
   
   # Set up environment variables (see Configuration section)
   ```

For detailed installation and configuration instructions, please refer to:
- **[Frontend Setup Guide](./Frontend/README.md#-getting-started)**
- **[Backend Setup Guide](./backend/README.md#-getting-started)**

---

## 🌐 Live Demo

**🔗 [AgroVision](https://agrovisioncm.vercel.app/)**

Experience the full platform with all features including:
- Real-time weather forecasting
- Interactive farm mapping
- Plant identification
- AI chatbot assistance
- Agricultural marketplace

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool
- **Tailwind CSS 3.4.17** - Styling
- **shadcn/ui** - Component library

### Backend
- **FastAPI 0.115.5** - Modern, fast web framework for building APIs
- **Python 3.8+** - Programming language
- **Uvicorn** - ASGI server
- **TensorFlow 2.18.0** - Deep learning framework
- **Keras 3.8.0** - High-level neural networks API
- **LangChain** - Framework for LLM applications
- **Google Gemini 1.5 Pro** - Large language model
- **scikit-learn** - Machine learning library
- **NumPy** - Numerical computing
- **Pandas** - Data manipulation and analysis
- **Pillow (PIL)** - Image processing
- **OpenCV** - Computer vision
- **Google Earth Engine** - Satellite data analysis
- **Google Text-to-Speech (gTTS)** - Text-to-speech conversion
- **gdown** - Google Drive file download
- **python-dotenv** - Environment variable management
- **pydantic** - Data validation

For complete tech stack details, see:
- **[Frontend Tech Stack](./Frontend/README.md#-tech-stack)**
- **[Backend Tech Stack](./backend/README.md#-tech-stack)**

---

## 📁 Project Structure

```
Agrovision-v2.0-main/
├── Frontend/                    # React frontend application
│   ├── src/                     # Source code
│   │   ├── components/         # React components
│   │   ├── pages/              # Route pages
│   │   ├── hooks/              # Custom hooks
│   │   ├── config/             # Configuration
│   │   └── ...
│   ├── public/                 # Static assets
│   ├── package.json            # Dependencies
│   └── README.md              # Frontend documentation
│
├── backend/                     # Backend microservices
│   ├── AgriBOT/                # AI chatbot service
│   ├── Plants_Identification/  # Plant classification
│   ├── Smart_Soil_GEE/        # Soil analysis
│   ├── AgriVOICEbot/          # Voice classifier
│   └── README.md              # Backend documentation
│
└── README.md                    # This file
```

---

## 🎯 Features in Detail

### Weather Forecasting
- GPS-based location detection
- 7-day weather forecast
- Temperature, humidity, rainfall, wind speed
- Weather-based farming recommendations

### Interactive Farm Mapping
- Real Google Maps with satellite view
- GPS "Find Me" feature
- Interactive farm markers
- Real-time sensor data (moisture, temperature)

### Plant Identification
- 24+ plant species classification
- High accuracy predictions
- Batch processing support
- External AI service integration

### Soil & Crop Analysis
- Soil moisture prediction (Low/Medium/High)
- Crop recommendation system
- Google Earth Engine integration
- Satellite band analysis

### AI Chatbot
- Google Gemini-powered assistant
- Agricultural knowledge base
- Context-aware conversations
- 24/7 availability

### Marketplace
- Product catalog with filtering
- Secure payment processing (Razorpay)
- Shopping cart functionality
- Product ratings and reviews

For complete feature documentation, see:
- **[Frontend Features](./Frontend/README.md#-features)**
- **[Backend Services](./backend/README.md#-services)**

---

## 📚 Documentation

### Detailed Documentation

- **📱 [Frontend Documentation](./Frontend/README.md)** - Complete guide for the React application
  - Installation & setup
  - Component documentation
  - API integration
  - Deployment guide
  - Troubleshooting

- **🔧 [Backend Documentation](./backend/README.md)** - Complete guide for the FastAPI services
  - Service architecture
  - API endpoints
  - Model information
  - Deployment guide
  - Troubleshooting

### Quick Links

- **Frontend Setup**: [Getting Started Guide](./Frontend/README.md#-getting-started)
- **Backend Setup**: [Getting Started Guide](./backend/README.md#-getting-started)
- **API Documentation**: [Backend API Docs](./backend/README.md#-api-documentation)
- **Deployment**: [Frontend Deployment](./Frontend/README.md#-deployment) | [Backend Deployment](./backend/README.md#-deployment)

---

## 🚀 Deployment

### Frontend
**[AgroVision](https://agrovisioncm.vercel.app/)**

For deployment instructions, see: **[Frontend Deployment Guide](./Frontend/README.md#-deployment)**

### Backend
Services deployed on various platforms:
- **[AgriBOT](https://agrovisioncm.vercel.app/agrobot.html)**
- **[Plants Identification](https://plant-identifier-frontend.vercel.app/)**
- **[Smart Soil GEE](https://smart-soil-ai-analyser.onrender.com/)**

#### Railway Deployment
Each service can be deployed independently on Railway:
1. Create Railway project
2. Connect GitHub repository
3. Set environment variables
4. Configure build command: `pip install -r requirements.txt`
5. Configure start command: `uvicorn app:app --host 0.0.0.0 --port $PORT`

#### Docker Deployment
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

#### Heroku Deployment
1. Create Procfile:
   ```
   web: uvicorn app:app --host 0.0.0.0 --port $PORT
   ```
2. Deploy:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

For detailed deployment instructions, see: **[Backend Deployment Guide](./backend/README.md#-deployment)**

---

## 📚 API Documentation

### Backend API Endpoints

#### AgriBOT API
- **Health Check**: `GET /health`
- **Simple Chat**: `POST /chat/simple`
  ```json
  {
    "user_input": "What crops grow well in sandy soil?"
  }
  ```
- **Access**: `http://localhost:8000`
- **API Docs**: `http://localhost:8000/docs`

#### Plants_Identification API
- **Health Check**: `GET /health`
- **Get Classes**: `GET /classes`
- **Predict Plant**: `POST /predict` (multipart/form-data)
- **Predict Base64**: `POST /predict-base64` (application/json)
- **Batch Predict**: `POST /predict-batch` (up to 10 images)
- **Access**: `http://localhost:8001`
- **API Docs**: `http://localhost:8001/docs`

#### Smart_Soil_GEE API
- Soil moisture prediction
- Crop recommendation
- Google Earth Engine data fetching

#### AgriVOICEbot API
- **Predict with Voice**: `POST /predict/` (multipart/form-data)
- **Get Audio**: `GET /get_audio`
- **Access**: `http://localhost:8002`
- **API Docs**: `http://localhost:8002/docs`

For complete API documentation, see: **[Backend API Docs](./backend/README.md#-api-documentation)**

---

## ⚙️ Configuration

### Environment Variables

#### AgriBOT
Create `AgriBOT/.env`:
```env
GOOGLE_API_KEY=your_google_gemini_api_key
RAILWAY_ENV=production  # Optional: for Railway deployment
```

#### Smart_Soil_GEE
Create `Smart_Soil_GEE/.env`:
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
All services have CORS middleware enabled. For production, update CORS settings in each service's `app.py`.

---

## 💻 Development

### Backend Development

#### Running Services

**AgriBOT Service:**
```bash
cd backend/AgriBOT
uvicorn app:app --reload --port 8000
```

**Plants_Identification Service:**
```bash
cd backend/Plants_Identification
uvicorn app:app --reload --port 8001
```

**AgriVOICEbot Service:**
```bash
cd backend/AgriVOICEbot
uvicorn app:app --reload --port 8002
```

**Smart_Soil_GEE Service:**
```bash
cd backend/Smart_Soil_GEE
python predict.py
```

#### Testing
- Use FastAPI automatic docs: `http://localhost:PORT/docs`
- Use curl or Postman for API testing

#### Code Style
- Follow PEP 8 Python style guide
- Use type hints where possible
- Add docstrings to functions
- Keep functions focused and small

For detailed development guidelines, see: **[Backend Development Guide](./backend/README.md#-development)**

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
  # Find and kill process (Linux/Mac)
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

For more troubleshooting help, see: **[Backend Troubleshooting Guide](./backend/README.md#-troubleshooting)**

---

## 🆘 Support

For issues and questions:

- **Create an issue** in the repository
- **Check documentation**:
  - [Frontend README](./Frontend/README.md#-support)
  - [Backend README](./backend/README.md#-support)
- **Review health endpoints** for system status

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
2. Review service-specific README files
3. Check FastAPI documentation: https://fastapi.tiangolo.com/
4. Open an issue on GitHub with:
   - Service name
   - Error message
   - Steps to reproduce
   - Environment details

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For detailed contribution guidelines:
- **[Frontend Contributing](./Frontend/README.md#-contributing)**
- **[Backend Contributing](./backend/README.md#-contributing)**

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

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

## 👨‍💻 Contributors

### **Shashwat Ranjan**
- **GitHub**: [SHASHWAT0202](https://github.com/SHASHWAT0202)
- **LinkedIn**: [Shashwat Ranjan](https://www.linkedin.com/in/shashwat-ranjan-16261b390/)
- **Contributions**: Project Lead, API Integration

### **Sabhya Rajvanshi**
- **GitHub**: [RajvanshiSabhya](https://github.com/RajvanshiSabhya)
- **LinkedIn**: [Sabhya Rajvanshi](https://www.linkedin.com/in/sabhya-rajvanshi/)
- **Contributions**: Frontend Development, UI/UX Design, Component Architecture

### **Swayam Agarwal**
- **GitHub**: [SwayamAg](https://github.com/SwayamAg)
- **LinkedIn**: [Swayam Agarwal](https://www.linkedin.com/in/swayam-agarwal/)
- **Contributions**: Backend Development (AgriBOT, Plants_Identification, Smart_Soil_GEE, AgriVOICEbot), Machine Learning Models

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **FastAPI Team** - For the excellent web framework
- **TensorFlow Team** - For the deep learning framework
- **Google** - For Maps API, Gemini API, and Earth Engine
- **shadcn** - For the beautiful UI components
- **All Contributors** - For making this project better

---

<div align="center">
  <h3>🌾 Built with ❤️ for sustainable farming</h3>
  
  **[⭐ Star us on GitHub](https://github.com/SHASHWAT0202/agrovision-growsmart-main)** • 
  **[🌐 Live Demo - ADD Deployed website link here](#)** • 
  **[📱 Frontend Docs](./Frontend/README.md)** • 
  **[🔧 Backend Docs](./backend/README.md)** • 
  **[🐛 Report Issues](https://github.com/SHASHWAT0202/agrovision-growsmart-main/issues)**
  
  *Revolutionizing agriculture through AI and modern technology*
</div>

