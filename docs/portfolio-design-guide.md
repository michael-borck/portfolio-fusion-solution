---
title: "Portfolio Website Design Guide"
subtitle: "Post-Assignment Learning Resource for ISYS3004"
author: "ISYS3004 Business Web and Mobile Technologies"
format: 
  pdf:
      toc: false
      colorlinks: true
  docx:
      toc: false
      highlight-style: github
  html:
      toc: true
      toc-expand: 2
      embed-resources: true
---

## Introduction

This document serves as a comprehensive reference and learning resource for understanding the design principles, accessibility features, and responsive techniques implemented in the model portfolio solution. It is provided **after the assignment submission deadline** to help students deepen their understanding of web development best practices demonstrated in the example solution.

By studying this guide, you'll gain insights into how the example portfolio meets WCAG 2.1 AA standards while maintaining a clean, modern design using only vanilla HTML, CSS, and JavaScript. The concepts and techniques explained here will be valuable for your future web development projects beyond this course.

## Design Philosophy

The portfolio follows a **minimalist, content-first approach** that emphasizes:

1. **Clarity**: Clean typography and ample whitespace help users focus on content
2. **Consistency**: Visual elements maintain the same design language across all pages
3. **Accessibility**: Design choices support all users, regardless of abilities
4. **Performance**: Lightweight code ensures fast loading times on all devices

## HTML Structure & Semantic Markup

### Semantic HTML Elements

The website uses proper semantic HTML5 elements throughout:

```html
<!-- Example of semantic structure -->
<header role="banner">
  <!-- Header content -->
</header>

<nav id="main-nav" role="navigation" aria-label="Main navigation">
  <!-- Navigation content -->
</nav>

<main id="main" role="main">
  <section class="project-info">
    <!-- Project description -->
  </section>
  
  <section class="project-preview">
    <!-- Project iframe -->
  </section>
</main>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```

### Key Semantic Elements Used

| Element | Purpose |
|---------|---------|
| `<header>` | Contains site identity and primary navigation |
| `<nav>` | Holds navigation links |
| `<main>` | Contains the primary content of the page |
| `<section>` | Divides content into thematic groupings |
| `<article>` | Used for project cards (self-contained content) |
| `<footer>` | Contains site information and copyright |

Using semantic HTML improves:
- **Accessibility**: Screen readers can interpret page structure
- **SEO**: Search engines better understand content hierarchy
- **Maintainability**: Code is more readable and organized

## CSS Architecture

### CSS Variables (Custom Properties)

The CSS uses variables for consistent theming and easy maintenance:

```css
:root {
  /* Colors */
  --bg: #ffffff;
  --fg: #333333;
  --accent: #3498db;
  --link: #2980b9;
  /* ...other variables... */
}
```

Benefits:
- Allows for easy theme changes without finding/replacing throughout code
- Facilitates high contrast mode implementation
- Creates consistent visual language across pages

### Mobile-First Responsive Design

The CSS follows mobile-first principles:

```css
/* Base styles for mobile */
.card-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

/* Desktop styles added with media queries */
@media (min-width: 768px) {
  .card-container {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}
```

This approach:
- Prioritizes the mobile experience (where most users are)
- Progressively enhances the design for larger screens
- Results in cleaner, more maintainable CSS

### Layout Techniques

The portfolio uses modern CSS layout methods:

1. **CSS Grid** for two-dimensional layouts:
   - Project cards in a responsive grid
   - Adapts to different screen sizes without media queries

2. **Flexbox** for one-dimensional layouts:
   - Header and navigation components
   - Aligning content within containers

```css
/* Flexbox example */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid example */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}
```

## Accessibility Implementation (WCAG 2.1)

### 1. Keyboard Navigation

The site is fully navigable via keyboard:

- **Skip Link**: Allows keyboard users to bypass navigation
- **Focus Styles**: Visible focus indicators on all interactive elements
- **Logical Tab Order**: Interactive elements follow a natural sequence

```css
/* Visible focus styles */
a:focus, button:focus {
  outline: 3px solid var(--focus);
  outline-offset: 2px;
}

/* Skip link styling */
.skip-link {
  position: absolute;
  left: 50%;
  transform: translateY(-100%);
  /* Appears when focused */
  transition: transform var(--transition);
}

.skip-link:focus {
  transform: translateY(0);
}
```

### 2. ARIA Attributes

ARIA attributes enhance screen reader compatibility:

```html
<!-- Navigation example -->
<nav id="main-nav" role="navigation" aria-label="Main navigation">
  <!-- Navigation items -->
</nav>

<!-- Menu toggle button -->
<button id="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Toggle navigation">
  <span class="menu-icon"></span>
</button>

<!-- Current page indicator -->
<a href="index.html" aria-current="page">Home</a>
```

