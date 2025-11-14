@echo off
echo ========================================
echo FRESH REPOSITORY CREATION SCRIPT
echo ========================================
echo.

echo Creating fresh clean repository...
cd /d "E:\IT Project\InventAcctGO"

echo Creating new directory: inventory-frontend-FRESH
mkdir "inventory-frontend-FRESH"
cd "inventory-frontend-FRESH"

echo Initializing fresh git repository...
git init

echo ========================================
echo Copying source files (clean only)...
echo ========================================

echo Copying app directory...
xcopy /E /I /Y "..\inventory-frontend-phase1\app" "app" 2>nul

echo Copying components directory...
xcopy /E /I /Y "..\inventory-frontend-phase1\components" "components" 2>nul

echo Copying lib directory...
xcopy /E /I /Y "..\inventory-frontend-phase1\lib" "lib" 2>nul

echo Copying hooks directory...
xcopy /E /I /Y "..\inventory-frontend-phase1\hooks" "hooks" 2>nul

echo Copying data directory...
xcopy /E /I /Y "..\inventory-frontend-phase1\data" "data" 2>nul

echo Copying configuration files...
copy "..\inventory-frontend-phase1\package.json" "package.json" 2>nul
copy "..\inventory-frontend-phase1\next.config.js" "next.config.js" 2>nul
copy "..\inventory-frontend-phase1\tailwind.config.ts" "tailwind.config.ts" 2>nul
copy "..\inventory-frontend-phase1\tsconfig.json" "tsconfig.json" 2>nul
copy "..\inventory-frontend-phase1\eslint.config.js" "eslint.config.js" 2>nul
copy "..\inventory-frontend-phase1\postcss.config.js" "postcss.config.js" 2>nul
copy "..\inventory-frontend-phase1\.gitignore" ".gitignore" 2>nul
copy "..\inventory-frontend-phase1\vercel.json" "vercel.json" 2>nul

echo Copying essential documentation...
copy "..\inventory-frontend-phase1\*.md" "*.md" 2>nul

echo Copying Next.js specific files...
copy "..\inventory-frontend-phase1\next-env.d.ts" "next-env.d.ts" 2>nul

echo.
echo ========================================
echo Files copied. Checking repository size...
echo ========================================

echo Current repository size:
git count-objects -vH

echo.
echo Files in repository:
dir /b

echo.
echo ========================================
echo Committing clean repository...
echo ========================================

git add .
git commit -m "Clean production repository - deployment ready for Vercel"

git branch -M main

echo.
echo ========================================
echo READY TO PUSH!
echo ========================================
echo.
echo Fresh repository created successfully!
echo Repository size should be < 10 MB
echo.
echo NEXT STEPS:
echo 1. Create new GitHub repository: inventory-frontend-CLEAN
echo 2. Run: git remote add origin https://github.com/barbargit/inventory-frontend-CLEAN.git
echo 3. Run: git push -u origin main --force
echo 4. Deploy to Vercel
echo.
echo Press any key to finish...
pause >nul