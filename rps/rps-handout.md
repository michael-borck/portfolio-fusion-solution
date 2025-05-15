---
title: "🧠 Improving the Rock, Paper, Scissors Game: A Minimal Accessibility & Responsiveness Fix"
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

Your original Rock, Paper, Scissors (RPS) game showed how to style buttons with CSS and interact with the page using JavaScript. Now, we’ll make **small but important improvements** to ensure the game is:

* 🦽 **Accessible** (meets WCAG 2.1 standards)
* 📱 **Responsive** (usable on both desktop and mobile)
* 🤖 **AI-friendly** (you’ll learn how to collaborate with AI to solve real-world coding problems)

> 🔒 Your job isn’t to *rewrite* the project — it’s to **refactor it gently**. Preserve the original feel, but fix issues that affect usability, validation, or inclusivity.

---

## 🔍 What Was Wrong?

| Issue                           | Why It's a Problem                                    | Fix                                |
| ------------------------------- | ----------------------------------------------------- | ---------------------------------- |
| `<span onclick="...">`          | Not keyboard-accessible or screen reader friendly     | Use `<button>` instead             |
| `alert()` only shows result     | Screen readers may not read it, no on-screen feedback | Show result in the DOM (`<p>` tag) |
| Fixed widths & large font sizes | Breaks layout on mobile                               | Use `%`, `rem`, media queries      |
| Poor color contrast on hover    | Hard for some users to see                            | Improve hover/focus styles         |
| No `aria-label`                 | Screen reader users may not understand meaning of "R" | Add `aria-label="Play Rock"` etc.  |

---

## 🧪 Example Fixes

### HTML (Before ➡️ After)

```html
<!-- BEFORE -->
<span class="circle" onclick="play('rock')">R</span>

<!-- AFTER -->
<button class="circle" onclick="play('rock')" aria-label="Play Rock">R</button>
```

### CSS (Before ➡️ After)

```css
/* BEFORE */
.circle {
  font-size: 65px;
  padding: 5px 20px;
}

/* AFTER */
.circle {
  font-size: 2.5rem;
  padding: 1rem 1.2rem;
  max-width: 80px;
  flex: 1 0 25%;
}
```

### JavaScript (Before ➡️ After)

```js
// BEFORE
alert("Computer chose rock, you " + result + "!");

// AFTER
document.getElementById("result").textContent = `Computer chose rock — ${result}`;
```

---

## 💬 AI Collaboration Example

Here’s a conversation you might have with ChatGPT or another AI assistant:

---

**You**:
I'm updating a Rock Paper Scissors game. It uses `<span>` tags for buttons and an `alert()` to show results. I want to make it more accessible. Suggestions?

**AI**:
Sure! To improve accessibility:

* Replace `<span>` with `<button>` to enable keyboard interaction.
* Use `aria-label` to give screen readers a meaningful description of the button.
* Instead of using `alert()`, display results inside a visible element like a `<p>` tag, and set `aria-live="polite"` so screen readers will read it out.

**You**:
Thanks. How can I make the layout more mobile-friendly without changing the look too much?

**AI**:
Use a `flexbox` container for the buttons (`display: flex`) and enable `wrap`. Add media queries to slightly reduce font size and padding on smaller screens. This keeps your original layout but adapts better on mobile devices.

---

## 🧠 Reflective Questions

Use these to deepen your understanding or write a short reflection:

1. Why is using `<button>` better than `<span>` for interactive elements?
2. What is `aria-live="polite"` and why might it be useful?
3. What’s the difference between redesigning and refactoring a UI?
4. Could you use AI to check your accessibility and responsiveness? Try it!
5. Did you keep the "spirit" of the original project? Why or why not?

---

## 🛠️ Optional AI Prompts to Try

Copy/paste into ChatGPT or Claude:

* **"Suggest WCAG 2.1 improvements for this HTML snippet using spans for buttons."**
* **"Convert this alert-based JavaScript output into a screen reader-friendly update in the DOM."**
* **"Help me write a CSS media query that keeps my layout intact on phones."**
* **"How can I justify changes I made to an in-class project based on accessibility validation?"**

---

## ✅ Submission Checklist

* [ ] Kept original layout and game logic
* [ ] Only changed HTML for validation or accessibility
* [ ] Justified each change (in a comment or brief note)
* [ ] Ensured it works well on desktop and mobile
* [ ] Used AI meaningfully and critically — not just to generate, but to evaluate and revise

