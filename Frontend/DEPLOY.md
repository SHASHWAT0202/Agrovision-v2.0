# 🚀 Deployment Guide for AgroVision

## Quick Deploy Options

### 🟢 Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SHASHWAT0202/agrovision-growsmart-main)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add VITE_GOOGLE_MAPS_API_KEY
vercel env add VITE_RAZORPAY_KEY_ID
vercel env add VITE_RAZORPAY_KEY_SECRET

# Redeploy with environment variables
vercel --prod
```

### 🔵 Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/SHASHWAT0202/agrovision-growsmart-main)

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Site Settings

### 🟠 Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### ⚪ GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run build
npm run deploy
```

## Environment Variables Setup

### Development
```bash
cp .env.example .env
# Edit .env with your actual keys
```

### Production
Set these environment variables in your hosting platform:
- `VITE_GOOGLE_MAPS_API_KEY`
- `VITE_RAZORPAY_KEY_ID` 
- `VITE_RAZORPAY_KEY_SECRET`

## Build Configuration

### Vite Configuration
The project uses Vite for fast builds and hot reload:

```javascript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  }
})
```

### Performance Optimization
- Code splitting enabled
- Tree shaking for smaller bundles
- Image optimization
- CSS minification
- Gzip compression

## Domain Configuration

### Custom Domain Setup
1. Add CNAME record pointing to your hosting provider
2. Configure SSL certificate
3. Update CORS settings for APIs
4. Test all functionality on the new domain

### API Restrictions
Update your API keys to work with the new domain:

#### Google Maps API
1. Go to Google Cloud Console
2. Navigate to Credentials
3. Edit your API key
4. Add your domain to HTTP referrers

#### Razorpay
1. Update webhook URLs
2. Configure allowed domains
3. Test payment flows

## Monitoring & Analytics

### Performance Monitoring
- Lighthouse CI integration
- Core Web Vitals tracking
- Error monitoring with Sentry

### Analytics Setup
```javascript
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Common Issues

1. **Environment Variables Not Loading**
   - Ensure variables start with `VITE_`
   - Restart development server after changes
   - Check spelling and case sensitivity

2. **Google Maps Not Loading**
   - Verify API key is correct
   - Check domain restrictions
   - Ensure required APIs are enabled

3. **Build Failures**
   - Clear node_modules and reinstall
   - Check for TypeScript errors
   - Verify all imports are correct

### Debug Commands
```bash
# Check environment variables
npm run dev -- --debug

# Analyze bundle size
npm run build -- --analyze

# Check for security vulnerabilities
npm audit

# Fix auto-fixable issues
npm audit fix
```

## CI/CD Pipeline

### GitHub Actions
```yaml
name: Deploy to Production
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
        env:
          VITE_GOOGLE_MAPS_API_KEY: ${{ secrets.GOOGLE_MAPS_API_KEY }}
          VITE_RAZORPAY_KEY_ID: ${{ secrets.RAZORPAY_KEY_ID }}
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Performance Benchmarks

### Target Metrics
- **Lighthouse Performance**: > 90
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

### Optimization Tips
- Lazy load components
- Optimize images with WebP format
- Use service worker for caching
- Implement code splitting
- Minimize third-party scripts

## Security Headers

### Recommended Headers
```
Content-Security-Policy: default-src 'self' *.googleapis.com *.razorpay.com
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), location=(self)
```

---

**🎉 Happy Deploying! Your AgroVision app will be live and helping farmers worldwide!**