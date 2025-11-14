# Step-by-Step Guide to Deploy 'invfe' Project to Vercel

## Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- GitHub repository containing the 'invfe' project
- Vercel CLI installed (optional, for CLI deployment)

## Important Note
All terminal commands in this guide should be executed from the 'invfe' folder. Navigate to the 'invfe' directory before running any commands:

```bash
cd invfe
```

## Configuration Changes Made
The following configurations have been updated for Vercel compatibility and stability:

### vercel.json
- Removed unnecessary `builds` section (Vercel auto-detects Next.js)
- Kept API rewrites to proxy `/api/*` to the Railway backend
- Retained environment variable `NEXT_PUBLIC_API_URL`
- Kept security headers for production

### next.config.js
- `output: 'standalone'` for containerized deployment
- `images: { unoptimized: true }` for Vercel compatibility (Vercel doesn't support Next.js image optimization)
- `outputFileTracingRoot` set for proper file tracing

### .vercelignore
- Confirmed `node_modules/**` is excluded to reduce deployment size

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository containing the 'invfe' project
   - Vercel will auto-detect it as a Next.js project

2. **Configure Project Settings**
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: Leave as `./` (or `invfe/` if the repo root is different)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

3. **Environment Variables**
   - Add the following environment variable:
     - `NEXT_PUBLIC_API_URL`: `https://inventory-accounting-backend-production.up.railway.app/api`
   - This is already set in `vercel.json`, but you can override in dashboard if needed

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - Once deployed, you'll get a production URL (e.g., `https://invfe.vercel.app`)

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to Project Directory**
   ```bash
   cd invfe
   ```

4. **Deploy**
   ```bash
   vercel --prod
   ```
   - Follow the prompts to configure the project
   - Set the production URL when prompted

5. **Set Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_API_URL
   ```
   - Enter: `https://inventory-accounting-backend-production.up.railway.app/api`

## Post-Deployment Verification

1. **Check Deployment Status**
   - Visit your Vercel dashboard to ensure the build succeeded
   - Check build logs for any errors

2. **Test the Application**
   - Visit the production URL
   - Test login functionality
   - Verify API calls are working (should proxy to Railway backend)

3. **Monitor Performance**
   - Use Vercel's analytics to monitor performance
   - Check for any runtime errors in the dashboard

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are listed in `package.json`
   - Verify Node.js version compatibility

2. **API Connection Issues**
   - Confirm `NEXT_PUBLIC_API_URL` is set correctly
   - Check if the Railway backend is accessible
   - Verify CORS settings on the backend

3. **Image Loading Issues**
   - Images are set to `unoptimized: true` in `next.config.js`
   - Ensure image URLs are absolute or properly configured

4. **Large Deployment Size**
   - `.vercelignore` excludes `node_modules/**`
   - Consider excluding other large files if needed

### Redeployment
- Push changes to your GitHub repository
- Vercel will automatically redeploy (if auto-deploy is enabled)
- Or manually trigger redeploy in Vercel dashboard

## Security Notes
- Security headers are configured in `vercel.json`:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`

## Additional Resources
- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)