#!/usr/bin/env node

/**
 * Simple deployment helper for Vercel
 * This script provides instructions for manual deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Vercel Production Deployment Helper\n');

// Check if we're in the right directory
if (!fs.existsSync('./package.json')) {
    console.error('❌ Error: Please run this script from the project root directory');
    process.exit(1);
}

// Check if vercel.json exists
if (!fs.existsSync('./vercel.json')) {
    console.error('❌ Error: vercel.json not found. Please ensure configuration is complete.');
    process.exit(1);
}

// Check if build directory exists
if (!fs.existsSync('./.next')) {
    console.log('📦 Build directory not found. Running build...');
    const { execSync } = require('child_process');
    try {
        execSync('npm run build', { stdio: 'inherit' });
        console.log('✅ Build completed successfully');
    } catch (error) {
        console.error('❌ Build failed. Please fix errors before deploying.');
        process.exit(1);
    }
}

console.log('✅ All checks passed! Ready for deployment.\n');

console.log('📋 DEPLOYMENT INSTRUCTIONS:\n');

console.log('Option 1: Vercel Dashboard (Recommended)');
console.log('1. Push your code to Git repository');
console.log('2. Go to https://vercel.com/dashboard');
console.log('3. Click "New Project"');
console.log('4. Import your repository');
console.log('5. Vercel will auto-detect Next.js settings');
console.log('6. Add environment variable:');
console.log('   Name: NEXT_PUBLIC_API_URL');
console.log('   Value: https://inventory-accounting-backend-production.up.railway.app/api');
console.log('7. Click "Deploy"\n');

console.log('Option 2: Vercel CLI');
console.log('1. Install Vercel CLI: npm i -g vercel');
console.log('2. Login: vercel login');
console.log('3. Run: vercel --prod');
console.log('4. Set environment variable: vercel env add NEXT_PUBLIC_API_URL');
console.log('5. Redeploy: vercel --prod\n');

console.log('🗂️ Files Ready for Production:');
const files = [
    'next.config.js',
    'vercel.json',
    '.env.production',
    'package.json',
    '.gitignore'
];

files.forEach(file => {
    if (fs.existsSync(`./${file}`)) {
        console.log(`   ✅ ${file}`);
    } else {
        console.log(`   ❌ ${file} - MISSING`);
    }
});

console.log('\n🌐 Environment Configuration:');
console.log('Development: NEXT_PUBLIC_API_URL=http://localhost:8082/api');
console.log('Production:  NEXT_PUBLIC_API_URL=https://inventory-accounting-backend-production.up.railway.app/api');

console.log('\n📊 Build Stats:');
if (fs.existsSync('./.next')) {
    const stats = fs.statSync('./.next');
    console.log(`   Build directory size: ${Math.round(stats.size / 1024)}KB`);
}

console.log('\n🎯 Expected Results:');
console.log('   • 60+ pages pre-built');
console.log('   • ~102KB shared bundle');
console.log('   • SSL/HTTPS enabled');
console.log('   • Global CDN active');
console.log('   • Security headers applied');

console.log('\n🚀 Ready to deploy! Choose your preferred method above.\n');

console.log('📞 Need Help?');
console.log('   • Check: VERCEL_DEPLOYMENT_GUIDE.md');
console.log('   • Review: DEPLOYMENT_CHECKLIST.md');
console.log('   • Quick start: README_PRODUCTION.md');