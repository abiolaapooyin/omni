# Vercel Deployment Guide for Omni AI Interface

## Overview
This guide will help you deploy the Omni AI Interface to Vercel, a platform optimized for Next.js applications with automatic scaling and global CDN.

## Prerequisites
- GitHub account
- Vercel account (free tier available)
- Git installed locally

## Step 1: Prepare Your Repository

### 1.1 Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit for Vercel deployment"
```

### 1.2 Push to GitHub
1. Create a new repository on GitHub
2. Add the remote origin:
```bash
git remote add origin https://github.com/yourusername/omni-ai-interface.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### 2.1 Connect GitHub to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository

### 2.2 Configure Project Settings
- **Framework Preset**: Next.js
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 2.3 Environment Variables
In the Vercel dashboard, add these environment variables:

```
NODE_ENV=production
CUSTOM_KEY=your_custom_key_here
```

**To add environment variables:**
1. Go to your project dashboard
2. Click "Settings" tab
3. Click "Environment Variables"
4. Add each variable with its value

## Step 3: Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete (usually 1-3 minutes)
3. Your app will be available at `https://your-project-name.vercel.app`

## Step 4: Custom Domain (Optional)

### 4.1 Add Custom Domain
1. In project settings, go to "Domains"
2. Add your custom domain (e.g., `omni.yourdomain.com`)
3. Configure DNS records as instructed by Vercel

### 4.2 DNS Configuration
Add these records to your DNS provider:
```
Type: CNAME
Name: omni (or your subdomain)
Value: cname.vercel-dns.com
```

## Step 5: Automatic Deployments

Vercel automatically deploys when you push to your main branch:

```bash
# Make changes to your code
git add .
git commit -m "Update feature"
git push origin main
```

## Configuration Files Explained

### vercel.json
```json
{
  "version": 2,
  "name": "omni-ai-interface",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "functions": {
    "pages/api/**/*.js": {
      "maxDuration": 30
    }
  }
}
```

### next.config.js (Vercel Optimized)
```javascript
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: false // Vercel supports image optimization
  },
  swcMinify: true,
  compress: true,
}
```

## Troubleshooting

### Build Failures
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility

### Runtime Errors
1. Check Function Logs in Vercel dashboard
2. Verify environment variables are set correctly
3. Check for any hardcoded localhost URLs

### Performance Issues
1. Enable Vercel Analytics in project settings
2. Use Vercel's built-in image optimization
3. Implement proper caching strategies

## Vercel Features

### Analytics
- Real-time performance metrics
- Core Web Vitals tracking
- User experience insights

### Edge Functions
- Global edge network
- Automatic scaling
- Zero cold starts for static content

### Preview Deployments
- Every pull request gets a preview URL
- Test changes before merging
- Share previews with team members

## Success Checklist

- [ ] Repository pushed to GitHub
- [ ] Vercel project created and connected
- [ ] Environment variables configured
- [ ] Successful deployment
- [ ] Application accessible via Vercel URL
- [ ] All features working correctly
- [ ] Custom domain configured (if needed)
- [ ] Automatic deployments working

## Next Steps

1. **Monitor Performance**: Use Vercel Analytics to track your app's performance
2. **Set Up Monitoring**: Configure error tracking and logging
3. **Optimize**: Use Vercel's recommendations for performance improvements
4. **Scale**: Upgrade to Pro plan if you need more resources

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**Deployment URL**: Your app will be available at `https://your-project-name.vercel.app`

**Estimated Deployment Time**: 2-5 minutes

**Cost**: Free tier includes 100GB bandwidth and unlimited personal projects