Key ARIA attributes used:
- `role`: Identifies the purpose of elements
- `aria-label`: Provides descriptive text for screen readers
- `aria-expanded`: Indicates the expanded/collapsed state
- `aria-controls`: Associates controls with their targets
- `aria-current`: Indicates the current page in navigation

### 3. Color Contrast

All text meets WCAG 2.1 AA contrast requirements:
- Regular text: Minimum 4.5:1 contrast ratio
- Large text: Minimum 3:1 contrast ratio

### 4. High Contrast Mode

The site includes a switchable high contrast mode:

```css
/* Default theme */
:root {
  --bg: #ffffff;
  --fg: #333333;
  /* ...other variables... */
}

/* High contrast theme */
body.high-contrast {
  --bg: #000000;
  --fg: #ffffff;
  /* ...other variables with higher contrast... */
}
```

The contrast toggle:
- Persists user preference using localStorage
- Announces changes to screen readers
- Works with both mouse and keyboard

### 5. Text Alternatives

All non-text content has text alternatives:
- Images have descriptive `alt` attributes
- Icons include `aria-label` attributes
- Decorative elements use `aria-hidden="true"`

### 6. Responsive Text

Text remains readable at all screen sizes:
- Proper hierarchy with meaningful headings
- Font sizes use relative units (rem/em)
- Line heights ensure readability

## Responsive Design Techniques

### 1. Viewport Configuration

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

This ensures:
- Content fits the screen width
- Initial scale is appropriate for readability
- User can zoom without restrictions

### 2. Fluid Layouts

The site uses relative units and flexible layouts:

```css
/* Container with maximum width and centered */
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing);
}

/* Fluid typography */
h1 {
  font-size: 1.8rem; /* Relative to root font size */
}

/* Spacing using relative units */
section {
  margin-bottom: var(--spacing-xl);
}
```

### 3. Media Queries

Strategic breakpoints adapt the design to different devices:

```css
/* Base mobile styles first */

/* Tablets and larger */
@media (min-width: 768px) {
  /* Tablet-specific styles */
}

/* Small screens/mobile only */
@media (max-width: 600px) {
  /* Mobile-specific styles */
}
```

### 4. Responsive Navigation

The navigation adapts to screen size:
- Horizontal menu on desktop
- Collapsible menu on mobile
- Clear visual indication of the current page

```css
/* Desktop navigation */
nav ul {
  display: flex;
  list-style: none;
  gap: var(--spacing-md);
}

/* Mobile navigation */
@media (max-width: 600px) {
  #nav-toggle {
    display: block; /* Show hamburger menu */
  }
  
  nav ul {
    display: none;
    flex-direction: column;
  }
  
  nav[aria-expanded="true"] ul {
    display: flex; /* Show menu when expanded */
  }
}
```

### 5. Responsive Images and Media

Content adapts to container width:

```css
img, iframe {
  max-width: 100%;
  height: auto;
}
```

## JavaScript Functionality

### 1. Navigation Toggle

Mobile navigation is implemented with JavaScript:

```javascript
function initNavToggle() {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  
  navToggle.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    mainNav.setAttribute('aria-expanded', !expanded);
    
    // Announce to screen readers
    // ...
  });
  
  // Close when clicking outside
  // ...
}
```

This provides:
- Proper ARIA state management
- Screen reader announcements
- Keyboard escape key support
- Click-outside-to-close functionality

### 2. High Contrast Mode

User preference for contrast is managed with JavaScript:

```javascript
function initContrastToggle() {
  const contrastToggle = document.getElementById('contrast-toggle');
  
  // Check for saved preference
  const savedContrast = localStorage.getItem('high-contrast');
  if (savedContrast === 'true') {
    document.body.classList.add('high-contrast');
  }
  
  contrastToggle.addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
    
    // Save preference
    const isHighContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('high-contrast', isHighContrast);
    
    // Announce change to screen readers
    // ...
  });
}
```

This provides:
- Persistent user preferences
- Accessible toggle mechanism
- Screen reader feedback

### 3. Progressive Enhancement

JavaScript is applied following progressive enhancement:
- Core content and navigation work without JavaScript
- JavaScript enhances the experience rather than being required
- No functionality is completely dependent on JavaScript

## Code Organization & Best Practices

### 1. CSS Organization

CSS follows a logical structure:

1. Variables and base styles
2. Typography
3. Layout components (header, navigation, etc.)
4. Content components (cards, buttons, etc.)
5. Utility classes
6. Media queries

