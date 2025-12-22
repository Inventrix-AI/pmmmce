# Deployment Guide for PMMMCE Website

This guide details how to deploy the full-stack PMMMCE website to a production environment (VPS, DigitalOcean, railway.app, etc.).

## 1. Prerequisites
- **Node.js** (v18+)
- **PostgreSQL** Database
- **Git**

## 2. Build the Frontend
 The frontend uses Vite. We need to build the static assets.

```bash
cd frontend
npm install
npm run build
```
*Output will be in `frontend/dist`. The backend needs to serve these files.*

## 3. Backend Setup
The backend serves both the API and the static frontend files.

1. **Install Dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the `backend/` directory (or set env vars in your cloud provider):
   ```
   PORT=8080
   DATABASE_URL=postgres://user:password@host:5432/dbname
   JWT_SECRET=complex_secure_secret_key
   NODE_ENV=production
   ```

3. **Serve Frontend:**
   Ensure `server.js` is configured to serve the `frontend/dist` folder for non-API routes.
   *(Already implemented: `app.use(express.static(path.join(__dirname, '../frontend/dist')));`)*

## 4. Database Migration
On the first run, the backend will automatically sync models (create tables).
To seed the Admin User:
```bash
node backend/seed-admin.js
```

## 5. Process Management (PM2)
For production, use PM2 to keep the server running.

```bash
npm install -g pm2
pm2 start backend/server.js --name "pmmmce-app"
pm2 save
```

## 6. Nginx Reverse Proxy (Optional/Recommended)
If using a VPS, run Nginx on port 80/443 and proxy to port 8080.

```nginx
server {
    listen 80;
    server_name pmmmce.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
