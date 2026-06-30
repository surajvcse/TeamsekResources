# Temasek Resources Pvt Ltd — Website (React + Vite)

Specialized ground-engineering company website. Built with **React 18** and **Vite**.
All background animations (topographic hero, sector grid, shaft cross-section) are pure
canvas components — no video files — so the site loads instantly.

## Requirements
- Node.js 18+ and npm

## Run locally
```bash
npm install
npm run dev        # starts the dev server (Vite prints the local URL, usually http://localhost:5173)
```

## Build for production
```bash
npm run build      # outputs static files to /dist
npm run preview    # serve the production build locally to test
```
Deploy the contents of `/dist` to any static host (Netlify, Vercel, GitHub Pages, S3, Nginx, etc.).

## Project structure
```
temasek-resources/
├─ index.html              # Vite entry, loads Google Fonts
├─ vite.config.js
├─ public/
│  └─ projects/            # project photos (jpg)
└─ src/
   ├─ main.jsx             # React entry
   ├─ App.jsx              # page composition
   ├─ index.css            # all styles (CSS variables + responsive)
   ├─ useReveal.js         # scroll-reveal hook (IntersectionObserver)
   ├─ projects.js          # project gallery data
   ├─ canvas/
   │  ├─ TopoCanvas.jsx    # hero background animation
   │  ├─ GridCanvas.jsx    # sectors background animation
   │  └─ ShaftCanvas.jsx   # shaft cross-section animation
   └─ components/
      ├─ Logo.jsx  Nav.jsx  Hero.jsx  Ticker.jsx  Services.jsx
      ├─ Process.jsx  Sectors.jsx  Band.jsx  Projects.jsx
      ├─ Why.jsx  Clients.jsx  Enquiry.jsx  Footer.jsx
```

## Things to update before going live
- **Contact details** in `Enquiry.jsx` and `Footer.jsx` (email / phone / address are placeholders).
- The **enquiry form** opens the visitor's mail client (mailto). To receive submissions
  server-side instead, point the `submit` handler in `Enquiry.jsx` at your backend or a
  service like Formspree.
- **Project images** live in `public/projects/` — swap or add files and edit `src/projects.js`.
- The **clients** list in `Clients.jsx` reflects the supplied material; adjust as needed.
