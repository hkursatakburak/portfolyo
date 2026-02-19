# Hamza Kürşat Akburak Portfolio

This is a modern, single-page portfolio website built with React, Vite, and vanilla CSS.

## Features

- **Modern Dark Theme**: Clean UI with soft gradients and glassmorphism effects.
- **Scroll Animations**: Sections fade in as you scroll.
- **Project Showcase**: Detailed modals for technical projects and categorized sections.
- **Timeline Experience**: Visual timeline for work history.
- **Fully Responsive**: Optimized for mobile and desktop.
- **Easy Maintenance**: All text content is stored in `src/data.js` for quick updates.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Customization

### Updating Content
Edit the `src/data.js` file to update:
- Personal Bio
- Projects (Technical & Social)
- Experience Timeline
- Awards
- Skills
- Contact Info

### Adding Images
Place images in the `public/` folder or `src/assets/` and reference them in `data.js`.

### Styling
- Global colors/fonts: `src/index.css`
- Component styles: `src/components/*.css`

## Technologies Used

- **React** (Vite)
- **CSS3** (Variables, Flexbox, Grid, Animations)
- **Intersection Observer API** (Scroll Spy)
