# Evergreen Metropolis Mall - Sales and Leasing Tool

## [Live Demo](https://evergreen-metropolis-mall.netlify.app/)

## Documentation

### Tech Stack
- **Frontend:** React.js 
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **AI Tools:** TensorFlow for predictive analytics

### Setup Instructions
1. **Clone the repository**: 
   ```bash
   git clone https://github.com/Sidd444/Evergreen-Metropolis-Mall---Sales---Leasing-Tool.git
   ```
2. **Navigate to the directory**: 
   ```bash
   cd Evergreen-Metropolis-Mall---Sales---Leasing-Tool
   ```
3. **Install dependencies**: 
   ```bash
   npm install
   ```
4. **Set up environment variables** (create a `.env` file):
   ```plaintext
   DATABASE_URL=mongodb://<username>:<password>@url:port/database
   PORT=5000
   ```
5. **Start the server**: 
   ```bash
   npm start
   ```

### Design Decisions
- Chose a microservices architecture for the backend for scalability.
- Utilized MongoDB for its flexibility with schema design.
- Frontend built in React to ensure a responsive user experience.


This looks like a solid architectural and design framework. Here is that content formatted into a clean, structured Markdown document.
------------------------------
## Project Design & Technical Specifications## 🎨 Design Decisions## 1. Modular Component Architecture

* Why: Each section (Retail, Entertainment, Luxury, Leasing) is self-contained and reusable.
* How: LocationModule, HeroNexus, and DataInsights are composition-ready.
* Benefit: Easy to add new sections or modify existing ones without affecting the rest of the application.

## 2. Two-Stage Navigation Flow

* Why: Users first explore broad categories (The Nexus), then drill into specific locations.
* How: activeSection state controls the primary view; activeLocation adds a detail layer.
* Benefit: Progressive disclosure of information prevents cognitive overload.

## 3. Dynamic Asset Resolution

* Why: Vite's import.meta.glob allows for flexible image and video management.
* How: resolveAssetPath() function maps JSON paths to actual imports.
* Benefit: Easier to swap assets without code changes; supports future CMS integration.

## 4. Premium Visual Hierarchy

* Color Scheme: Dark theme (#1a1a1a) with a gold accent (#b5935b).
* Typography: Serif (Playfair Display) for headings, Sans-serif (Inter) for body text.
* Spacing: Consistent lg:p-12 padding creates professional breathing room.
* Borders: Subtle accent-colored borders (border-accent/20-40) guide user attention.

## 5. Smooth Scroll Experience

* Why: Lenis library provides physics-based smooth scrolling.
* How: Implemented via a RequestAnimationFrame loop in App.jsx.
* Benefit: Provides a premium feel and reduces "jank" on scroll-heavy pages.

## 6. Staggered Animations

* Why: Prevents overwhelming visual noise on initial page load.
* How: Components utilize incremental delays (e.g., 0.1s, 0.2s).
* Benefit: Guides the user's eye and creates a sense of intentional, polished design.

------------------------------
## 🎯 Key Features## ✨ Interactive Nexus Grid

* 4-section layout (Retail, Entertainment, Luxury, Leasing).
* Hover effects featuring scale and glow animations.
* Icon rotation on hover and border transitions using the accent color.

## 🎬 Media Integration

* Hero video with blur effects and gradient overlays.
* Location-specific videos with autoplay and looping.
* Image cards with zoom-on-hover and smooth transitions between sections.

## 📊 Data Insights Dashboard

* 3-column metric cards (Annual Visitors, Sales Growth, Event Attendance).
* Animated progress bars with easing functions.
* Hover-triggered scale effects.

## 📝 Contact Form

* Full form validation for required fields.
* Interest dropdown (Retail Leasing, Sponsorship, Event Booking, Other).
* Responsive 2-column grid on desktop, stacked on mobile.
* Success alerts and automated form resetting.

## 🖱 Custom Cursor

* Fixed positioning circle cursor.
* Desktop-only visibility (lg breakpoint).
* Gold color theme with a screen blend mode for transparency effects.

## ♿ Accessibility Features

* Semantic HTML (proper form labels, input types).
* Full keyboard navigation support.
* High-visibility focus states and ARIA-friendly structure.