### 2. JavaScript Organization

JavaScript is modular and focused:

1. Event listeners in a DOMContentLoaded wrapper
2. Functions with single responsibilities
3. Clear naming conventions
4. Comments explaining complex logic

### 3. Documentation

Code includes helpful comments:

```css
/* 
 * Hero section styling
 * Creates a full-width colored band with centered content
 */
```

```javascript
/**
 * Initializes the high contrast mode toggle
 * Checks localStorage for saved preferences
 */
```

## Common Pitfalls & Solutions

### 1. Accessibility Issues to Avoid

❌ **Problem**: Relying solely on color to convey information  
✅ **Solution**: Include additional indicators like underlines, icons, or text

❌ **Problem**: Missing alternative text for images  
✅ **Solution**: Add descriptive alt text to all images

❌ **Problem**: Inaccessible form inputs without labels  
✅ **Solution**: Associate all inputs with properly positioned labels

### 2. Responsive Design Mistakes

❌ **Problem**: Fixed-width containers that overflow on mobile  
✅ **Solution**: Use relative units and max-width constraints

❌ **Problem**: Text too small/large on different devices  
✅ **Solution**: Use relative font sizes and test on multiple screens

❌ **Problem**: Touch targets too small on mobile  
✅ **Solution**: Ensure all interactive elements are at least 44×44px

## Assignment Requirements Checklist

This checklist reflects the key requirements from the assignment and how they were implemented in the example solution:

### Technical Requirements

- [✓] Semantic HTML structure
- [✓] Responsive design (mobile-first approach)
- [✓] CSS layout using Flexbox and Grid
- [✓] Consistent color scheme and typography
- [✓] JavaScript interactivity (navigation, contrast toggle)
- [✓] WCAG 2.1 AA compliance
- [✓] Code comments and documentation
- [✓] Vanilla HTML/CSS/JS only (no frameworks)

### Page Requirements

- [✓] Home page with introduction and project links
- [✓] Four project pages with embedded projects
- [✓] All projects fully functional within the portfolio
- [✓] Consistent navigation pattern across all pages

### Accessibility Requirements

- [✓] Skip link for keyboard users
- [✓] Proper ARIA attributes
- [✓] Semantic HTML tags
- [✓] Sufficient color contrast
- [✓] Keyboard navigability
- [✓] Screen reader compatibility

## Learning Takeaways

This model solution demonstrates several important concepts that you can apply to future web development projects:

1. **Accessibility First**: Building with accessibility in mind from the start results in a better experience for all users and cleaner code.

2. **Progressive Enhancement**: Start with a solid HTML foundation, enhance with CSS, and then add JavaScript functionality that doesn't break the site if disabled.

3. **Responsive Thinking**: Design for mobile first, then expand features for larger screens rather than trying to shrink desktop designs.

4. **Separation of Concerns**: HTML for content structure, CSS for presentation, and JavaScript for behavior creates maintainable code.

5. **CSS Variables**: Using CSS custom properties creates more maintainable themes and reduces code duplication.

The solution intentionally demonstrates achieving modern design with minimal code complexity. As you progress in your web development journey, you'll build on these fundamental concepts with more advanced techniques.

## Conclusion

This guide has explored the model portfolio solution created as an example of how to implement the ISYS3004 assignment requirements. By examining this implementation after completing your own assignment, you can compare approaches, identify alternative solutions, and deepen your understanding of web development principles.

The solution demonstrated here is just one approach to meeting the assignment requirements. Your own solution might use different techniques while still achieving excellent results. Web development often has multiple valid ways to solve the same problem.

The techniques covered in this guide—semantic HTML, CSS layout systems, JavaScript enhancements, and accessibility features—form the foundation of modern web development. These skills will serve you well beyond this course as you continue your learning journey.

### Further Learning Resources

To continue developing your web development skills, explore these resources:

- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web development documentation
- [Web.dev](https://web.dev/) - Google's resource for modern web development
- [A11Y Project](https://www.a11yproject.com/) - Accessibility resources and patterns
- [CSS-Tricks](https://css-tricks.com/) - Helpful articles on CSS techniques

### GitHub Repository

The complete code for this example portfolio is available on GitHub:
[Link to Repository](#) <!-- To be added by instructor -->

This repository includes:
- All HTML, CSS, and JavaScript files
- README with setup instructions
- Documentation of key features

By examining the code directly, you can see how all the concepts in this guide are implemented in practice.

---

_This resource was developed for ISYS3004 Business Web and Mobile Technologies students as a post-assignment learning tool._
