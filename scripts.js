/**
 * Portfolio JavaScript
 * Minimal, accessible JavaScript for navigation, theme toggling, and user experience
 */

// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation toggle functionality
  initNavToggle();
  
  // Initialize contrast mode toggle
  initContrastToggle();
});

/**
 * Initializes the navigation toggle functionality for mobile views
 */
function initNavToggle() {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      // Check if the menu is currently expanded
      const expanded = this.getAttribute('aria-expanded') === 'true';
      
      // Toggle the aria-expanded attributes
      this.setAttribute('aria-expanded', !expanded);
      mainNav.setAttribute('aria-expanded', !expanded);
      
      // Announce to screen readers that menu has been toggled
      const action = expanded ? 'collapsed' : 'expanded';
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.classList.add('sr-only'); // Screen reader only
      announcement.textContent = `Menu ${action}`;
      document.body.appendChild(announcement);
      
      // Remove announcement after it's been read
      setTimeout(() => {
        announcement.remove();
      }, 1000);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isMenuOpen = mainNav.getAttribute('aria-expanded') === 'true';
      const clickedOutside = !mainNav.contains(event.target) && !navToggle.contains(event.target);
      
      if (isMenuOpen && clickedOutside) {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/**
 * Initializes the high contrast mode toggle
 */
function initContrastToggle() {
  const contrastToggle = document.getElementById('contrast-toggle');
  
  if (contrastToggle) {
    // Check for saved preference in localStorage
    const savedContrast = localStorage.getItem('high-contrast');
    
    // Apply saved preference if it exists
    if (savedContrast === 'true') {
      document.body.classList.add('high-contrast');
    }
    
    contrastToggle.addEventListener('click', function() {
      // Toggle high contrast class on body
      document.body.classList.toggle('high-contrast');
      
      // Save preference to localStorage
      const isHighContrast = document.body.classList.contains('high-contrast');
      localStorage.setItem('high-contrast', isHighContrast);
      
      // Announce change to screen readers
      const mode = isHighContrast ? 'high contrast' : 'standard';
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.classList.add('sr-only'); // Screen reader only
      announcement.textContent = `Switched to ${mode} mode`;
      document.body.appendChild(announcement);
      
      // Remove announcement after it's been read
      setTimeout(() => {
        announcement.remove();
      }, 1000);
    });
  }
}

// Add a small helper function for keyboard accessibility
document.addEventListener('keydown', function(event) {
  // Close menu with Escape key
  if (event.key === 'Escape') {
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mainNav && mainNav.getAttribute('aria-expanded') === 'true') {
      navToggle.setAttribute('aria-expanded', 'false');
      mainNav.setAttribute('aria-expanded', 'false');
      navToggle.focus(); // Return focus to the toggle button
    }
  }
});
