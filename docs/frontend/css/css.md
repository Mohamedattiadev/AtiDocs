---
title: CSS Basics
description: Learn how to style websites using CSS
comments: true
---

# CSS Basics 🎨

CSS (Cascading Style Sheets) is used to control the **look and feel of HTML elements** — fonts, colors, spacing, layout, and more.

---

## 1. How to Include CSS

### Inline

```html
<p style="color: red;">Hello</p>
<!-- Applies style directly to this element -->
```

### Internal

```html
<style>
  p {
    color: red; /* Makes all <p> tags red */
  }
</style>
```

### External (Best practice)

```html
<link rel="stylesheet" href="styles.css" />
<!-- Links to an external stylesheet -->
```

---

## 2. Selectors

```css
p {
  color: blue; /* All <p> elements will be blue */
}

.card {
  padding: 1rem; /* Adds spacing inside the card */
}

#header {
  background: black; /* Applies a black background to the element with ID 'header' */
}

nav a {
  color: green; /* All <a> inside <nav> will be green */
}

h1,
h2,
h3 {
  font-weight: bold; /* Makes all headers bold */
}
```

---

## 3. Colors

```css
color: red; /* Named color */
color: #ff0000; /* Hexadecimal */
color: rgb(255, 0, 0); /* RGB format */
color: hsl(0, 100%, 50%); /* HSL format */
background-color: #f0f0f0; /* Light gray background */
```

---

## 4. Fonts & Text

```css
font-size: 16px; /* Size of text */
font-family: Arial, sans-serif; /* Font type */
font-weight: bold; /* Bold text */
text-align: center; /* Centers text horizontally */
text-decoration: underline; /* Underlines text */
line-height: 1.6; /* Space between lines */
letter-spacing: 0.5px; /* Space between letters */
```

---

## 5. Box Model

```css
width: 200px; /* Element width */
height: 100px; /* Element height */
padding: 10px; /* Space inside border */
margin: 20px; /* Space outside border */
border: 1px solid black; /* 1px solid black border */
box-sizing: border-box; /* Includes padding/border in width & height */
```

---

## 6. Display & Position

```css
display: block; /* Default for divs */
display: inline; /* Sits next to elements */
display: flex; /* Enables flex layout */
display: grid; /* Enables grid layout */
display: none; /* Hides the element */

position: static; /* Default position */
position: relative; /* Positioned relative to itself */
position: absolute; /* Positioned relative to nearest positioned ancestor */
position: fixed; /* Fixed to viewport */
z-index: 10; /* Layer order */
top: 0; /* Position from top */
left: 20px; /* Position from left */
```

---

## 7. Flexbox

```css
.container {
  display: flex; /* Activates flexbox layout */
  justify-content: center; /* Aligns items horizontally */
  align-items: center; /* Aligns items vertically */
  gap: 1rem; /* Adds space between items */
}
```

---

## 8. Grid

```css
.container {
  display: grid; /* Enables grid layout */
  grid-template-columns: 1fr 2fr; /* Two columns: 1/3 and 2/3 width */
  gap: 1rem; /* Space between grid items */
}
```

---

## 9. Borders & Radius

```css
border: 2px solid #000; /* Solid black 2px border */
border-radius: 8px; /* Rounded corners */
```

---

## 10. Shadows

```css
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow behind element */
text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Shadow behind text */
```

---

## 11. Backgrounds

```css
background-color: #fafafa; /* Light background */
background-image: url("image.jpg"); /* Adds background image */
background-size: cover; /* Scale to fill */
background-repeat: no-repeat; /* Prevent repeat */
background-position: center; /* Center the image */
```

---

## 12. Hover & Pseudo-classes

```css
a:hover {
  color: red; /* Turns link red on hover */
}

input:focus {
  border-color: blue; /* Changes border when input is focused */
}
```

---

## 13. Transitions & Animations

```css
button {
  transition: background-color 0.3s ease; /* Smooth color change */
}

button:hover {
  background-color: black; /* Change color on hover */
}

@keyframes slide {
  from {
    transform: translateX(0);
  } /* Start position */
  to {
    transform: translateX(100px);
  } /* End position */
}

.box {
  animation: slide 1s forwards; /* Plays slide animation */
}
```

---

## 14. Media Queries (Responsive Design)

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Stack elements vertically */
  }
}
```

---

## 15. Common Utility Classes (Custom)

```css
.text-center {
  text-align: center; /* Center text */
}

.mt-4 {
  margin-top: 1rem; /* Top margin */
}

.p-2 {
  padding: 0.5rem; /* Padding */
}

.hidden {
  display: none; /* Hide element */
}
```

---

## 16. Units

```css
/* Absolute units */
width: 100px; /* Fixed width */
font-size: 12pt; /* Font size in points */

/* Relative units */
width: 50%; /* Half of parent width */
font-size: 1.5em; /* 1.5x parent font size */
padding: 2rem; /* 2x root font size */
```

---

## 17. CSS Variables

```css
:root {
  --main-color: #3498db; /* Define variable */
}

button {
  background-color: var(--main-color); /* Use variable */
}
```

---

## 18. Useful Tools

- [CSS Tricks](https://css-tricks.com/) – Tips & tutorials
- [Can I use](https://caniuse.com/) – Browser compatibility
- [Flexbox Froggy](https://flexboxfroggy.com/) – Game to learn Flexbox
- [Grid Garden](https://cssgridgarden.com/) – Game to learn Grid

---

## Summary

Learn:

- How to style text and boxes
- Layout with Flexbox and Grid
- Responsive design with media queries
- Animations and hover states
- Custom utility classes and variables

---
