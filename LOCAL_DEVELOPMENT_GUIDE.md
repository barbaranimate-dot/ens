# 🚀 Local Development Guide - Frontend Port 3000

## 🎯 **QUICK START: Run Frontend Locally on Port 3000**

### Prerequisites:
- Backend running on port 8082
- Node.js installed
- Dependencies installed (`npm install`)

## 📋 **STEP-BY-STEP INSTRUCTIONS:**

### Step 1: Install Dependencies
```bash
cd E:\IT Project\InventAcctGO\IvnFE
npm install
```

### Step 2: Run Backend (if not already running)
```bash
cd E:\IT Project\InventAcctGO\inventory-backend
go run cmd/server/main.go
```

### Step 3: Run Frontend on Port 3000
```bash
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
npm run dev
```

### Step 4: Access Application
```
Frontend: http://localhost:3000
Backend:  http://localhost:8082
```

## 🔧 **CONFIGURATION FILES:**

### .env.local (Development):
```env
NEXT_PUBLIC_API_URL=http://localhost:8082/api
```

### Package.json Scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint"
  }
}
```

## ✅ **VERIFICATION CHECKLIST:**

### Backend Status:
- [ ] Backend running on port 8082
- [ ] API responding at http://localhost:8082/api/health
- [ ] CORS configured for localhost:3000

### Frontend Status:
- [ ] Frontend running on port 3000
- [ ] Application loads at http://localhost:3000
- [ ] Login page accessible
- [ ] Dashboard navigation works

### Integration Status:
- [ ] Frontend can connect to backend API
- [ ] Login functionality works
- [ ] API calls successful
- [ ] No CORS errors in browser console

## 🎯 **PORT CONFIGURATION:**

### Frontend:
- **Development**: Port 3000 (Next.js default)
- **Production**: Vercel (auto-assigned)
- **Command**: `npm run dev`

### Backend:
- **Development**: Port 8082 (Go default)
- **Production**: Railway (auto-assigned)
- **Command**: `go run cmd/server/main.go`

## 🚀 **QUICK COMMANDS:**

### Start Everything:
```bash
# Terminal 1: Backend
cd E:\IT Project\InventAcctGO\inventory-backend
go run cmd/server/main.go

# Terminal 2: Frontend  
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
npm run dev
```

### Access Points:
```
Frontend Local:  http://localhost:3000
Backend Local:   http://localhost:8082/api
Production:      https://invact-kb474g4te-baris-projects-7fe081c2.vercel.app
```

## 📊 **ENVIRONMENT VARIABLES:**

### Development (.env.local):
```env
NEXT_PUBLIC_API_URL=http://localhost:8082/api
NODE_ENV=development
```

### Production (Vercel):
```env
NEXT_PUBLIC_API_URL=https://inventory-accounting-backend-production.up.railway.app/api
NODE_ENV=production
```

## 🔧 **TROUBLESHOOTING:**

### Port 3000 Already in Use:
```bash
# Kill process using port 3000
taskkill /f /im node.exe

# Or use different port
PORT=3001 npm run dev
```

### Backend Connection Failed:
```bash
# Check backend status
curl http://localhost:8082/api/health

# Restart backend
cd E:\IT Project\InventAcctGO\inventory-backend
go run cmd/server/main.go
```

### Frontend Build Errors:
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Restart development server
npm run dev
```

## 🎯 **EXPECTED RESULTS:**

### Successful Local Setup:
```
✅ Backend: Running on http://localhost:8082
✅ Frontend: Running on http://localhost:3000
✅ Integration: API calls working
✅ Login: Authentication functional
✅ Navigation: All pages accessible
```

### Browser Console:
```
✅ No CORS errors
✅ API calls successful (200 status)
✅ No JavaScript errors
✅ Pages load correctly
```

## 📋 **FINAL CHECKLIST:**

**Before Starting Development:**
- [ ] Backend running on port 8082
- [ ] Frontend dependencies installed
- [ ] .env.local configured correctly
- [ ] Port 3000 available

**During Development:**
- [ ] Frontend accessible at localhost:3000
- [ ] Backend API responding
- [ ] Login page functional
- [ ] Dashboard navigation working

**Status**: ✅ **Local Development Setup Complete**  
**Frontend Port**: ✅ **3000** (Next.js default)  
**Backend Port**: ✅ **8082** (Go default)  
**Environment**: ✅ **Development ready**