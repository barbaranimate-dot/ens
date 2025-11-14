# 🚨 Fix: 'next' is not recognized Error

## Problem Analysis
```
Error: 'next' is not recognized as an internal or external command
```

**Root Cause**: Dependencies belum diinstall (`node_modules` tidak ada)

## ✅ SOLUTION: Install Dependencies First

### Step 1: Install Dependencies
```bash
# Navigate to project directory
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1

# Install all dependencies
npm install

# This will install:
# - next
# - react
# - react-dom
# - All other packages in package.json
```

### Step 2: Verify Installation
```bash
# Check if node_modules exists
dir
# Should show: node_modules folder

# Check if next command works
npx next --version
# Should show: 15.5.6 (or similar version)
```

### Step 3: Try Build Again
```bash
# Now try the build command
npm run build

# This should work without errors
```

## 🎯 COMPLETE WORKFLOW

### Before Deployment, Ensure:

#### Step 1: Install Vercel CLI (Global)
```bash
cd E:\IT Project\InventAcctGO
npm install -g vercel
```

#### Step 2: Install Project Dependencies
```bash
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
npm install
```

#### Step 3: Login to Vercel
```bash
vercel login
```

#### Step 4: Deploy
```bash
# From project directory
vercel
```

## 🔧 DETAILED EXPLANATION

### What is `npm install`?
- **Installs all dependencies** listed in `package.json`
- **Creates node_modules folder** with all required packages
- **Downloads next, react, and other packages**
- **Required before any build or deploy command**

### Why This Error Occurred:
1. **Missing node_modules**: No dependencies installed
2. **Fresh repository**: All dependencies need to be installed
3. **Git ignored files**: node_modules is in .gitignore

### What Happens During `npm install`:
```
✅ Downloads all packages from npm registry
✅ Creates node_modules/ folder
✅ Generates package-lock.json
✅ Makes 'next' command available
✅ Prepares project for build
```

## 📋 EXPECTED OUTPUT

### During npm install:
```bash
npm install

added 1234 packages in 45s

npm notice created a lockfile as package-lock.json.
You should commit this file to git.
```

### During npm run build:
```bash
npm run build

> inventory-frontend-phase1@1.0.0 build
> next build

   ▲ Next.js 15.5.6
   - Environments: .env.local

   Creating an optimized production build ...
 ✓ Compiled successfully in 50s
```

## 🚀 VERCEL DEPLOYMENT WORKFLOW

### Complete Step-by-Step:

#### 1. Install Vercel CLI (once)
```bash
cd E:\IT Project\InventAcctGO
npm install -g vercel
```

#### 2. Install Dependencies (before each deploy)
```bash
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
npm install
```

#### 3. Login (once per device)
```bash
vercel login
```

#### 4. Deploy
```bash
vercel
# Follow prompts
```

#### 5. Add Environment Variables
```bash
vercel env add NEXT_PUBLIC_API_URL
# Value: https://inventory-accounting-backend-production.up.railway.app/api
```

#### 6. Production Deploy
```bash
vercel --prod
```

## 🛠️ TROUBLESHOOTING

### If npm install fails:
```bash
# Clear npm cache
npm cache clean --force

# Delete package-lock.json and retry
del package-lock.json
npm install
```

### If next still not found:
```bash
# Use npx instead
npx next build

# Or reinstall specific package
npm install next@latest
```

### If permission errors:
```bash
# Run as administrator
# Or use sudo on Mac/Linux
npm install --force
```

## ✅ SUCCESS CHECKLIST

Before deploying, verify:

- [ ] **Vercel CLI installed**: `vercel --version` works
- [ ] **Dependencies installed**: `dir` shows node_modules folder
- [ ] **Next command works**: `npx next --version` works
- [ ] **Login successful**: `vercel whoami` shows account
- [ ] **Project ready**: `npm run build` works locally

## 🎯 FINAL COMMAND SEQUENCE

**Execute these commands in order:**

```bash
# 1. Install Vercel CLI
cd E:\IT Project\InventAcctGO
npm install -g vercel

# 2. Install project dependencies
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
npm install

# 3. Login to Vercel
vercel login

# 4. Deploy
vercel

# 5. Add environment variables
vercel env add NEXT_PUBLIC_API_URL
# Enter: https://inventory-accounting-backend-production.up.railway.app/api

# 6. Production deployment
vercel --prod
```

---

## 🎉 SUCCESS EXPECTED

After following these steps:
- ✅ Dependencies installed successfully
- ✅ Next.js build works
- ✅ Vercel deployment succeeds
- ✅ Live production URL generated

**Status**: 🚨 **Dependencies Missing - Easy Fix**  
**Solution**: Run `npm install` first  
**Expected Success**: 100% after dependencies installed