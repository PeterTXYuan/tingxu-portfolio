# Tingxu Yuan – Personal Portfolio Website

This repository contains the source code for my personal portfolio website, built to showcase my projects, experience, and background as a Computer Science / ACMS undergraduate at the University of Washington.

The site is designed to be fast, readable, and maintainable, while demonstrating real-world frontend engineering practices.

🔗 **Live site:** (add your Vercel link here once deployed)

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Content:** MDX (for Projects, Experience, Skills, Contact)
- **Animation:** Framer Motion
- **Deployment:** Vercel
- **Language:** TypeScript

---

## Features

- **App Router–based routing**
  - File-system routing (`/projects`, `/experience`, `/skills`, `/contact`, `/resume`)

- **MDX-driven content**
  - Easy-to-edit markdown pages with React component support

- **Expandable card UI**
  - Click-to-expand cards for Projects and Experience
  - Smooth animations using Framer Motion

- **Image gallery & preview**
  - Multiple images per card with modal-style preview

- **PDF hosting**
  - Resume and research papers served from `/public`

- **Responsive design**
  - Fully usable on desktop and mobile

- **Clean navigation**
  - Active route highlighting in the navbar

---

## Project Structure
```
.
├── app/
│   ├── layout.tsx        # Root layout & navigation
│   ├── page.tsx          # Home page
│   ├── projects/         # Projects page
│   ├── experience/       # Experience page
│   ├── skills/           # Skills page (MDX)
│   ├── contact/          # Contact page (MDX)
│   └── resume/           # Resume page
│
├── components/
│   └── ExpandableCard.tsx
│
├── content/
│   ├── projects/         # Project MDX content
│   └── experience/       # Experience MDX content
│
├── public/
│   ├── images/           # Images used in cards
│   └── pdfs/             # Resume & research PDFs
│
├── styles/
│   └── globals.css
│
└── README.md
```

---

## Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`.

---

## Why This Architecture?

- **Next.js App Router** for scalable routing and modern React patterns
- **MDX** to separate content from layout while retaining flexibility
- **Reusable UI components** to reduce duplication and improve maintainability
- **Client-only interactivity** isolated where needed (`"use client"`)
- **Static assets in `/public`** for reliable deployment without missing files

This setup mirrors how production-grade frontend projects are structured.

---

## Future Improvements

- Dark mode toggle
- Blog section (MDX-based)
- SEO metadata per page
- Lighthouse performance tuning
- Analytics (privacy-friendly)

---

## Author

**Tingxu Yuan**  
ACMS @ University of Washington  
Aspiring Software Engineer

- **GitHub:** [https://github.com/PeterTXYuan](https://github.com/PeterTXYuan)
- **LinkedIn:** [https://www.linkedin.com/in/tingxu-yuan-a2bab5333/](https://www.linkedin.com/in/tingxu-yuan-a2bab5333/)
