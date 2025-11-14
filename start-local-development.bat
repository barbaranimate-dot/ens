@echo off
echo ========================================
echo INVENTORY FRONTEND - LOCAL DEVELOPMENT
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js found

echo.
echo Checking if dependencies are installed...
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo ✅ Dependencies ready

echo.
echo ========================================
echo STARTING FRONTEND ON PORT 3000
echo ========================================
echo.
echo Frontend will be available at: http://localhost:3000
echo Backend should be running at: http://localhost:8082
echo.
echo Press Ctrl+C to stop the development server
echo.

rem Start frontend on port 3000 (Next.js default)
npm run dev

echo.
echo Development server stopped.
pause