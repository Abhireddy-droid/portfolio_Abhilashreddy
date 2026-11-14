# V. Abhilash Reddy - Personal Portfolio

Production-ready, high-performance personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with an iOS 27 inspired tactile minimalist aesthetic, subtle scroll animations, dark/light theme persistence, dynamic project case study modals, working EmailJS contact form, and Google Analytics 4 integration.

---

## 🎨 Design System & Highlights
- **Palette**: `#A8BACF` (Soft Slate), `#C4D7DA` (Mint Frost), `#DFF3E4` (Pastel Sage) with deep dark mode tokens (`#0C1017`, `#141C26`) and crisp light mode surfaces.
- **Typography**: Apple Human Interface / iOS system font stack (`-apple-system`, `SF Pro Display`, `system-ui`).
- **Accessibility**: Semantic HTML, skip link, WCAG AA contrast, keyboard modal traps, and native `prefers-reduced-motion` detection.
- **SEO**: Meta tags, Open Graph / Twitter previews, Person Schema JSON-LD structured data, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🚀 Quick Start (Local Setup)

### 1. Install Dependencies
```bash
cd "C:\Users\MY PC\OneDrive\Desktop\portfolio"
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🛠️ Configuration & Customization Guide

### 1. Updating Content & Personal Details
All portfolio data is centralized in a single typed file:
`src/data/portfolioData.ts`
- **Name, Title, Bio, Location**: Update `personalInfo` object.
- **Projects**: Add, remove, or modify items in `projectsData`.
- **Skills**: Adjust categories or proficiency levels in `skillCategories`.
- **Timeline**: Update education or work experience in `experienceTimeline`.
- **Blog / Writing**: Add articles or links in `blogPostsData`.

### 2. Connecting Your EmailJS Account (Live Contact Form)
The contact form currently has a simulated fallback. To connect your live email inbox:
1. Sign up for a free account at [EmailJS](https://www.emailjs.com).
2. Add an Email Service (e.g., Gmail) & note your `SERVICE_ID`.
3. Create an Email Template with fields `user_name`, `user_email`, `subject`, and `message`, and note your `TEMPLATE_ID`.
4. Copy your `PUBLIC_KEY` from Account > API Keys.
5. Add them to `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Setting Up Google Analytics 4 (GA4)
1. In Google Analytics, create a web stream for your site.
2. Copy your Measurement ID (e.g. `G-XXXXXXXXXX`).
3. Add it to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4. Replacing Your Resume PDF
Place your final PDF file in `public/V_Abhilash_Reddy_Resume.pdf`.

---

## 🌐 Deploying to Vercel (Recommended)

1. **Push your repository to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/Abhireddy-droid/portfolio.git
   git push -u origin main
   ```
2. **Deploy via Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New** > **Project** and import `portfolio`.
   - Under **Environment Variables**, add:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     - `NEXT_PUBLIC_GA_ID`
   - Click **Deploy**. Vercel will build and assign a free `.vercel.app` URL with automated HTTPS and CDN edge caching.
3. **Custom Domain**:
   - In Vercel Project Settings > **Domains**, enter your domain (e.g. `abhilashreddy.dev`).
   - Add the provided DNS `CNAME` or `A` records at your domain registrar (GoDaddy, Namecheap, Cloudflare).
   - Vercel automatically issues and renews your SSL certificate.

---

## 📋 Pre-Launch Verification Checklist
- [ ] Replace `[REPLACE]` placeholders in `src/data/portfolioData.ts` and `src/app/layout.tsx`.
- [ ] Add real `public/V_Abhilash_Reddy_Resume.pdf`.
- [ ] Test form submission with your EmailJS credentials.
- [ ] Verify dark/light toggle across multiple browsers.
- [ ] Check mobile responsive layout on 360px, 768px, and 1280px screen widths.
- [ ] Run Lighthouse audit in Chrome DevTools to ensure 90+ across all 4 categories.
