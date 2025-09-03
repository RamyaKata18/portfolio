# Deployment Guide for Your React Portfolio

## Quick Deployment Options

### Option 1: Netlify (Recommended)
1. Visit [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Deploy manually"
3. Build your project: `npm run build`
4. Drag and drop the `dist` folder to Netlify
5. Your site will be live instantly!

### Option 2: Vercel
1. Visit [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import from Git or drag and drop your project folder
4. Vercel will auto-detect it's a Vite project
5. Deploy with default settings

### Option 3: GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml` (see below)

### Option 4: Surge.sh (Fastest)
1. Install Surge: `npm install -g surge`
2. Build project: `npm run build`
3. Deploy: `surge dist`
4. Follow prompts to set domain

## GitHub Actions Workflow (for GitHub Pages)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Build Commands
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Dev**: `npm run dev`

## Environment Setup
Make sure you have Node.js 16+ installed before deploying.

Your portfolio is ready for deployment! 🚀
