# Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: "npm: command not found" or "node: command not found"

**Problem:** Node.js is not installed on your system.

**Solution:**
1. Install Node.js from https://nodejs.org/ (download LTS version)
2. After installation, restart your terminal
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Issue 2: Opening index.html directly in browser shows blank page

**Problem:** React apps need to be built and served, not opened directly as HTML files.

**Solution:**
1. First install dependencies:
   ```bash
   npm install
   ```
2. Then start the development server:
   ```bash
   npm run dev
   ```
3. Open the URL shown in terminal (usually http://localhost:5173)

### Issue 3: "Cannot find module" errors

**Problem:** Dependencies are not installed.

**Solution:**
```bash
npm install
```

### Issue 4: Port already in use

**Problem:** Another application is using port 5173.

**Solution:**
1. Stop the other application, or
2. Change the port in vite.config.js:
   ```js
   export default defineConfig({
     plugins: [react()],
     server: {
       port: 3000
     }
   })
   ```

### Issue 5: Styles not loading

**Problem:** Tailwind CSS might not be processing correctly.

**Solution:**
1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```
2. Check that `src/index.css` exists and has Tailwind directives
3. Restart the dev server

## Quick Start Steps

1. **Check Node.js is installed:**
   ```bash
   node --version
   ```
   Should show v16 or higher.

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to the URL shown in terminal (usually http://localhost:5173)

## Still Not Working?

If you're still having issues, please provide:
- The exact error message you see
- What command you ran
- Your Node.js version (`node --version`)
- Your operating system

