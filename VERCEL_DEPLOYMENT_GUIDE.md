# Vercel Production Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying the Inventory Accounting Frontend to Vercel for production use.

## Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- GitHub repository (or other Vercel-supported Git provider)
- Backend API deployed and accessible (currently using Railway: `https://inventory-accounting-backend-production.up.railway.app/api`)

## Configuration Files

### 1. vercel.json (Updated for Production)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "functions": {
    "app/**/*.js": {
      "maxDuration": 10
    },
    "app/**/*.ts": {
      "maxDuration": 10
    },
    "app/**/*.tsx": {
      "maxDuration": 10
    }
  },
  "env": {
    "NEXT_PUBLIC_API_URL": "https://inventory-accounting-backend-production.up.railway.app/api"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://inventory-accounting-backend-production.up.railway.app/api/:path*"
    }
  ]
}
```

### 2. next.config.js (Optimized for Production)
```javascript
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // For Vercel deployment
  images: {
    unoptimized: true, // For Vercel deployment
  },
  outputFileTracingRoot: path.resolve(__dirname),
  env: {
    CUSTOM_KEY: 'value',
  },
};

module.exports = nextConfig;
```

### 3. Environment Variables
- **Development**: Uses `.env.local` with `NEXT_PUBLIC_API_URL=http://localhost:8082/api`
- **Production**: Uses Vercel environment variable `NEXT_PUBLIC_API_URL=https://inventory-accounting-backend-production.up.railway.app/api`

## Deployment Steps

### Step 1: Prepare Repository
1. Ensure all code is committed to your Git repository
2. Create a `vercel.json` file in the project root
3. Update `next.config.js` with production settings

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (if project is in root) or specific folder
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Add environment variable:
   - `NEXT_PUBLIC_API_URL` = `https://inventory-accounting-backend-production.up.railway.app/api`
6. Click "Deploy"

#### Option B: Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Navigate to project directory: `cd inventory-frontend-phase1`
4. Deploy: `vercel`
5. Follow prompts to configure project
6. Set environment variable: `vercel env add NEXT_PUBLIC_API_URL`

### Step 3: Configure Environment Variables
1. In Vercel dashboard, go to your project
2. Navigate to Settings → Environment Variables
3. Add:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://inventory-accounting-backend-production.up.railway.app/api`
   - **Environments**: Production, Preview, Development

### Step 4: Configure Custom Domain (Optional)
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificates are automatically provisioned

## API Integration

### Backend API Configuration
- **API Base URL**: `https://inventory-accounting-backend-production.up.railway.app/api`
- **CORS**: Configured to allow Vercel domain
- **Authentication**: JWT token-based (stored in localStorage)

### API Proxy Configuration
The `vercel.json` includes rewrites to proxy API calls to the backend:
```json
"rewrites": [
  {
    "source": "/api/:path*",
    "destination": "https://inventory-accounting-backend-production.up.railway.app/api/:path*"
  }
]
```

## Security Features

### Headers Configuration
Security headers are added for production:
- `X-Frame-Options`: DENY
- `X-Content-Type-Options`: nosniff
- `Referrer-Policy`: strict-origin-when-cross-origin

### Environment Variables
- API URLs are configured via environment variables
- No sensitive data is hardcoded in the client-side code

## Build Optimization

### Performance Features
- **Static Generation**: Most pages pre-rendered at build time
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Configured for production (with fallbacks)
- **Bundle Analysis**: Build output shows chunk sizes

### Build Output
The build process generates:
- Static pages (60 pages generated)
- Dynamic routes (server-rendered on demand)
- Optimized bundles with proper code splitting

## Testing Deployment

### Post-Deployment Checklist
- [ ] Application loads successfully
- [ ] Login functionality works
- [ ] All API endpoints are accessible
- [ ] Static pages load correctly
- [ ] Dynamic routes function properly
- [ ] Images and assets load correctly
- [ ] Console shows no critical errors

### Testing Commands
```bash
# Test production build locally
npm run build
npm run start

# Test in Vercel preview
vercel --prod
```

## Monitoring and Analytics

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor Core Web Vitals
- Track performance metrics

### Error Monitoring
- Check Vercel Function Logs
- Monitor API response times
- Set up error tracking (e.g., Sentry)

## Troubleshooting

### Common Issues

#### Build Failures
- Check TypeScript errors: `npm run type-check`
- Verify all dependencies are installed
- Ensure environment variables are set

#### API Connection Issues
- Verify backend API is accessible
- Check CORS configuration on backend
- Confirm environment variable is correct

#### Performance Issues
- Review build output for large bundles
- Optimize images and assets
- Consider implementing lazy loading

### Debug Commands
```bash
# Check build output
npm run build

# Analyze bundle size
npm run build && npx @next/bundle-analyzer

# Test API connectivity
curl https://your-api-url.com/api/health
```

## Cost Optimization

### Vercel Pricing
- **Hobby Plan**: Free for personal projects
- **Pro Plan**: $20/month for commercial use
- **Team Plan**: $100/month for teams

### Resource Optimization
- Use static generation where possible
- Implement proper caching strategies
- Monitor bandwidth usage

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor security advisories
- Review performance metrics

### Backup Strategy
- Code is backed up in Git repository
- Vercel provides deployment rollbacks
- Regular database backups (handled by backend)

## Support and Resources

### Documentation
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [API Documentation](./API_DOCUMENTATION.md)

### Community
- [Vercel Discord](https://vercel.com/discord)
- [Next.js GitHub](https://github.com/vercel/next.js)

---

**Last Updated**: 2025-11-11
**Version**: 1.0.0
**Status**: Production Ready