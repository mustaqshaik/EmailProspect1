# Netlify Deployment Guide for ProspectPilot 🚀

This document is the complete guide for deploying **ProspectPilot** to [Netlify](https://www.netlify.com/). It details every secret required, exact click-by-click instructions on how to paste them into Netlify, build configuration, and troubleshooting steps.

---

## 📋 Table of Contents
1. [Architecture Overview](#-architecture-overview)
2. [Exact Secrets & Environment Variables](#-exact-secrets--environment-variables)
3. [Step-by-Step: How to Add Secrets in Netlify](#-step-by-step-how-to-add-secrets-in-netlify)
4. [Deployment via Git (GitHub / GitLab / Bitbucket)](#-deployment-via-git)
5. [Deployment via Netlify CLI (Terminal)](#-deployment-via-netlify-cli)
6. [Pre-Configured Architecture Files](#-pre-configured-architecture-files)
7. [Post-Deployment Verification Checklist](#-post-deployment-verification-checklist)
8. [Troubleshooting & FAQs](#-troubleshooting--faqs)

---

## 🏛️ Architecture Overview

ProspectPilot is a full-stack web application designed to run on Netlify with zero server maintenance:

- **Frontend**: Built with React, Vite, and Tailwind CSS. Static assets are built into the `dist/` directory and served by Netlify's high-speed global CDN.
- **Backend API**: Powered by an Express.js API wrapped in a Netlify Serverless Function (`netlify/functions/api.ts`) using `serverless-http`.
- **API Routing**: `netlify.toml` automatically proxies all `/api/*` frontend calls to the serverless function (`/.netlify/functions/api/*`).
- **SPA Fallback**: `netlify.toml` redirects all non-API paths (`/*`) to `/index.html` with HTTP 200, ensuring seamless client routing and page refreshes.

---

## 🔑 Exact Secrets & Environment Variables

Below are the exact environment variable keys you need to provide in your Netlify dashboard:

| Variable Name | Required? | What It Does | Where to Get It | Value Format |
|---|---|---|---|---|
| **`GEMINI_API_KEY`** | **YES (Required)** | Authenticates with Google Gemini API to analyze target websites, identify conversion bottlenecks, and write hyper-personalized cold outreach emails. | [Google AI Studio](https://aistudio.google.com/app/apikey) (Free) | `AIzaSy...` (approx. 39 characters) |
| **`GEOAPIFY_API_KEY`** | *Optional* | Powers live geographical searches for businesses across Indian cities. If left blank, the app gracefully falls back to its curated high-density directory (up to 20 verified leads per niche/city). | [Geoapify API Keys](https://myprojects.geoapify.com/) (Free tier available) | `32-character hex string` (e.g. `4c8d9a...`) |
| **`APP_URL`** | *Optional* | The live public domain of your deployed application. Used for canonical headers and internal reference. | Your Netlify site domain | `https://your-site-name.netlify.app` |
| **`NODE_VERSION`** | *Optional* | Specifies the Node.js runtime for build and serverless functions (already configured to `20` in `netlify.toml`). | Built into Netlify | `20` |

---

## 🛠️ Step-by-Step: How to Add Secrets in Netlify

Follow these exact steps in your Netlify dashboard:

### Method 1: Via the Netlify Web Dashboard (Recommended)

1. Open **[https://app.netlify.app](https://app.netlify.app)** in your browser and log in.
2. Select your site from the dashboard (e.g. `prospectpilot` or your generated site name).
3. In the left-hand navigation sidebar, click on **Site configuration** (or **Site settings** in older views).
4. Click on **Environment variables** (under *Build & deploy*).
5. Click the blue **Add a variable** button and select **Add a single variable**.
6. Enter the first secret:
   - **Key**: `GEMINI_API_KEY`
   - **Values**: Paste your secret Gemini API key (starts with `AIzaSy...`).
   - **Scopes**: Leave set to **Same value for all deploy contexts** and **All scopes** (Builds, Functions, Runtime).
7. Click **Create variable**.
8. *(Optional)* Click **Add a variable** again to add `GEOAPIFY_API_KEY`:
   - **Key**: `GEOAPIFY_API_KEY`
   - **Value**: Paste your Geoapify key.
   - Click **Create variable**.
9. *(Optional)* Click **Add a variable** for `APP_URL`:
   - **Key**: `APP_URL`
   - **Value**: `https://<your-site-name>.netlify.app`
   - Click **Create variable**.

> ⚠️ **CRITICAL STEP AFTER ADDING SECRETS**:
> Environment variables do not apply to builds that were already completed before the variables were added.
> 1. In the top navigation bar, click **Deploys**.
> 2. Click the **Trigger deploy** dropdown button on the right.
> 3. Select **Clear cache and deploy site**.
> This ensures your serverless functions are re-compiled with the new environment variables active.

---

### Method 2: Bulk Import from `.env`

If you prefer pasting all variables at once:
1. In **Site configuration** > **Environment variables**, click **Add a variable** > **Import from a .env file**.
2. Paste the following block (replace with your real keys):
   ```env
   GEMINI_API_KEY=AIzaSyYourActualKeyHere
   GEOAPIFY_API_KEY=your_geoapify_key_here
   NODE_VERSION=20
   ```
3. Click **Import variables**.
4. Go to **Deploys** > **Trigger deploy** > **Clear cache and deploy site**.

---

### Method 3: Via Netlify CLI (Terminal)

If you use the Netlify CLI on your machine:
```bash
# 1. Install CLI if not already installed
npm install -g netlify-cli

# 2. Login to your Netlify account
netlify login

# 3. Link this project to your Netlify site
netlify link

# 4. Set your environment variables
netlify env:set GEMINI_API_KEY "AIzaSyYourActualKeyHere"
netlify env:set GEOAPIFY_API_KEY "your_geoapify_key_here"

# 5. Trigger a fresh production build
netlify deploy --build --prod
```

---

## 🚀 Deployment via Git

Deploying through a Git provider (GitHub, GitLab, or Bitbucket) gives you automatic continuous deployment on every push.

### Step 1: Push Code to Git
Ensure your repository has all files, specifically:
- `netlify.toml`
- `netlify/functions/api.ts`
- `package.json`
- `src/` and `server/` directories

```bash
git add .
git commit -m "Configure Netlify deployment and serverless API"
git push origin main
```

### Step 2: Connect Repository in Netlify
1. Log into [Netlify Dashboard](https://app.netlify.app/).
2. Click **Add new site** > **Import an existing project**.
3. Choose your Git provider (**GitHub**, **GitLab**, or **Bitbucket**).
4. Authorize Netlify and select your `prospectpilot` repository.

### Step 3: Verify Build Settings
Netlify will automatically detect the settings defined in `netlify.toml`:
- **Base directory**: `.` (leave blank)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

### Step 4: Add Secrets Before Initial Build
Before clicking "Deploy", click **Add environment variables** and enter:
- `GEMINI_API_KEY` = `your_gemini_key`
- *(Optional)* `GEOAPIFY_API_KEY` = `your_geoapify_key`

### Step 5: Deploy
Click **Deploy site**. Within 1–2 minutes, Netlify will build your app and provide a live URL (e.g. `https://prospectpilot-xyz.netlify.app`).

---

## 📂 Pre-Configured Architecture Files

The repository is already configured with all required Netlify infrastructure files:

### 1. `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "20"

[functions]
  node_bundler = "esbuild"
  external_node_modules = ["vite"]

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
- Sets Node 20 as the runtime for modern `fetch` and ES module support.
- Marks `vite` as external to reduce the serverless function bundle by ~70% and prevent build warnings.
- Rewrites all `/api/*` routes to Netlify Functions without CORS issues.
- Handles SPA routing for client-side navigation.

### 2. `netlify/functions/api.ts`
```ts
import serverless from 'serverless-http';
import app from '../../server.ts';

export const handler = serverless(app);
```
- Uses `serverless-http` to wrap the Express application.
- Exposes all backend endpoints:
  - `GET /api/health`
  - `POST /api/leads/search`
  - `POST /api/leads/extract-email`
  - `POST /api/leads/audit-and-draft`

---

## ✅ Post-Deployment Verification Checklist

After deploying your site, perform these quick tests to confirm everything works:

### Test 1: API Health Check
In your browser or terminal, visit:
```
https://<your-site-name>.netlify.app/api/health
```
**Expected response**:
```json
{
  "status": "ok",
  "timestamp": "2026-09-18T18:00:00.000Z"
}
```
*If this returns `{ "status": "ok" }`, your serverless function is running.*

### Test 2: Search for Indian Leads
1. Go to your homepage `https://<your-site-name>.netlify.app`.
2. Select a Niche (e.g., **Dentist** or **Restaurant**).
3. Select an Indian City (e.g., **Bengaluru**, **Mumbai**, or **Delhi**).
4. Set Target Leads to **5** or **10**.
5. Click **Scrape & Audit Leads**.
6. **Expected outcome**: The pipeline searches and returns the requested number of businesses with addresses, phone numbers, and websites.

### Test 3: Gemini AI Website Audit & Pitch Generation
1. On any lead card, click **Extract Email** or click **Audit & Draft Pitch**.
2. **Expected outcome**:
   - The AI evaluates the business's website.
   - Extracts contact emails.
   - Assigns a UX / Conversion score (1-100).
   - Generates personalized value propositions and a tailored cold email draft.

---

## 🔧 Troubleshooting & FAQs

### 1. Error: `502 Bad Gateway` on `/api/leads/search` or `/api/leads/audit-and-draft`
- **Cause**: Missing or misspelled environment variable in Netlify, or the deploy was not re-triggered with a cleared cache.
- **Solution**:
  1. Verify in **Site configuration** > **Environment variables** that `GEMINI_API_KEY` is present and has no leading or trailing whitespace.
  2. Go to **Deploys** > **Trigger deploy** > **Clear cache and deploy site**.
  3. Check Netlify function logs: Go to **Logs** > **Functions** > `api` to see the live serverless stack trace.

### 2. Error: `504 Gateway Timeout` on AI Audit
- **Cause**: Netlify free tier serverless functions have a default execution timeout limit of 10 seconds.
- **Solution**:
  - ProspectPilot uses `@google/genai` with `gemini-2.5-flash`, which typically responds in 1.5–3 seconds.
  - Avoid clicking "Audit" on 10 leads simultaneously; audit them 1 or 2 at a time to stay well within serverless concurrency limits.
  - If on a Netlify Pro plan, function timeouts can be extended up to 26 seconds in `netlify.toml` under `[functions] timeout = 26`.

### 3. Error: `404 Not Found` when refreshing an inner page
- **Solution**: Handled automatically by the `/* -> /index.html 200` redirect rule in `netlify.toml`. If you modified `netlify.toml`, ensure that rule remains at the bottom of the file.

### 4. Can I use a Custom Domain?
- **Yes**: In Netlify, navigate to **Site configuration** > **Domain management** > **Add a domain**, and follow Netlify's DNS guide to point your domain or subdomain (e.g., `app.yourdomain.com`).
- Remember to update the `APP_URL` environment variable to `https://app.yourdomain.com`.
