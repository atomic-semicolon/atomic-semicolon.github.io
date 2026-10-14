# Software Engineer Portfolio Website

## Project Overview

This is a modern, aesthetically pleasing portfolio website for a software engineer, designed to showcase skills, projects, and experience. The website is ready to be hosted on GitHub Pages.

## Features Implemented

1. **Responsive Design** - Fully responsive layout that works on all device sizes
2. **Modern UI/UX** - Clean, professional design with smooth animations and transitions
3. **Dark/Light Mode Toggle** - User preference support with localStorage persistence
4. **Complete Sections**:
   - Hero section with call-to-action buttons
   - About section with personal introduction and stats
   - Projects showcase with cards and tags
   - Skills visualization with progress bars
   - Contact form with social links

## Technologies Used

- **HTML5** - Semantic markup for content structure
- **CSS3** - Modern styling with Flexbox, Grid, and CSS variables
- **JavaScript (ES6+)** - Interactive elements and smooth animations
- **Font Awesome** - Icons for visual enhancement
- **Google Fonts** - Elegant typography with Inter and Playfair Display

## File Structure

```
software-engineer-portfolio/
├── index.html           # Main portfolio page
├── styles.css           # All styling for the website
├── script.js            # Interactive JavaScript functionality
├── README.md            # Project documentation
├── .gitignore           # Git ignore rules
├── _config.yml          # GitHub Pages configuration
├── CNAME                # Custom domain file (empty for now)
├── deploy.sh            # Deployment script
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions workflow
```

## Key Design Elements

1. **Color Scheme** - Professional purple/blue color scheme with clean whites and grays
2. **Typography** - Elegant combination of Inter (body) and Playfair Display (headings)
3. **Animations** - Smooth hover effects, transitions, and scroll animations
4. **Card-based Layout** - Project cards with hover effects
5. **Progress Bars** - Visual representation of skill levels
6. **Form Elements** - Contact form with validation

## Deployment Instructions

1. Push this repository to GitHub
2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch" 
   - Choose "main" branch and "/ (root)" folder
3. The site will be available at `https://<username>.github.io/<repository-name>`

## Customization

To customize this portfolio:

1. **Personal Information**: Update content in `index.html`
2. **Skills**: Modify skill bars in the Skills section
3. **Projects**: Update project cards with your own work
4. **Colors**: Change color variables in CSS `:root` section
5. **Images**: Replace placeholder images with actual profile and project images

The portfolio is ready to be deployed and showcases a professional software engineer's skills and projects in an attractive, modern interface.