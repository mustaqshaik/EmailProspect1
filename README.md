# ProspectPilot 🚀

ProspectPilot is an AI-powered local B2B lead generation, website audit, and personalized cold outreach engine. It automatically discovers local business leads, extracts contact emails, performs visual UX/conversion audits using Google Gemini AI, and generates tailored cold email pitches.

---

## ⚡ Deployment to Netlify

ProspectPilot is pre-configured for seamless 1-click deployment to **Netlify** with full serverless Express API function support.

Detailed instructions on setup, environment secrets, and Netlify UI configuration can be found in:

👉 **[NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md)**

### Required Netlify Environment Secrets:
- **`GEMINI_API_KEY`** *(Required)*: Get a free key at [Google AI Studio](https://aistudio.google.com/app/apikey).
- **`GEOAPIFY_API_KEY`** *(Optional)*: Key for live location search at [Geoapify](https://myprojects.geoapify.com/).
- **`APP_URL`** *(Optional)*: Your live app URL.

---

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and configure your keys:
   ```bash
   cp .env.example .env
   ```

3. Start dev server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser.
