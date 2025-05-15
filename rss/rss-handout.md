---
title: "📰 RSS Reader: Fetching Data the Accessible & Responsive Way"
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

## ✨ Overview

In this in-class project, you built a simple **RSS Reader** that demonstrates how to:

* Use `fetch()` to retrieve external data (e.g. from an API or feed)
* Parse and insert that data into the DOM
* Safely work around **CORS** issues using the `rss2json` proxy API

The goal now is to make **minimal changes** to improve **accessibility**, **validation**, and **mobile usability** — without changing the core layout or functionality.

> ❗ You are *not* redesigning the page. Your task is to apply *justified fixes* to bring it up to standard for real-world use.

---

## 🔍 What Needed Fixing

| Problem                                     | Why It's a Problem                  | Minimal Fix                             |
| ------------------------------------------- | ----------------------------------- | --------------------------------------- |
| `<content>` is invalid                      | Not an HTML5 element                | Replaced with `<main>`                  |
| No screen reader support for input          | Input isn’t labelled                | Added `aria-label` and hidden `<label>` |
| Result messages invisible to assistive tech | `<main>` wasn’t updated accessibly  | Added `aria-live="polite"`              |
| Layout breaks on mobile                     | Fixed-width form layout             | Added responsive `flexbox` rules        |
| Poor validation                             | Missing `viewport`, HTML5 semantics | Fixed markup and structure              |

---

## 💻 Before & After: Quick Fixes

### ❌ Before (Invalid Element)

```html
<content></content>
```

### ✅ After

```html
<main id="content" role="main" aria-live="polite"></main>
```

---

### ❌ Before (Unlabeled Input)

```html
<input type="text" id="rss-input" placeholder="URL of RSS Feed">
```

### ✅ After

```html
<label for="rss-input" class="visually-hidden">RSS Feed URL</label>
<input type="text" id="rss-input" aria-label="RSS Feed URL">
```

---

### ❌ Before (Unresponsive Layout)

```css
form {
  /* no layout handling on small screens */
}
```

### ✅ After

```css
form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
@media (max-width: 600px) {
  form {
    flex-direction: column;
  }
}
```

---

## 🤖 AI Conversation Example

---

**You**:
My RSS Reader uses a `<content>` tag and fails HTML validation. I also want screen reader support and better mobile layout. What should I fix?

**AI**:
Replace `<content>` with a semantic element like `<main>`, and give it `role="main"`. Add `aria-live="polite"` so screen readers are alerted when new content appears. Label your `<input>` using a `<label>` (even if hidden), or use `aria-label`.

To improve mobile layout, use `flexbox` on the form and set `flex-wrap: wrap;`. Add a media query for small screens to stack the input and button.

---

**You**:
I don’t want to redesign anything, just meet WCAG and validation. Can I leave the layout mostly the same?

**AI**:
Yes — you can keep the existing layout. Minimal changes to semantics, labels, and responsiveness are enough to meet your goal.

---

## 🧠 Reflection Questions

* What makes `aria-live="polite"` useful in this app?
* Why should you **not** use made-up elements like `<content>` in production code?
* What happens to screen reader users if form fields don’t have labels?
* How does mobile layout affect accessibility?
* Could an AI tool help you review your HTML for accessibility issues?

---

## 💬 Try These AI Prompts

Paste these into ChatGPT or Claude:

* **“Fix this HTML so it meets WCAG 2.1 and passes validation (use minimal changes).”**
* **“Why shouldn’t I use custom elements like <content> in HTML?”**
* **“Help me make this fetch-based RSS Reader screen reader friendly.”**
* **“Add accessibility and responsiveness to this HTML form without changing the UI.”**

---

## ✅ Submission Checklist

* [ ] Replaced invalid `<content>` element with `<main>`
* [ ] Added `aria-label` or a hidden label for the input
* [ ] Ensured dynamic content updates are announced (`aria-live`)
* [ ] Updated CSS for basic mobile responsiveness
* [ ] No redesign or layout overhaul — original look preserved
* [ ] Used AI to review/refine (optional, encouraged)

