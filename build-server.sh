#!/bin/bash

# Build script for Next.js custom server deployment to cPanel
# This script prepares the application for Node.js hosting

echo "🚀 Starting custom server build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf node_modules
rm -rf omni-server-deployment.zip

# Copy server config
echo "⚙️ Setting up server configuration..."
cp next.config.server.js next.config.js

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building Next.js application..."
NODE_ENV=production npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Remove development dependencies and clean up
    echo "🧹 Cleaning up for deployment..."
    rm -rf node_modules
    rm -rf .next/cache
    
    # Create deployment package (exclude unnecessary files)
    echo "📦 Creating deployment package..."
    zip -r omni-server-deployment.zip . \
        -x "node_modules/*" \
        -x ".git/*" \
        -x "*.log" \
        -x ".env.local" \
        -x ".env.development" \
        -x "out/*" \
        -x "omni-static-deployment*.zip" \
        -x "build-*.sh" \
        -x "README.md" \
        -x ".next/cache/*"
    
    echo "📁 Server deployment package ready: omni-server-deployment.zip"
    echo ""
    echo "📋 cPanel Node.js Deployment Instructions:"
    echo "1. Login to cPanel and go to 'Setup Node.js App'"
    echo "2. Create new application:"
    echo "   - Node.js Version: 14.x or higher"
    echo "   - Application Mode: Production"
    echo "   - Application Root: /omni (or your preferred directory)"
    echo "   - Application URL: your-domain.com/omni"
    echo "   - Application Startup File: server.js"
    echo "3. Upload omni-server-deployment.zip to the application directory"
    echo "4. Extract the zip file"
    echo "5. In cPanel Node.js app, click 'Run npm install'"
    echo "6. Start the application"
    echo ""
    echo "🌐 Your app will be available at: https://abiola.ca/omni"
else
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi