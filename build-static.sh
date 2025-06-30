#!/bin/bash

# Build script for Next.js static export
# This script builds the application for static hosting

echo "🚀 Starting static build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building Next.js application..."
npm run export

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Static files are ready in the 'out' directory"
    echo ""
    echo "📋 Deployment Instructions:"
    echo "1. Upload the contents of the 'out' folder to your web server"
    echo "2. For cPanel: Upload to /public_html/omni/"
    echo "3. Ensure .htaccess file is included for proper routing"
    echo "4. Set environment variables on your hosting platform:"
    echo "   - NEXT_PUBLIC_LANGFLOW_API_KEY"
    echo "   - NEXT_PUBLIC_LANGFLOW_API_URL (optional)"
    echo ""
    echo "🌐 Your static site will be available at: abiola.ca/omni"
else
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi