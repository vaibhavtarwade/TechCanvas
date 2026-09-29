# TechCanvas 🚀
> **"Ideas, Technology & Everything I’m Learning"**  
> *A modern, editorial student technology blog created as a college class activity.*

---

## 📖 Overview
**TechCanvas** is a personal/student technology blog designed to document engineering coursework, programming discoveries, web development experiments, and reflections on emerging tech.

Built with a **warm, editorial, human-designed aesthetic**, it completely avoids generic AI tropes (such as neon glows, floating card overloads, or excessive bouncy animations). Instead, it emphasizes intentional whitespace, readable typography (Playfair Display + Inter), subtle terracotta/forest-green accents, and responsive layout craftsmanship suitable for presenting in front of a college professor.

---

## 🛠️ Technologies Used
- **HTML5**: Semantic tags (`<article>`, `<nav>`, `<header>`, `<section>`, `<aside>`, `<footer>`) for accessibility & SEO.
- **CSS3**: Custom CSS Variables, Flexbox, CSS Grid, smooth transitions, and comprehensive Dark Mode support.
- **Vanilla JavaScript (ES6+)**: Zero framework dependencies, fast execution, dynamic filtering, URL parameter routing, reading progress bar, and local storage state persistence.

---

## ✨ Features
1. **Editorial Homepage (`index.html`)**:
   - Hero intro with desk workspace imagery & clear call-to-actions.
   - Featured Article highlight card with metadata badges.
   - Latest Articles 3-column grid.
   - Topics showcase with direct navigation links.
   - Interactive newsletter demo subscription box.
2. **Dynamic Blog & Search (`blog.html`)**:
   - Live real-time search filtering across titles, excerpts, and topics.
   - Interactive category pill filters (*All, Technology, Programming, Web Dev, AI, College, Projects, Cybersecurity*).
   - Empty search state handling with one-click "Reset Filters" action.
3. **Dedicated Article Reader (`post.html`)**:
   - Dynamic URL-based article routing (`post.html?id=1`, etc.).
   - Full structured articles with code blocks, blockquotes, callout boxes, and subheadings.
   - Smooth top reading progress indicator.
   - One-click copy share link.
   - Author profile card with GitHub, LinkedIn, and Instagram links.
   - "Read Next" dynamically populated related articles.
   - Graceful 404 / "Article not found" fallback with back-to-blog button.
4. **Categories Directory (`categories.html`)**:
   - Topic overview with active article counters and discipline summaries.
5. **About Page (`about.html`)**:
   - Backstory on the college activity project and learning philosophy.
   - Author bio for Vaibhav (Engineering Student).
6. **Dark Mode Toggle**:
   - Full dark theme palette (`#1D211F`, `#252A27`, `#7FAF9A`, `#D28768`).
   - Saved across sessions using `localStorage`.
7. **Mobile-First Responsive Layout**:
   - Smooth slide-out mobile hamburger menu.
   - Flawless experience across desktop (1440px), laptop (1024px), tablet (768px), and mobile phones (480px, 390px, 360px).
8. **SEO & Performance**:
   - Open Graph tags, canonical links, `robots.txt`, `sitemap.xml`, and `loading="lazy"` on images.

---

## 📂 Project Structure
```text
TechCanvas/
│
├── index.html            # Homepage (Hero, Featured, Latest Posts, Newsletter)
├── blog.html             # All Articles (Live Search & Category Filtering)
├── post.html             # Single Post View (Dynamic Routing & Reading Progress)
├── categories.html       # Topics Directory with Article Counts
├── about.html            # About the Author & Project Philosophy
├── robots.txt            # Search Engine Crawler Directives
├── sitemap.xml           # XML Sitemap
├── README.md             # Documentation & Deployment Guide
│
├── css/
│   └── style.css         # Complete Design System & Dark Mode Styles
│
├── js/
│   └── script.js         # Articles Database, Search, Filter & Theme Logic
│
└── images/
    ├── hero/
    │   └── hero-desk.jpg
    ├── posts/
    │   ├── post1-tech-learning.jpg
    │   ├── post2-learn-code.jpg
    │   ├── post3-web-dev.jpg
    │   ├── post4-ai-hype.jpg
    │   ├── post5-github-student.jpg
    │   ├── post6-college-project.jpg
    │   ├── post7-ai-programmers.jpg
    │   └── post8-cybersecurity.jpg
    └── author/
        └── vaibhav.jpg
```

---

## 🚀 How to Run Locally

Because this project uses 100% standard static web technologies, you do not need Node.js, databases, or API keys.

### Option 1: Direct File Opening
- Simply double-click `index.html` in your file explorer to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using a Local Development Server (Recommended for query params & fast reload)
Using Python (built into Windows/macOS/Linux):
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

Using VS Code / IDE:
- Right click `index.html` and click **"Open with Live Server"**.

---

## 🌐 Deploying to GitHub Pages (Step-by-Step)

This repository is built with **relative paths** (`css/style.css`, `js/script.js`, `images/...`), ensuring that it works out of the box on GitHub Pages without path breakages!

1. Create a new GitHub repository (e.g., `techcanvas`).
2. Push all the project files to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TechCanvas blog"
   git branch -M main
   git remote add origin https://github.com/<your-username>/techcanvas.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main` and folder: `/ (root)`.
   - Click **Save**.
4. Within 1–2 minutes, GitHub Pages will deploy your site at:
   `https://<your-username>.github.io/techcanvas/`

---

## 🎓 College Activity Details
- **Student Author**: Vaibhav
- **Role**: Engineering Student & Technology Enthusiast
- **Project Purpose**: Web Development & Technology Communication College Class Activity
- **License**: MIT
