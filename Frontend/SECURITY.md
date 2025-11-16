# 🔐 Security Guidelines for AgroVision

## Overview
This document outlines the security measures implemented in the AgroVision project to protect sensitive information and ensure safe deployment.

## Sensitive Information Protection

### Environment Variables
All sensitive API keys and credentials are stored in environment variables:

- **Razorpay Keys**: Payment processing credentials
- **Google Maps API Key**: Maps and location services
- **Weather API Keys**: Weather data integration
- **Database URLs**: Backend connection strings

### File Structure
```
📁 AgroVision/
├── 📄 .env.example          # Template with placeholder values
├── 📄 .env                  # Your actual keys (NEVER commit this!)
├── 📄 .gitignore           # Excludes sensitive files
└── 📄 SECURITY.md          # This security guide
```

## Setup Instructions

### 1. Initial Setup
```bash
# Clone the repository
git clone https://github.com/SHASHWAT0202/agrovision-growsmart-main.git
cd agrovision-growsmart-main

# Copy environment template
cp .env.example .env

# Install dependencies
npm install
```

### 2. Configure Environment Variables
Edit the `.env` file and replace placeholder values:

```env
# Replace these with your actual keys
VITE_RAZORPAY_KEY_ID=rzp_test_your_actual_key_here
VITE_RAZORPAY_KEY_SECRET=your_actual_secret_here
VITE_GOOGLE_MAPS_API_KEY=your_actual_google_maps_key_here
```

### 3. API Key Management

#### Google Maps API Key
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable these APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
4. Create credentials (API Key)
5. Restrict the API key to your domain
6. Add to `.env` file

#### Razorpay Integration
1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Get your test keys from API Keys section
3. For production, activate your account and use live keys
4. Add both key ID and secret to `.env` file

## Security Best Practices

### ✅ DO:
- Keep `.env` file in `.gitignore`
- Use environment variables for all sensitive data
- Regularly rotate API keys
- Use test keys during development
- Restrict API keys to specific domains/IPs
- Review and audit dependencies regularly

### ❌ DON'T:
- Commit `.env` files to version control
- Share API keys in chat/email
- Use production keys in development
- Hard-code sensitive values in source code
- Ignore security warnings from dependencies

## Deployment Security

### Environment Setup
```bash
# Production deployment
npm run build

# Set production environment variables
export VITE_ENVIRONMENT=production
export VITE_GOOGLE_MAPS_API_KEY=your_production_key
export VITE_RAZORPAY_KEY_ID=rzp_live_your_live_key
```

### Hosting Platforms
Configure environment variables in your hosting platform:

#### Vercel
```bash
vercel env add VITE_GOOGLE_MAPS_API_KEY
vercel env add VITE_RAZORPAY_KEY_ID
```

#### Netlify
Add in Site Settings → Environment Variables

#### GitHub Pages
Use GitHub Secrets for environment variables

## Security Checklist

- [ ] `.env` file is listed in `.gitignore`
- [ ] All API keys are in environment variables
- [ ] No sensitive data in source code
- [ ] API keys are restricted to appropriate domains
- [ ] Using test keys for development
- [ ] Production keys are separate and secure
- [ ] Dependencies are regularly updated
- [ ] Security headers are configured

## Incident Response

If you accidentally commit sensitive information:

1. **Immediately revoke the exposed keys**
2. **Generate new keys**
3. **Update environment variables**
4. **Consider the git history compromised**
5. **Use `git filter-branch` or BFG Repo Cleaner to remove sensitive data**

## Contact

For security concerns or questions:
- Create an issue in the GitHub repository
- Label it with `security` tag
- Do not include sensitive information in the issue

---

**⚠️ Remember: Security is everyone's responsibility. Always err on the side of caution when handling sensitive information.**