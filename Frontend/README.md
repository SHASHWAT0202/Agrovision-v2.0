# 🌾 AgroVision Frontend - Smart Farming Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-Latest-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
</div>

<div align="center">
  <h3>🚀 AI-powered smart farming platform with real-time monitoring, weather forecasting, interactive maps, and intelligent recommendations</h3>
  
  **✅ Production Ready** • **🔐 Secure** • **📱 Fully Responsive** • **🌍 Real-time Data**
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Key Components](#-key-components)
- [API Integration](#-api-integration)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Support](#-support)
- [Made by Swayam](#-made-by-swayam)

---

## 🌟 Overview

AgroVision Frontend is a modern, responsive web application built with React and TypeScript that provides farmers with AI-powered tools for smart farming. The platform offers real-time weather forecasting, interactive farm mapping with Google Maps, agricultural marketplace, soil analysis, plant disease detection, farming calendar, and an AI chat assistant.

### Key Highlights

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite for optimal performance
- **Beautiful UI**: shadcn/ui components with Tailwind CSS for a polished, accessible interface
- **Real-time Features**: Weather data, GPS location tracking, and live map updates
- **Payment Integration**: Secure Razorpay payment processing for marketplace
- **Responsive Design**: Mobile-first approach with full tablet and desktop support
- **Dark Mode**: Complete theme support with system preference detection

---

## ✨ Features

### 🌤️ **Weather Forecasting**
- Real-time weather data with GPS location detection
- 7-day weather forecast with detailed metrics
- Temperature, humidity, rainfall, and wind speed monitoring
- Weather-based farming recommendations
- Interactive weather visualization cards

### 🗺️ **Interactive Farm Mapping**
- **Real Google Maps Integration** with satellite and roadmap views
- **GPS "Find Me" Feature** with home icon marker
- Interactive farm markers with sensor data
- Real-time soil moisture and temperature monitoring
- Crop field status and growth tracking
- Custom markers for farms, soil sensors, and crop fields

### 🛒 **Agricultural Marketplace**
- Product catalog with smart filtering by category
- Categories: Seeds, Fertilizers, Tools
- Product ratings and detailed descriptions
- Shopping cart functionality
- **Secure Razorpay Payment Integration**
- Product recommendations

### 🌱 **Soil & Crop Intelligence**
- AI-powered soil analysis recommendations
- Crop recommendation system
- Growth stage monitoring
- Environmental condition tracking
- Visual data presentation

### 📸 **Plant Disease Detection**
- Integration with external AI plant identification service
- One-click access to specialized plant ID app
- Support for 10,000+ plant species
- High accuracy disease identification

### 📅 **Smart Farmer's Calendar**
- Region-based farming schedules (North, South, East, West India)
- Monthly farming task recommendations
- Weather-integrated planning
- Crop growth stage tracking
- Seasonal farming tips

### 🤖 **AI Chat Assistant**
- 24/7 intelligent farming support
- Personalized recommendations based on location
- Problem-solving assistance
- Best practices and farming knowledge sharing
- External chatbot integration

### 🎨 **UI/UX Features**
- Dark/Light theme toggle
- Smooth animations and transitions
- Responsive navigation with mobile menu
- Glass morphism effects
- Gradient backgrounds
- Loading states and error handling

---

## 🛠️ Tech Stack

### **Core Technologies**
- **React 18.3.1** - Modern UI library with concurrent features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 5.4.19** - Lightning-fast build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### **Styling & UI**
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Headless, accessible UI primitives
- **Lucide React** - Beautiful icon library
- **tailwindcss-animate** - Animation utilities

### **State Management & Data Fetching**
- **TanStack React Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Performant form handling
- **Zod 3.25.76** - Schema validation

### **Maps & Location**
- **Google Maps JavaScript API** - Real satellite imagery and street maps
- **Geolocation API** - GPS positioning and location services

### **Payment Integration**
- **React Razorpay 3.0.1** - Secure payment processing

### **Utilities**
- **date-fns 3.6.0** - Date manipulation
- **clsx** - Conditional class names
- **tailwind-merge** - Merge Tailwind classes
- **class-variance-authority** - Component variants
- **next-themes 0.3.0** - Theme management

### **Development Tools**
- **ESLint 9.32.0** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 📁 Project Structure

```
Frontend/
├── public/                          # Static assets
│   ├── agrobot.html                # External chatbot page
│   ├── *.svg                       # Product icons and illustrations
│   └── robots.txt                  # SEO crawler instructions
│
├── src/
│   ├── components/                  # React components
│   │   ├── ui/                     # shadcn/ui base components (40+ components)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...                 # More UI components
│   │   │
│   │   ├── Navbar.tsx              # Main navigation with theme toggle
│   │   ├── HeroSection.tsx         # Landing page hero section
│   │   ├── WeatherForecast.tsx     # Weather data display
│   │   ├── RealGoogleMaps.tsx      # Google Maps integration
│   │   ├── ShopSection.tsx         # Marketplace component
│   │   ├── SoilCropSection.tsx     # Soil & crop analysis
│   │   ├── PlantClassification.tsx # Plant ID integration
│   │   ├── FarmerCalendar.tsx      # Farming calendar
│   │   ├── AIChat.tsx              # AI chat assistant
│   │   ├── Footer.tsx              # Footer component
│   │   ├── CropDetailModal.tsx     # Crop details modal
│   │   └── theme-provider.tsx      # Theme context provider
│   │
│   ├── pages/                      # Route components
│   │   ├── Index.tsx              # Main landing page
│   │   └── NotFound.tsx             # 404 page
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   ├── use-toast.ts           # Toast notification hook
│   │   └── useRazorpay.ts         # Razorpay payment hook
│   │
│   ├── config/                     # Configuration files
│   │   └── api.ts                 # API endpoints and helpers
│   │
│   ├── lib/                        # Utility functions
│   │   └── utils.ts               # Common utilities
│   │
│   ├── data/                       # Static data
│   │   └── farmerCalendarData.ts  # Calendar data
│   │
│   ├── assets/                     # Images and media
│   │   └── hero-background.jpg    # Hero section background
│   │
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles
│
├── .env.example                    # Environment variables template
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.ts                  # Vite configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json               # App-specific TypeScript config
├── tsconfig.node.json              # Node-specific TypeScript config
├── postcss.config.js               # PostCSS configuration
├── eslint.config.js                # ESLint configuration
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm**, **yarn**, or **pnpm** package manager
- **Git** for version control
- **Google Maps API Key** (for maps functionality)
- **Razorpay Account** (optional, for payment features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SHASHWAT0202/agrovision-growsmart-main.git
   cd agrovision-growsmart-main/Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in Frontend directory
   cp .env.example .env
   ```

4. **Configure environment variables** (see [Configuration](#-configuration) section)

5. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in terminal)

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `Frontend` directory with the following variables:

```env
# Google Maps API Configuration
# Get your API key from: https://console.cloud.google.com/
# Enable: Maps JavaScript API, Places API, Geocoding API
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Payment Integration (Optional)
# Get your keys from: https://dashboard.razorpay.com/app/keys
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id_here
VITE_RAZORPAY_KEY_SECRET=your_razorpay_secret_here

# Backend API Configuration (Optional)
# Default: http://web-production-f233.up.railway.app
VITE_API_BASE_URL=your_backend_url_here
```

### API Configuration

The API configuration is centralized in `src/config/api.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: env.VITE_API_BASE_URL || 'http://web-production-f233.up.railway.app',
  WEATHER: '/api/weather',
  SHOP: '/api/shop',
  SOIL_CROP: 'https://web-production-f233.up.railway.app/api',
  CHATBOT: 'https://agri-bot-main.onrender.com/chat/simple',
  GOOGLE_MAPS_API_KEY: env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE',
};
```

### Getting API Keys

#### Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable these APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
4. Create credentials (API Key)
5. Restrict the API key for security (recommended)

#### Razorpay Keys
1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Navigate to Settings → API Keys
3. Generate test/live keys
4. Add keys to your `.env` file

---

## 🎯 Key Components

### **Navbar** (`src/components/Navbar.tsx`)
- Fixed navigation with scroll effects
- Smooth scroll to sections
- Theme toggle (light/dark mode)
- Responsive mobile menu
- Navigation items: Weather, Maps, Shop, Soil & Crops, Plant ID, Calendar, AI Chat

### **HeroSection** (`src/components/HeroSection.tsx`)
- Engaging landing section with animated background
- Call-to-action buttons
- Statistics cards (Yield Increase, Happy Farmers, Water Conservation)
- Gradient text effects
- Responsive grid layout

### **WeatherForecast** (`src/components/WeatherForecast.tsx`)
- GPS location detection
- 7-day weather forecast
- Weather metrics display (temperature, humidity, rainfall, wind speed)
- Auto-refresh functionality
- Weather-based recommendations

### **RealGoogleMaps** (`src/components/RealGoogleMaps.tsx`)
- Real Google Maps integration
- Satellite and roadmap view toggle
- GPS "Find Me" feature with home icon
- Interactive farm markers
- Sensor data display (moisture, temperature)
- Custom marker icons for different farm types

### **ShopSection** (`src/components/ShopSection.tsx`)
- Product catalog with filtering
- Category-based navigation
- Shopping cart functionality
- Razorpay payment integration
- Product ratings and descriptions
- Responsive product grid

### **SoilCropSection** (`src/components/SoilCropSection.tsx`)
- Soil analysis recommendations
- Crop recommendation system
- Visual data presentation
- Interactive cards

### **PlantClassification** (`src/components/PlantClassification.tsx`)
- External integration with plant ID service
- One-click redirect to specialized app
- Feature showcase

### **FarmerCalendar** (`src/components/FarmerCalendar.tsx`)
- Region-based farming schedules
- Monthly task recommendations
- Crop growth tracking
- Interactive calendar interface

### **AIChat** (`src/components/AIChat.tsx`)
- Floating chat button
- External chatbot integration
- AI assistant information
- Call-to-action section

### **Footer** (`src/components/Footer.tsx`)
- Footer links and information
- Social media links
- Copyright information

---

## 🔌 API Integration

### Backend Endpoints

The frontend integrates with multiple backend services:

1. **Weather API**
   - Endpoint: `GET /api/weather?lat={lat}&lon={lon}`
   - Returns: Weather data for specified coordinates

2. **Shop API**
   - Endpoint: `GET /api/shop/products`
   - Endpoint: `POST /api/shop/checkout`
   - Handles: Product listing and payment processing

3. **Soil & Crop API**
   - Endpoint: `POST /api/soil-crop`
   - Returns: Soil analysis and crop recommendations

4. **AI Chatbot API**
   - Endpoint: `POST https://agri-bot-main.onrender.com/chat/simple`
   - Handles: AI chat interactions

### API Helper Functions

Located in `src/config/api.ts`:

```typescript
// Build API URL with parameters
buildApiUrl(endpoint: string, params?: Record<string, string | number>)

// Make API request
apiRequest(endpoint: string, options?: RequestInit)
```

### Example Usage

```typescript
import { buildApiUrl, apiRequest } from '@/config/api';
import { API_CONFIG } from '@/config/api';

// Fetch weather data
const weatherData = await apiRequest(
  buildApiUrl(API_CONFIG.WEATHER, { lat: 28.6139, lon: 77.2090 })
);
```

---

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Format code
npm run format

# Analyze bundle
npm run analyze
```

### Development Server

The development server runs on `http://localhost:8080` by default (configurable in `vite.config.ts`).

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Code formatting (if configured)
- **Conventional Commits**: Recommended for commit messages

### Adding New Components

1. Create component file in `src/components/`
2. Use TypeScript for type safety
3. Follow existing component patterns
4. Use shadcn/ui components when possible
5. Add proper JSDoc comments

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use CSS variables for theming
- Maintain consistent spacing and typography
- Use shadcn/ui components for consistency

---

## 🏗️ Building for Production

### Build Process

```bash
# Create production build
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle and minify code
- Optimize assets
- Generate source maps
- Output to `dist/` directory

### Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── ...
```

### Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure Environment Variables**
   - Add environment variables in Vercel dashboard
   - Variables should start with `VITE_`

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

3. **Configure Environment Variables**
   - Add in Netlify dashboard under Site settings → Environment variables

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t agrovision-frontend .
docker run -p 80:80 agrovision-frontend
```

---

## 🔧 Troubleshooting

### Common Issues

#### Development Server Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Environment Variables Not Working
- Ensure variables start with `VITE_` prefix
- Restart development server after changes
- Check `.env` file is in `Frontend` directory
- Verify no typos in variable names

#### Google Maps Not Loading
- Verify API key is correct in `.env`
- Check API key has proper permissions enabled
- Ensure billing is enabled for Maps API
- Check browser console for errors

#### TypeScript Errors
```bash
# Run type checking
npm run type-check

# Check tsconfig.json settings
```

#### Build Fails
- Check for TypeScript errors: `npm run type-check`
- Verify all dependencies are installed
- Check Node.js version (18+ required)
- Review build logs for specific errors

#### Payment Integration Issues
- Verify Razorpay keys are correct
- Check Razorpay script is loaded in `index.html`
- Ensure test mode keys for development
- Check browser console for errors

#### CORS Errors
- Verify backend CORS settings allow your frontend domain
- Check API endpoints are correct
- Ensure proper headers in API requests

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

- **React Team** for the amazing React framework
- **Vite Team** for the lightning-fast build tool
- **shadcn** for the beautiful UI component library
- **Tailwind CSS** for the utility-first CSS framework
- **Google Maps** for location services
- **Razorpay** for payment processing
- **FastAPI Team** for the excellent backend framework
- **TensorFlow Team** for the deep learning framework
- **All open-source contributors** who made this project possible

---

## 🆘 Support

For issues and questions:

- **Create an issue** in the repository
- **Check the API documentation** at `/docs` when running locally
- **Review the health endpoint** at `/health` for system status
- **Check service logs** for detailed error messages

### Getting Help

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review component-specific documentation
3. Check React documentation: https://react.dev/
4. Check Vite documentation: https://vitejs.dev/
5. Open an issue on GitHub with:
   - Component/feature name
   - Error message
   - Steps to reproduce
   - Browser and OS details

### Development Resources

- **React Documentation**: https://react.dev/
- **TypeScript Documentation**: https://www.typescriptlang.org/
- **Vite Documentation**: https://vitejs.dev/
- **Tailwind CSS Documentation**: https://tailwindcss.com/
- **shadcn/ui Documentation**: https://ui.shadcn.com/

---

## 👨‍💻 Made by


### **Shashwat Ranjan**
- **GitHub**: [SHASHWAT0202](https://github.com/SHASHWAT0202)

### **Sabhya Rajvanshi**
- **GitHub**: [RajvanshiSabhya](https://github.com/RajvanshiSabhya)

---

<div align="center">
  <h3>🌾 Built with ❤️ for sustainable farming</h3>
  
  **[⭐ Star us on GitHub](https://github.com/SHASHWAT0202/agrovision-growsmart-main)** • 
  **[📱 Try Live Demo](https://agrovision-growsmart-main.vercel.app)** • 
  **[🐛 Report Issues](https://github.com/SHASHWAT0202/agrovision-growsmart-main/issues)**
  
  *Made with React, TypeScript, and modern web technologies*
</div>

