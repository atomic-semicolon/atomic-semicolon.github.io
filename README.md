# Aman Bhuyan — Software Engineer & AI Specialist Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=flat-square&logo=github)](https://atomic-semicolon.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=flat-square)](LICENSE)
[![HTML5 / CSS3 / JS](https://img.shields.io/badge/Stack-Vanilla%20JS%20%7C%20CSS3%20%7C%20HTML5-orange?style=flat-square)](https://developer.mozilla.org/)

An interactive, dark/light theme, modern single-page portfolio website built for **Aman Bhuyan** — Software Engineer with 5 years of enterprise experience & Master of Computing (Applied AI) candidate at NTU Singapore.

Designed for recruiters, engineering hiring managers, and collaborators to explore career achievements, technical skillsets, and personal projects interactively.

---

## ✨ Features & Highlights

- **Interactive CLI Terminal Widget**: A lightweight simulated bash terminal embedded directly in the hero section. Visitors can run commands like `about`, `skills`, `experience`, `contact`, or `clear` via text input or quick-action chips.
- **Dynamic Particle Canvas Backdrop**: Custom HTML5 Canvas particle network animation reacting to window size and theme changes with a glowing cursor follower.
- **Searchable & Filterable Skills Matrix**: Instant client-side text search and category tab filtering (`Languages`, `Frameworks`, `Cloud & DevOps`, `Databases`).
- **Interactive System Architecture Visualizer**: Step-by-step pipeline flow diagram for the *Profilarr Automation* project with interactive nodes and dynamic explanations.
- **Animated Impact Counters**: Numbers increment dynamically upon scrolling into view using `IntersectionObserver`.
- **Seamless Theme Switcher**: Modern Dark / Light mode toggle supporting fluid glassmorphism UI effects (`backdrop-filter`).
- **Zero Build Step / GitHub Pages Ready**: Pure vanilla HTML5, CSS3, and JavaScript — no Node.js dependencies, npm packages, or server-side rendering required.

---

## 🛠️ Technology Stack

| Category | Technologies / Tools Used |
| :--- | :--- |
| **Markup & Layout** | HTML5, Semantic Elements, Accessibility (ARIA tags) |
| **Styling & Design** | CSS Custom Properties (Variables), Glassmorphism, Flexbox, CSS Grid, Responsive Media Queries |
| **Scripting** | Vanilla JavaScript (ES6+), Canvas API, `IntersectionObserver`, Clipboard API |
| **Typography** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts |

---

## 📁 Repository Structure

```text
.
├── index.html              # Main HTML document containing all layout, CSS styles, and JS logic
├── Aman Bhuyan Resume.pdf   # Downloadable PDF resume referenced in CTAs
└── README.md               # Project documentation
```

---

## 🚀 Quick Start & Local Development

No package installation or compilation required!

1. **Clone the repository**:
   ```bash
   git clone https://github.com/atomic-semicolon/atomic-semicolon.github.io.git
   cd atomic-semicolon.github.io
   ```

2. **Open in browser**:
   Simply double-click `index.html` or open it using any web browser:
   ```bash
   # On macOS
   open index.html

   # On Linux
   xdg-open index.html

   # Or serve via Python HTTP server
   python3 -m http.server 8000
   ```

3. Navigate to `http://localhost:8000` in your web browser.

---

## 🌐 Deploying to GitHub Pages

To host this portfolio on GitHub Pages under your custom username or domain:

1. Push this repository to GitHub named `<your-username>.github.io`.
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Select branch `main` (or `master`) and folder `/ (root)`, then click **Save**.
5. Your site will be live at `https://<your-username>.github.io` within a few minutes.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to fork and customize it for your own personal portfolio!
