# TECHTONIC '26 — Premium College Technical Event Registration Platform

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore_Ready-FFA611.svg)](https://firebase.google.com/)

> **Where Innovation Breaks Boundaries.**  
> Built for the **Google Developer Groups (GDG) IARE** Technical Team selection assignment.

---

## 📸 Reference Parity & Visual Aesthetic

This project faithfully recreates the visual design language, layout density, spacing, component structure, and overall aesthetic of the reference specification:

* **Color Palette:** Slate-and-indigo visual design (`#F8FAFC` slate background with fine technical grid lines, `#2563EB` and `#4F46E5` royal indigo accents, dark navy `#0B1120` footer and stats banners).
* **Typography:** Modern geometric sans-serif styling (`Plus Jakarta Sans` and `Inter`) paired with clean mono accents (`JetBrains Mono`).
* **Custom Wordmark:** Typography-based `TECHTONIC '26` logo with an orange circuit trace connector and `powered by DS Corporation` branding.
* **3D Technology Illustration:** Isometric glowing cube with illuminated "AI" cores and animated floating action badges (`Innovate`, `Collaborate`, `Build`, `Compete`).
* **Multi-Step Stepper Navigation:** Two-column registration layout matching the reference mockup with a 5-step progress indicator, trust badge, and bottom features bar.

---

## 🚀 Key Features

### 1. Landing Page
* **Two-Column Hero:**
  * Pill badge: `IARE TECHNICAL EVENT`
  * Hero Wordmark: `TECHTONIC '26` powered by DS Corporation
  * Hero Tagline: *"Where Innovation Breaks Boundaries."*
  * Hero Description: *"Explore emerging technologies, collaborate with creative minds, and transform bold ideas into real-world innovations at TECHTONIC '26."*
  * Metadata chips: Event dates (`Feb 15 – 16, 2026`), Venue (`IARE Campus, Hyderabad, India`), Eligibility (`Open to all College Students`).
  * Live ticking countdown timer to February 15, 2026 (`Days`, `Hours`, `Minutes`, `Seconds`).
  * Primary action buttons: `Register Now →` and `Explore Event ↓`.
* **3D Isometric Graphic:**
  * Animated isometric cubes with neon circuit lines and glowing AI markings.
  * Interactive floating badges with smooth micro-interactions.
* **Why Participate?:**
  * 4 soft-tinted cards:
    * 📖 **Learn:** Hands-on experience with cutting-edge tools.
    * 💻 **Build:** Turn ideas into working prototypes with mentor support.
    * 👥 **Connect:** Network with innovators and industry experts.
    * 📈 **Grow:** Win prizes and gain recognition.
  * **Dark Navy Stats Banner:**
    * `500+` Participants Expected
    * `₹5 Lakhs+` Total Prizes
    * `Expert` Industry Mentors
    * `24 Hours` Of Innovation
* **6 Technology Tracks:**
  * AI & Machine Learning (`₹1,20,000` pool)
  * Web & App Development (`₹1,00,000` pool)
  * Cybersecurity & Privacy (`₹90,000` pool)
  * Open Innovation & Social Good (`₹90,000` pool)
  * Cloud & DevOps Infrastructure (`₹60,000` pool)
  * IoT & Hardware Prototyping (`₹60,000` pool)
  * Interactive track detail modal and direct track registration shortcut.
* **₹5,00,000+ Prize Pool Breakdown:**
  * 🏆 **Grand Champion (1st):** ₹1,50,000 + Trophy + GDG Mentorship + Cloud Credits
  * 🥈 **First Runner-Up (2nd):** ₹1,00,000 + Silver Trophy + Dev Tooling
  * 🥉 **Second Runner-Up (3rd):** ₹75,000 + Bronze Trophy
  * 💜 **Best All-Girls Team:** ₹35,000
  * 💙 **Best Freshman/Beginner Team:** ₹25,000
  * 🌿 **Track Category Bounties:** ₹1,15,000 across 6 tracks
  * 🎁 Guaranteed perks: Certificates, Swag Kits, T-Shirts, Meals & Wi-Fi.
* **24-Hour Event Schedule:**
  * Day 1 (Ideation & Build) and Day 2 (Judging & Awards) tab switcher.
  * Chronological timeline from check-in to valedictory ceremony.
* **Interactive FAQ Accordion:**
  * Category tabs (All, General, Registration, Teams, Logistics).
  * Real-time keyword search bar.
* **Footer:**
  * Dark navy styling (`#0B1120`) with quick navigation links, contact info (`techtonic26@iare.ac.in`), venue details, social icons, and copyright notice.

---

### 2. Event Registration Flow

Matches the exact two-column stepper layout shown in the reference image:

* **Breadcrumb Navigation:** `🏠 > Registration`
* **Header & Notebook Visual Pill:** *"Join TECHTONIC '26 and be a part of an exciting 24-hour innovation journey."*
* **Left Column:**
  * 5-Step Stepper:
    1. **Basic Information:** Personal details
    2. **Event Details:** Team and track info
    3. **Preferences:** Workshops & amenities
    4. **Terms & Conditions:** Rules and guidelines
    5. **Confirmation:** Review and submit
  * Security Trust Card: *"Your information is safe with us. We only use your details for event-related communication."*
* **Right Column (Form Steps):**
  * **Step 1: Basic Information:** Full Name, Email, 10-digit Phone, College/University, Roll Number (e.g. `26951A1228`), Year of Study dropdown, Branch/Department.
  * **Step 2: Event Details:** Solo vs. Team participation (Team name, dynamically add 1–3 teammates with names, emails, and roll numbers), Track radio selection, Project pitch summary, GitHub/Portfolio URL.
  * **Step 3: Preferences:** Workshop choices (Agentic AI with Gemini, Cloud-Native, Cyber, Hardware), Dietary preference (Veg, Non-Veg, Jain), T-shirt size (S, M, L, XL, XXL), Prior experience level, Laptop confirmation.
  * **Step 4: Terms & Conditions:** Code of conduct, Original work confirmation, Media & photography consent.
  * **Step 5: Review & Confirmation:** Summary of all entered details with quick edit links, storage backend indicator, and submission button.
* **Bottom Features Bar:**
  * 🏷️ **Free Registration:** No fees to participate
  * 📜 **Certificates:** For all participants
  * 🍴 **Food & Accommodation:** Provided for shortlisted teams
  * 👥 **Networking:** Connect with industry experts

---

### 3. Digital Attendee Pass & Confirmation

Only displayed after a successful submission:
* **Heading:** *"You're Registered for TECHTONIC '26!"*
* **Demonstration Mode Notice:** Clearly informs the user whether the record was saved locally in Demo Mode or synced live to Cloud Firestore.
* **Scannable Pass / ID Badge:**
  * Unique Pass ID (e.g., `TT26-IARE-4821`)
  * Attendee Name, Roll Number, College, Branch, Track, and Team Name
  * Dynamic scannable QR Code generated in real-time
  * Security barcode hash
* **Pass Actions:**
  * 📋 Copy Pass ID
  * 🖨️ Print / Save as PDF
  * 📅 Add to Google Calendar (pre-filled with dates, location, and pass ID)
  * 🔄 Register another attendee

---

### 4. Admin Submissions Dashboard & Firebase Connectivity

* **Admin Submissions Modal (`Submissions` button in Navbar):**
  * View all registered participants (includes pre-seeded demo records + new entries).
  * Real-time search across names, roll numbers, colleges, and pass IDs.
  * Filter by track.
  * Export all submissions to **CSV** or **JSON** with one click.
  * Inspect and view individual pass badges.
* **Flexible Backend Storage:**
  * **Demo Mode (Default):** Runs immediately in offline/local mode using browser `LocalStorage`. Zero setup required.
  * **Cloud Firestore (Optional):** Click the storage pill (`Demo Mode` / `Firestore Live`) in the navbar to enter Firebase API credentials or configure `.env`. Registrations will then automatically sync to Google Cloud Firestore.

---

## 🛠️ Tech Stack

* **Framework:** React 18 + Vite 6
* **Language:** TypeScript 5.7
* **Styling:** Tailwind CSS 3.4
* **Icons:** Lucide React
* **QR Codes:** QRCode.js
* **Celebration FX:** Canvas-Confetti
* **Cloud Database (Optional):** Firebase 11 Firestore

---

## 📦 Getting Started

### Prerequisites
* Node.js v18 or later
* npm or pnpm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/techtonic-26.git
cd techtonic-26

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel

This repository includes `vercel.json` configured for single-page routing:

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import this repository.
4. Framework preset: **Vite**.
5. Click **Deploy**.

---

## 🔒 Security & Data Attribution
* Form inputs are validated on both change and submission.
* Roll numbers and emails are strictly formatted.
* In demo mode, no personal data is transmitted over the network.
* Full GDPR/student privacy compliance with dedicated Code of Conduct and Media consent agreements.

---

## 👨‍💻 Organizer & Assignment Info
Developed for the **Google Developer Groups (GDG) IARE** Technical Team selection assignment.
* **Campus:** Institute of Aeronautical Engineering, Hyderabad
* **Contact:** techtonic26@iare.ac.in
