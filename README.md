
# Lifeline Tuition Bureau - Anisabad, Patna

A high-performance, SEO-optimized React website for Lifeline Tuition Bureau.

## 🚀 How to Deploy

### 1. Setup Gemini AI (Optional but Recommended)
To enable the AI Assistant:
- Get an API Key from [Google AI Studio](https://aistudio.google.com/).
- Add it to your hosting provider as an environment variable named `API_KEY`.

### 2. Setup Email Notifications
To receive student/tutor inquiries in your email:
- Visit [Web3Forms](https://web3forms.com/) and enter your email (`arunjaygautam@gmail.com`).
- You will receive an Access Key via email.
- Open `components/StudentForm.tsx` and `components/TutorForm.tsx` and replace `YOUR_ACCESS_KEY_HERE` with your key.

### 3. Deploying to Vercel/Netlify
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 18+

## 🛠 Features
- **AI Assistant:** Powered by Gemini 3 Flash to answer parent queries.
- **Admin Dashboard:** View inquiries directly on the site (stored locally in browser).
- **SEO Optimized:** Structured data for Google Search (JSON-LD).
- **Responsive:** Mobile-first design for parents on the go.
