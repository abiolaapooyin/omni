# Next.js + Tailwind CSS Deployment Guide for cPanel

This guide follows the exact steps from the tutorial for deploying a Next.js application with Tailwind CSS to Namecheap cPanel shared hosting using Node.js.

## 🎯 Tutorial Overview

### What We're Deploying
- Next.js application with custom Node.js server
- Tailwind CSS for styling
- AI chat functionality with Langflow integration
- Production-ready configuration for cPanel

### Prerequisites
- Namecheap cPanel hosting account
- Node.js support enabled in cPanel
- Your Next.js application code ready for deployment

---

## 🖥️ Step-by-Step Deployment Process

### Step 1: Configure Node.js Application
1. **Prepare Your Code**
   - Ensure `server.js` is configured for production
   - Update `package.json` with correct start script
   - Configure environment variables

2. **Create Deployment Package**
   ```bash
   # Remove existing build artifacts
   rm -rf .next node_modules
   
   # Install dependencies
   npm install
   
   # Build the application
   npm run build
   
   # Create deployment package
   zip -r omni-server-deployment.zip . -x "node_modules/*" ".next/*" "package-lock.json" "out/*" "*.zip"
   ```

### Step 2: Setup Node.js Application in cPanel
1. **Access Node.js Setup**
   - Login to your Namecheap cPanel account
   - Go to **Software** section
   - Click **Setup Node.js App**

2. **Create New Application**
   - Click **Create Application**
   - **Node.js Version:** Select **14.x**
   - **Application Mode:** Production
   - **Application Root:** Type `/omni` (creates omni directory)
   - **Application URL:** Leave as `abiola.ca/omni`
   - **Application Startup File:** `server.js`
   - Click **Create**

3. **Test Initial Setup**
   - Click **Open** to test the default Node.js application
   - Verify it shows "It works!" message
   - Click **Stop App** to prepare for file upload

### Step 3: Upload Project Files
1. **Access File Manager**
   - Go to **File Manager** in cPanel
   - Navigate to the `/omni` directory created by Node.js app

2. **Upload and Extract**
   - Upload `omni-server-deployment.zip` to the `/omni` directory
   - Right-click the zip file and select **Extract**
   - Delete the zip file after extraction

3. **Refresh Node.js Application**
   - Return to **Setup Node.js App**
   - Click **Restart** to refresh the application

### Step 4: Install Dependencies and Start
1. **Install Dependencies**
   - In the Node.js App interface, click **Run npm install**
   - Wait for installation to complete (may take a few minutes)

2. **Start Application**
   - Click **Start App**
   - Click **Open** to view your live application
   - Test all functionality including AI chat

---

## 🔧 Production Configuration

### Environment Variables
Your `.env.production` file is already configured with:
```env
# API Configuration
NEXT_PUBLIC_LANGFLOW_API_URL=https://api.langflow.astra.datastax.com/lf/23e4c4d8-958e-403f-b4bf-a92326c3f972/api/v1/run/b604b328-3de1-4a6e-b298-bde8a54d8593
NEXT_PUBLIC_LANGFLOW_API_KEY=AstraCS:bBGCPHUqguNkcZoKslcCTDmP:527dc04700e01b1f8a07586025ae509c6a3cdbefd0c683553767920bfa72b945

# Application Settings
NEXT_PUBLIC_APP_NAME=Omni AI
NEXT_PUBLIC_APP_DESCRIPTION=Multi-agent AI experiment

# Production Settings
NODE_ENV=production
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### Security Notes
- Environment variables are included in the build
- Langflow API has proper CORS settings configured
- Production-ready server configuration included

---

## 🚨 Troubleshooting

### Common Deployment Issues

**Problem:** Node.js application shows an error
- ✅ Verify `server.js` is in the root of your application directory
- ✅ Check that the Node.js version in cPanel is compatible
- ✅ Ensure all files were extracted correctly
- ✅ Try restarting the application from the cPanel interface

**Problem:** `npm install` fails
- ✅ Check for internet connectivity issues in cPanel
- ✅ Verify that `package.json` is present and valid
- ✅ Try stopping and starting the application again
- ✅ Check for sufficient disk space in your hosting account

**Problem:** Application starts but shows errors
- ✅ Check that the `.next` build folder was created successfully
- ✅ Verify that environment variables are set correctly in cPanel
- ✅ Test that your API endpoints are accessible
- ✅ Check the browser console for any client-side errors

**Problem:** AI chat functionality is not working
- ✅ Verify that your Langflow API key is correct
- ✅ Check the CORS settings on your Langflow API
- ✅ Test the API endpoint directly in your browser
- ✅ Check the network tab in your browser's developer tools for failed requests

---

## 📁 File Checklist

### For Tutorial-Based Server Deployment:
- ✅ `server.js` with production hostname configuration
- ✅ `package.json` with `"start": "node server.js"` script
- ✅ `next.config.server.js` for server deployment
- ✅ `.env.production` with API configuration
- ✅ All source files in `components/`, `pages/`, `styles/`, etc.
- ✅ `omni-server-deployment.zip` created (excluding node_modules, .next, etc.)

### Files to Exclude from Upload:
- ❌ `node_modules/` (will be installed via npm)
- ❌ `.next/` (will be built on server)
- ❌ `package-lock.json` (can cause conflicts)
- ❌ `out/` folder (not needed for server deployment)
- ❌ Existing zip files

---

## 🎉 Success!

Your Omni AI Interface should now be live at:
**https://abiola.ca/omni/**

### Final Testing Checklist:
- ✅ The page loads without any errors
- ✅ The AI chat interface appears correctly
- ✅ Chat messages can be sent and received
- ✅ Animations and UI effects are working as expected
- ✅ The application is responsive on mobile devices
- ✅ All images and assets are loading correctly

### What You've Accomplished:
- ✅ Deployed a Next.js application with Tailwind CSS to Namecheap cPanel
- ✅ Configured a custom Node.js server for a production environment
- ✅ Integrated AI chat functionality using Langflow
- ✅ Implemented a responsive design with modern UI components
- ✅ Deployed the application to a live production environment

---

*This guide follows the tutorial for deploying Next.js applications to cPanel shared hosting with Node.js support.*