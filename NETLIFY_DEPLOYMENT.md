# Netlify Deployment Guide for ProspectPilot

This document provides step-by-step instructions to deploy **ProspectPilot** to Netlify, including required secrets, configuration setup, and deployment workflows.

---

## 📋 Table of Contents
1. [Prerequisites](#-prerequisites)
2. [Secrets & Environment Variables](#-secrets--environment-variables)
3. [How to Add Secrets in Netlify](#-how-to-add-secrets-in-netlify)
4. [Deployment Steps (Git Integration)](#-deployment-steps-git-integration)
5. [Deployment Steps (Netlify CLI)](#-deployment-steps-netlify-cli)
6. [Netlify Configuration Files Included](#-netlify-configuration-files-included)
7. [Post-Deployment Verification](#-post-deployment-verification)

---

## 🔑 Secrets & Environment Variables

Copy and paste the following environment variable names and their corresponding values into Netlify.

| Variable Name | Required? | Description & Source | Example Value |
|---|---|---|---|
| `GEMINI_API_KEY` | **Required** | Google Gemini API key used for AI-powered website audits and cold email generation. Get yours for free at [Google AI Studio](https://aistudio.google.com/app/apikey). | `AIzaSyD...` |
| `GEOAPIFY_API_KEY` | *Optional* | Key for live business location search. If omitted or invalid, ProspectPilot automatically uses its built-in fallback search. Get one at [Geoapify](https://myprojects.geoapify.com/). | `4c8d9a...` |
| `APP_URL` | *Optional* | Your live Netlify app URL. Used for self-referential requests and headers. | `https://your-app-name.netlify.app` |

---

## 🛠️ How to Add Secrets in Netlify

### Method A: Via Netlify Web UI (Recommended)
1. Go to your **[Netlify Team Dashboard](https://app.netlify.app/)**.
2. Select your deployed ProspectPilot site (or select **"Add new site"** first).
3. In the left navigation sidebar, click **Site configuration** (or **Site settings**).
4. Click **Environment variables**.
5. Click **Add a variable** -> **Add a single variable**.
6. Enter the key and value:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: *(Paste your Gemini API key starting with `AIzaSy...`)*
7. Repeat for optional variables (`GEOAPIFY_API_KEY`, `APP_URL`).
8. Click **Save**.
9. *(Important)* If you added variables after your first build, click **Deploys** -> **Trigger deploy** -> **Clear cache and deploy site** to ensure the new secrets are active.

---

## 🚀 Deployment Steps (Git Integration)

1. **Push Code to GitHub / GitLab / Bitbucket**:
   Ensure all project files (including `netlify.toml` and `netlify/functions/api.ts`) are pushed to your repository.

2. **Connect to Netlify**:
   - Log into [Netlify](https://app.netlify.app/).
   - Click **Add new site** > **Import an existing project**.
   - Select your Git provider and choose the repository containing this app.

3. **Configure Build Settings**:
   Netlify will automatically detect settings from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Functions Directory**: `netlify/functions`

4. **Add Environment Variables**:
   - Before hitting "Deploy", click **Advanced** or navigate to **Site configuration** > **Environment variables**.
   - Add `GEMINI_API_KEY`.

5. **Deploy**:
   - Click **Deploy site**.
   - Netlify will build the React frontend into `dist/` and compile the Express serverless functions into `netlify/functions/api`.

---

## 💻 Deployment Steps (Netlify CLI)

If deploying directly from your local terminal using the Netlify CLI:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Log in to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize Project**:
   ```bash
   netlify init
   ```

4. **Set Environment Variables via CLI**:
   ```bash
   netlify env:set GEMINI_API_KEY "your_gemini_api_key_here"
   netlify env:set GEOAPIFY_API_KEY "your_geoapify_key_here"
   ```

5. **Deploy to Production**:
   ```bash
   netlify deploy --build --prod
   ```

---

## 📂 Netlify Configuration Files Included

The codebase includes all necessary architecture files for Netlify serverless execution:

1. **`netlify.toml`**:
   Configures build settings, function bundler (`esbuild`), and rewrites `/api/*` requests to the Netlify serverless function while routing all frontend paths to `index.html` (SPA fallback).

2. **`netlify/functions/api.ts`**:
   Wraps the full Express server API using `serverless-http` so that all backend API routes (`/api/leads/search`, `/api/leads/extract-email`, `/api/leads/audit-and-draft`, `/api/health`) run seamlessly on Netlify Functions without server setup.

---

## ✅ Post-Deployment Verification

Once deployed, verify that your Netlify deployment is running smoothly:

1. **Health Check**:
   Visit `https://<your-site>.netlify.app/api/health` in your browser.
   It should return:
   ```json
   {
     "status": "ok",
     "timestamp": "2026-08-09T11:12:00.000Z"
   }
   ```

2. **Test Search & AI Audits**:
   Open your app in the browser, search for local business leads (e.g., *Dentist in Austin, TX*), and verify that lead fetching, email scraping, and Gemini AI website audits run smoothly.
