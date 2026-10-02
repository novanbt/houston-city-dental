# Houston City Dental — Luxury Private Dental Care Website

A modern, responsive, high-performance website designed for **Houston City Dental**, a premier private dental practice in Houston, TX.

---

## 🌟 Features

- **Luxury Aesthetic**: Sophisticated visual identity with bespoke typography (Playfair Display, Great Vibes cursive logo, Plus Jakarta Sans).
- **Interactive Multi-Step Booking**: Fully featured appointment booking flow with real-time validation, service selection, and slot availability.
- **Modern Responsive Design**: Optimized across mobile, tablet, and desktop devices.
- **Fast & Zero-Dependency**: Pure vanilla HTML5, CSS3, and JavaScript — lightning-fast load times.
- **SEO & Schema Ready**: Complete with OpenGraph tags, Twitter Cards, and Schema.org `Dentist` JSON-LD structured data.
- **Vercel Optimized**: Pre-configured headers, security policies, and asset caching rules in `vercel.json`.

---

## 📁 Project Structure

```
├── assets/
│   └── images/          # High-resolution clinic, service, and team imagery
├── components/          # Reusable UI component templates
├── css/
│   └── styles.css       # Unified design tokens and responsive stylesheet
├── js/
│   ├── booking.js       # Booking modal & appointment scheduling logic
│   ├── data.js          # Services, doctors, reviews, and clinic data
│   └── main.js          # Mobile navigation, smooth scroll, and interactions
├── index.html           # Main landing page
├── package.json         # Project metadata and run scripts
├── server.js            # Zero-dependency local Node.js development server
├── vercel.json          # Vercel deployment configuration & security headers
└── .gitignore           # Git ignore rules
```

---

## 💻 Local Development

Run the local development server:

```bash
# Using Node.js directly
node server.js

# Or using npm
npm run dev
```

Visit the website at **[http://localhost:5500](http://localhost:5500)**.

---

## 🚀 How to Push to GitHub

### 1. Initialize and Commit (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Houston City Dental website"
```

### 2. Connect to your GitHub Repository
Create a new repository on [GitHub](https://github.com/new) (e.g., `houston-city-dental`), then run:

```bash
# Rename default branch to main
git branch -M main

# Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/houston-city-dental.git

# Push your code
git push -u origin main
```

---

## ☁️ How to Deploy on Vercel

### Method 1: Automatic Deployment via GitHub (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** > **"Project"**.
3. Select **Import Git Repository** and choose your `houston-city-dental` repository.
4. Leave the default settings (Framework Preset: **Other**, Root Directory: `./`).
5. Click **"Deploy"**.
6. Every time you push changes to GitHub, Vercel will automatically re-deploy your site!

### Method 2: Deploy using Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel

# Deploy to production
vercel --prod
```
