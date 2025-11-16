# 🌾 AgroVision - AI-Powered Smart Farming Platform

<div align="center">
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge" alt="Version" />
</div>

<div align="center">
  <h3>🚀 Revolutionize your farming with AI-driven insights, real-time monitoring, and smart recommendations for maximum yield and sustainability.</h3>
  
  **🌐 ADD Deployed website link here** • **📚 [Frontend Docs](./Frontend/README.md)** • **🔧 [Backend Docs](./backend/README.md)**
</div>

---

## 🌟 Overview

**AgroVision** is a comprehensive smart farming platform that leverages artificial intelligence and modern web technologies to help farmers make data-driven decisions. The platform combines real-time weather forecasting, interactive farm mapping, plant disease detection, soil analysis, crop recommendations, and an intelligent AI chatbot to provide a complete farming solution.

### 🎯 Key Features

- **🌤️ Real-time Weather Forecasting** - 7-day weather predictions with GPS-based location detection
- **🗺️ Interactive Farm Mapping** - Google Maps integration with satellite imagery and sensor data visualization
- **🌱 Plant Disease Detection** - AI-powered plant identification for 24+ species with high accuracy
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
- **AgriBOT** - AI chatbot service (Google Gemini + LangChain)
- **Plants_Identification** - Plant classification (TensorFlow/ResNet50)
- **Smart_Soil_GEE** - Soil analysis (Google Earth Engine + ML)
- **AgriVOICEbot** - Voice-enabled plant classifier

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
   # Install dependencies for each service
   # See backend/README.md for detailed setup
   ```

For detailed installation and configuration instructions, please refer to:
- **[Frontend Setup Guide](./Frontend/README.md#-getting-started)**
- **[Backend Setup Guide](./backend/README.md#-getting-started)**

---

## 🌐 Live Demo

**🔗 ADD Deployed website link here**

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
- **FastAPI** - Web framework
- **TensorFlow 2.18.0** - Deep learning
- **LangChain** - LLM framework
- **Google Gemini** - AI model
- **Google Earth Engine** - Satellite data

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
**ADD Deployed website link here**

For deployment instructions, see: **[Frontend Deployment Guide](./Frontend/README.md#-deployment)**

### Backend
Services deployed on various platforms:
- AgriBOT: ADD Deployed website link here
- Plants Identification: Available via API
- Smart Soil GEE: Available via API

For deployment instructions, see: **[Backend Deployment Guide](./backend/README.md#-deployment)**

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

## 🆘 Support

For issues and questions:

- **Create an issue** in the repository
- **Check documentation**:
  - [Frontend README](./Frontend/README.md#-support)
  - [Backend README](./backend/README.md#-support)
- **Review health endpoints** for system status

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

