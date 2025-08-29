# thesoungali.com — Futuristic Website with AI & Security

This repository contains the source code for **[thesoungali.com](https://thesoungali.com)** — the official futuristic personal website of **Soungali Diarra**. It integrates an AI assistant powered by OpenAI, advanced security measures, and social network affiliations.

---

## Features

- ⚡ **Futuristic UI** with TailwindCSS, responsive and modern.
- 🤖 **AI Assistant** (OpenAI GPT-4o-mini via secure backend proxy).
- 🔐 **Security-first architecture**: JWT authentication, 2FA ready, rate limiting.
- 🌐 **Social Media Integrations**: OAuth2 with X (Twitter), Instagram, TikTok.
- 📊 **Analytics Dashboard** for monitoring and insights.
- 🔒 **Server hardening** with Helmet, rate-limiter, and CORS restrictions.

---

## Tech Stack

**Frontend**  
- React + Vite (or Next.js if preferred)  
- TailwindCSS + Framer Motion  

**Backend**  
- Node.js + Express.js  
- OpenAI API (proxied securely via `/api/ai`)  
- Helmet, express-rate-limit for security  

**Deployment**  
- Vercel (Frontend)  
- Vercel Serverless Functions / AWS Lambda / Cloud Run (API backend)  

---

## Getting Started

### 1. Clone the repo
```bash
 git clone https://github.com/yourusername/thesoungali.com.git
 cd thesoungali.com
```

### 2. Install dependencies
```bash
 npm install
```

### 3. Run the development server
```bash
 npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure
```
thesoungali.com/
│
├── frontend/              # React + Tailwind code
│   ├── src/
│   │   ├── App.jsx        # Main site component
│   │   └── ...
│   └── index.html
│
├── backend/               # Express API proxy
│   └── server.js
│
├── package.json
├── README.md              # This file
└── .gitignore
```

---

## Environment Variables

Create a `.env` file in `/backend` with:
```
OPENAI_API_KEY=sk-xxxx
PORT=3000
```

⚠️ **Never commit `.env` files to GitHub.**

---

## Deployment

### Vercel (recommended)
- Deploy **frontend** with Vercel (build command: `npm run build`, output: `dist`).
- Deploy **backend** as Vercel Serverless Functions or separately with AWS Lambda/Cloud Run.

### Docker (alternative)
```bash
 docker build -t thesoungali .
 docker run -p 3000:3000 thesoungali
```

---

## License

MIT License © 2025 [Soungali Diarra](https://thesoungali.com)

---

### Author
**Soungali Diarra** — [@thesoungali](https://x.com/thesoungali)

