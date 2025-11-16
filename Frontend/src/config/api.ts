// AgroVision API Configuration
// Centralized configuration for all FastAPI endpoints

const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env || {};

export const API_CONFIG = {
  // Base URL for FastAPI backend (updated to use http as specified)
  BASE_URL: env.VITE_API_BASE_URL || 'http://web-production-f233.up.railway.app',
  
  // Weather API endpoint
  WEATHER: '/api/weather',
  
  // Shop endpoints
  SHOP: '/api/shop',
  
  // Soil & Crop recommendation
  SOIL_CROP: 'https://web-production-f233.up.railway.app/api',
  
  // AI Chatbot - Updated to use direct URL with specific endpoint
  CHATBOT: 'https://agri-bot-main.onrender.com/chat/simple',
  
  // Google Maps API Key (should be in environment variables)
  GOOGLE_MAPS_API_KEY: env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDkxkBxei5rMKfkIjL7xUFRgz1cMAqdnLQ',
};

// API helper functions
export const buildApiUrl = (endpoint: string, params?: Record<string, string | number>) => {
  const url = new URL(endpoint, API_CONFIG.BASE_URL);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }
  
  return url.toString();
};

export const apiRequest = async (endpoint: string, options?: RequestInit) => {
  const url = endpoint.startsWith('http') ? endpoint : buildApiUrl(endpoint);
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  return response.json();
};