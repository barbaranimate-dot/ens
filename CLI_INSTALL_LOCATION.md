# 📍 Vercel CLI Installation Location

## 🎯 CLARIFICATION: Where to Run Commands

### `npm install -g vercel` - GLOBAL INSTALLATION

**Answer**: Bisa dijalankan di **mana saja** di sistem Anda!

#### Global Install Command:
```bash
# Option 1: Di root directory
cd E:\IT Project\InventAcctGO
npm install -g vercel

# Option 2: Di subfolder
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
npm install -g vercel

# Option 3: Di Desktop atau folder mana saja
cd C:\Users\YourName\Desktop
npm install -g vercel
```

**💡 REASON**: `-g` flag means "global installation", jadi Vercel CLI akan ter-install di seluruh sistem, tidak tergantung folder tertentu.

## 📋 COMPLETE STEP-BY-STEP COMMANDS

### Step 1: Install Vercel CLI (Global)
```bash
# Buka Command Prompt atau Terminal baru
# Bisa dari mana saja:
npm install -g vercel

# Verify installation
vercel --version
```

### Step 2: Login to Vercel
```bash
# Login (akan buka browser)
vercel login

# Follow instructions to authenticate
```

### Step 3: Navigate to Project Directory
```bash
# Pindah ke project directory
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1

# Verify files are there
dir
# or
ls -la
```

### Step 4: Deploy
```bash
# Initial deployment
vercel

# Add environment variables
vercel env add NEXT_PUBLIC_API_URL
# Value: https://inventory-accounting-backend-production.up.railway.app/api

# Production deployment
vercel --prod
```

## 🔧 WHAT HAPPENS IN EACH DIRECTORY

### When in Root Directory (E:\IT Project\InventAcctGO):
```bash
cd E:\IT Project\InventAcctGO
npm install -g vercel    # ✅ Works fine
vercel login            # ✅ Works fine
vercel                  # ❌ Error: No package.json found
```

### When in Project Directory (E:\IT Project\InventAcctGO\inventory-frontend-phase1):
```bash
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
npm install -g vercel    # ✅ Works fine (but unnecessary)
vercel login            # ✅ Works fine
vercel                  # ✅ Works perfectly
```

## ✅ RECOMMENDED APPROACH

### Method 1: Most Efficient
```bash
# 1. Install globally (satu kali saja)
cd E:\IT Project\InventAcctGO
npm install -g vercel

# 2. Login (sekali saja)
vercel login

# 3. Navigate to project dan deploy
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
vercel
```

### Method 2: All in Project Directory
```bash
# 1. Pindah ke project directory
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1

# 2. Install Vercel CLI (global, tapi di folder ini)
npm install -g vercel

# 3. Login
vercel login

# 4. Deploy
vercel
```

## 🎯 MY RECOMMENDATION

**Gunakan Method 1** (paling clean):

```bash
# Step 1: Install CLI (di root)
cd E:\IT Project\InventAcctGO
npm install -g vercel

# Step 2: Login (satu kali saja)
vercel login

# Step 3: Navigate & Deploy (setiap kali deploy)
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
vercel
vercel env add NEXT_PUBLIC_API_URL
vercel --prod
```

## 📍 SUMMARY

| Command | Location | Status |
|---------|----------|---------|
| `npm install -g vercel` | Root folder | ✅ Best |
| `npm install -g vercel` | Project folder | ✅ Works |
| `vercel login` | Any folder | ✅ Works |
| `vercel` | Project folder | ✅ Required |

**Bottom Line**: Install CLI di root folder, deploy dari project folder! 🚀