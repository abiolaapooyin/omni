# cPanel Static Deployment Guide for Omni AI Interface

## 📦 Deployment Package

Your optimized Next.js 14 static application is ready for cPanel deployment!

**File to Upload:** `omni-static-deployment.zip`

## 🚀 Step-by-Step Installation Instructions

### Step 1: Access cPanel File Manager
1. Log into your cPanel account at abiola.ca
2. Navigate to **File Manager**
3. Go to `public_html` directory

### Step 2: Upload the Deployment Package
1. Click **Upload** in the File Manager
2. Select and upload `omni-static-deployment.zip`
3. Wait for the upload to complete

### Step 3: Extract Files
1. Right-click on `omni-static-deployment.zip`
2. Select **Extract**
3. Choose to extract to `public_html`
4. Confirm extraction

### Step 4: Move Files to Correct Location
1. Navigate into the extracted `out` folder
2. Select **ALL** files and folders inside `out/`
3. **Cut** (Ctrl+X) all selected files
4. Navigate back to `public_html/omni/`
5. **Paste** (Ctrl+V) all files

### Step 5: Verify File Structure
Your `public_html/omni/` should contain:
```
omni/
├── .htaccess
├── index.html
├── 404.html
├── 404/
├── _next/
├── alogo.png
└── logo.svg
```

### Step 6: Configure Environment Variables
1. In cPanel, go to **File Manager**
2. Navigate to `public_html/omni/`
3. Create a new file called `.env.local` (if needed for client-side variables)
4. Add your Langflow API configuration:
```
NEXT_PUBLIC_LANGFLOW_API_URL=https://api.langflow.astra.datastax.com
NEXT_PUBLIC_LANGFLOW_API_KEY=your_actual_api_key_here
```

### Step 7: Test Your Deployment
1. Open your browser
2. Navigate to `https://abiola.ca/omni/`
3. Test the AI chat functionality

## 🔧 Important Notes

### Security Considerations
- The API key is exposed in the client-side code (this is normal for static deployments)
- Ensure your Langflow API has proper CORS settings enabled
- Consider implementing rate limiting on your Langflow endpoint

### Troubleshooting

**If you see "Network Error":**
1. Check that your Langflow API URL is correct
2. Verify CORS is enabled on your Langflow endpoint
3. Ensure your API key is valid

**If pages don't load:**
1. Verify the `.htaccess` file is present
2. Check that all files were extracted properly
3. Ensure the base path `/omni/` is correct

**If styling is broken:**
1. Clear your browser cache
2. Check that all `_next/static/` files are present
3. Verify the asset paths are correct

### File Permissions
Ensure these permissions are set:
- Folders: 755
- Files: 644
- `.htaccess`: 644

## 📁 What's Included

- **Optimized Static Files**: All HTML, CSS, and JavaScript files
- **Assets**: Images and fonts
- **Routing Configuration**: `.htaccess` for proper URL handling
- **Error Pages**: Custom 404 page
- **Performance Optimizations**: Minified and compressed files

## 🎯 Features Ready for Production

✅ **Static Export**: No server-side rendering required
✅ **Optimized Assets**: Compressed images and fonts
✅ **SEO Ready**: Proper meta tags and structure
✅ **Mobile Responsive**: Works on all devices
✅ **Error Handling**: Graceful error messages
✅ **Retry Logic**: Automatic retry for failed API calls
✅ **CORS Compatible**: Direct API calls to Langflow

## 🔄 Future Updates

To update your application:
1. Make changes to your local development environment
2. Run `npm run export` to generate new static files
3. Create a new zip file with the `out/` folder contents
4. Upload and extract to replace existing files

---

**Your Omni AI Interface is now ready for production on cPanel! 🎉**