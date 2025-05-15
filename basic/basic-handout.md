---
title: "🧰 Basic Portfolio Page – Accessibility & Responsiveness Handout"
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



## 🧠 Overview

This in-class project introduces the **foundations of HTML5 and CSS layout** through a simple portfolio design. You created:

* A **navigation bar**
* A **hero image with overlaid text**
* A **three-column layout** showcasing your skills
* A **footer** with Creative Commons license info

Now, we apply **minimal and justified changes** to improve the site’s:

✅ Validation (HTML/CSS)
✅ Accessibility (WCAG 2.1 AA)
✅ Responsiveness (mobile-friendly layout)

---

## ✅ What Changed and Why

| Area                           | Problem                                | Minimal Fix                              |
| ------------------------------ | -------------------------------------- | ---------------------------------------- |
| `height: 230px` on `.column`   | Fixed height breaks content flow       | Removed — now adapts to text             |
| No alt/label on hero image     | Screen readers can’t interpret visuals | Added `role="img"` + `aria-label`        |
| Email text not clickable       | Poor user experience                   | Used `mailto:` link                      |
| Navigation lacked semantics    | Not accessible to screen readers       | Added `role="navigation"` + `aria-label` |
| Layout breaks on mobile        | Columns too narrow, text unreadable    | Added media query to stack columns       |
| Link hover/focus styles        | No visual feedback for keyboard users  | Added `:focus-visible` style             |
| Missing `alt` on license image | WCAG violation                         | Added descriptive `alt` text             |

---

## 💬 Sample AI Collaboration

---

**You**:
My three-column layout uses float, but it breaks on mobile. I don’t want to change the layout — just fix mobile display and meet accessibility.

**AI**:
To preserve layout but improve mobile support, keep `float` and use a `@media` query to stack `.column` elements below a certain width (e.g., 768px). Also, add ARIA roles to your `<nav>` and label the hero image using `aria-label` or a semantic wrapper.

---

**You**:
Should I remove the fixed height from my `.column` divs?

**AI**:
Yes — fixed heights are inflexible. Let the content determine height unless you have a visual constraint. Use padding or min-height if needed, but avoid hard values like `height: 230px`.

---

## 🔍 Reflection Questions

* What happens to your layout when the screen gets smaller?
* How would someone using a screen reader experience your hero image?
* Why are `aria-label`s and `role` attributes important in HTML?
* Why might `float` be used instead of `flex` in a simple example?
* If you were to modernize this project, what would you use instead?

---

## 💡 AI Prompts to Explore

Use these to guide AI assistance:

* **"Make my three-column float layout mobile-friendly without changing the desktop layout."**
* **"How do I describe a background hero image for screen readers?"**
* **"Help me meet WCAG 2.1 AA with minimal changes to this HTML."**
* **"Why is `height: 230px` a problem for responsive design?"**

---

## ✅ Submission Checklist

* [ ] **Layout preserved** (float-based 3-column and hero intact)
* [ ] **No fixed column heights** — content flows naturally
* [ ] **Hero image has `aria-label` or semantic alternative**
* [ ] **Navigation includes proper `role` and `aria-label`**
* [ ] **Responsive layout using `@media` query**
* [ ] **Hover and focus styles improve accessibility**
* [ ] **License image has descriptive `alt` text**
* [ ] **No structural redesign** — only validation and accessibility fixes
