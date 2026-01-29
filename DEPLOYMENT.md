# Deployment Guide

This guide provides instructions for deploying the Ganeshadhari Agriculture website to various hosting platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Build Process](#build-process)
- [Deployment Options](#deployment-options)
  - [Vercel](#vercel-recommended)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
  - [Traditional Web Hosting](#traditional-web-hosting)
- [Environment Configuration](#environment-configuration)
- [Post-Deployment](#post-deployment)

## Prerequisites

Before deploying, ensure you have:
- Node.js 16.x or higher installed
- Git installed and repository initialized
- All dependencies installed (`pnpm install`)
- Code committed to a Git repository

## Build Process

### 1. Test the Production Build Locally

```bash
# Build the project
pnpm build

# Preview the production build
pnpm preview
```

Visit `http://localhost:4173` to test the production build locally.

### 2. Verify Build Output

The build process creates a `dist/` directory containing:
- `index.html` - Main HTML file
- `assets/` - Optimized JS, CSS, and asset files
- Static assets and images

## Deployment Options

### Vercel (Recommended)

Vercel provides excellent support for Vite applications with zero configuration.

#### Method 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Method 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel auto-detects Vite configuration
7. Click "Deploy"

**Build Configuration:**
- Build Command: `pnpm build`
- Output Directory: `dist`
- Install Command: `pnpm install`

### Netlify

Netlify also provides excellent support for modern web applications.

#### Method 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
pnpm build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

#### Method 2: Deploy via Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - Build Command: `pnpm build`
   - Publish Directory: `dist`
6. Click "Deploy site"

#### Create netlify.toml (Optional)

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

GitHub Pages is a free option for hosting static websites.

#### Steps:

1. Install gh-pages package:
```bash
pnpm add -D gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "predeploy": "pnpm build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/ganeshadhari-agriculture"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/ganeshadhari-agriculture/',
  // ... rest of config
});
```

4. Deploy:
```bash
pnpm deploy
```

### Traditional Web Hosting

For traditional hosting (cPanel, FTP, etc.):

#### Steps:

1. Build the project:
```bash
pnpm build
```

2. Upload the contents of the `dist/` directory to your web server's public directory (e.g., `public_html/`, `www/`, `htdocs/`)

3. Create `.htaccess` file in the root directory:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures proper routing for the single-page application.

## Environment Configuration

### Environment Variables

If you need to add environment variables:

1. Create `.env` file in the root directory:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_ANALYTICS_ID=your-analytics-id
```

2. Access in your code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add environment variables in your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment Variables

### Custom Domain

#### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

#### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

#### DNS Configuration Example:
```
Type: A
Name: @
Value: [Your hosting IP]

Type: CNAME
Name: www
Value: [Your hosting domain]
```

## Post-Deployment

### 1. Test the Live Site

Visit your deployed URL and test:
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Responsive design works on mobile/tablet
- [ ] No console errors
- [ ] Legal pages are accessible

### 2. Set Up Analytics (Optional)

Add Google Analytics, Plausible, or your preferred analytics tool.

### 3. Set Up Monitoring

Consider setting up:
- Uptime monitoring (e.g., UptimeRobot, Pingdom)
- Error tracking (e.g., Sentry)
- Performance monitoring (e.g., Google PageSpeed Insights)

### 4. Configure HTTPS

Ensure your site uses HTTPS:
- Vercel and Netlify provide automatic HTTPS
- For traditional hosting, obtain an SSL certificate (Let's Encrypt is free)

### 5. SEO Configuration

- Submit sitemap to Google Search Console
- Add meta tags for social media sharing
- Configure robots.txt if needed

### 6. Backup Strategy

Set up regular backups:
- Database backups (if applicable)
- Code repository backups
- Media files backups

## Continuous Deployment

### Automatic Deployments

With Vercel or Netlify connected to your Git repository:

1. Push to `main` branch → Automatic production deployment
2. Push to other branches → Preview deployments
3. Pull requests → Preview deployments

### Manual Deployments

For manual control:
```bash
# Build locally
pnpm build

# Deploy using your preferred method
```

## Troubleshooting

### Common Issues

**Issue: Blank page after deployment**
- Check browser console for errors
- Verify `base` path in `vite.config.ts`
- Ensure all assets are correctly referenced

**Issue: 404 errors on page refresh**
- Configure proper redirects (see platform-specific instructions above)
- Add `.htaccess` for Apache servers
- Configure server to serve `index.html` for all routes

**Issue: Assets not loading**
- Check asset paths are correct
- Verify build output in `dist/` directory
- Ensure CORS is configured if using external APIs

**Issue: Large bundle size**
- Run `pnpm build` and check bundle size
- Consider code splitting if needed
- Optimize images and assets

## Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Use WebP format where possible
   - Compress images
   - Use appropriate image sizes

2. **Code Splitting**
   - Already configured with Vite
   - Verify chunks are being created

3. **Enable Compression**
   - Most modern hosts enable gzip/brotli by default
   - Verify in Network tab

4. **Cache Headers**
   - Configure in hosting platform
   - Set appropriate cache durations

## Support

For deployment issues or questions:
- Email: info@ganeshadhari.com
- GitHub Issues: [Report an issue](https://github.com/yourusername/ganeshadhari-agriculture/issues)

## Security Checklist

Before going live:
- [ ] All sensitive data is in environment variables
- [ ] HTTPS is enabled
- [ ] Forms have CSRF protection (if applicable)
- [ ] Dependencies are up to date
- [ ] Security headers are configured
- [ ] No API keys exposed in frontend code

---

**Congratulations!** Your Ganeshadhari Agriculture website is now live! 🌱
