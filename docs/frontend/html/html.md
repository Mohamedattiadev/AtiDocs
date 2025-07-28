---
title: HTML Basics
description: Learn the core building blocks of HTML for web development
comments: true
---

# HTML Basics

This guide walks you through the **fundamentals of HTML** — the standard language for building web pages.

---

## 1. What is HTML?

**HTML (HyperText Markup Language)** is used to structure content on the web. It uses **tags** to define elements.

Example of a simple HTML document:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

---

## 2. Basic Tags

| Tag            | Purpose                          |
| -------------- | -------------------------------- |
| `<h1>`         | Headings (from `<h1>` to `<h6>`) |
| `<p>`          | Paragraph                        |
| `<a>`          | Anchor (links)                   |
| `<img>`        | Image                            |
| `<ul>`, `<li>` | Unordered list + list items      |
| `<ol>`, `<li>` | Ordered list + list items        |
| `<div>`        | Block container                  |
| `<span>`       | Inline container                 |

---

## 3. Headings

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller heading</h3>
```

> Use only **one `<h1>` per page** for accessibility and SEO.

---

## 4. Paragraphs & Line Breaks

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<br />
<p>Break above!</p>
```

---

## 5. Links (`<a>`)

```html
<a href="https://example.com">Visit Example</a>
<a href="#top">Go to Top</a>
<a href="mailto:someone@example.com">Send Email</a>
```

---

## 6. Images (`<img>`)

```html
<img src="image.jpg" alt="Description" width="300" />
```

- `alt`: Describes the image (important for accessibility)
- `width` and `height`: Set size

---

## 7. Lists

```html
<ul>
  <li>Milk</li>
  <li>Eggs</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

---

## 8. Containers: `<div>` and `<span>`

```html
<div>
  <h2>Section</h2>
  <p>This content is grouped together.</p>
</div>

<p>This is <span style="color: red;">inline</span> text.</p>
```

- `<div>` = block-level
- `<span>` = inline

---

## 9. Forms

```html
<form action="/submit" method="POST">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Login</button>
</form>
```

Other common input types: `email`, `checkbox`, `radio`, `file`, `submit`.

---

## 10. Tables

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
</table>
```

---

## 11. Semantic Elements

HTML5 added semantic tags that describe meaning:

| Tag         | Purpose                |
| ----------- | ---------------------- |
| `<header>`  | Page or section header |
| `<nav>`     | Navigation menu        |
| `<main>`    | Main content           |
| `<section>` | Thematic section       |
| `<article>` | Self-contained content |
| `<footer>`  | Footer of page/section |

---

## 12. Comments

```html
<!-- This is a comment -->
```

---

## 13. File Structure Best Practices

```plaintext
project/
├── index.html
├── style.css
└── script.js
```

Linking files:

```html
<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>
```

---

## 14. Classes and IDs

```html
<div id="header" class="container main-header">
  <p class="title">Welcome</p>
</div>
```

- `id`: Unique identifier (one per page)
- `class`: Reusable styling group

---

## Summary

HTML is the **foundation of every webpage**. Learn these key concepts:

- Page structure and tags
- Text, images, links
- Lists, forms, and tables
- Semantic HTML and accessibility
- Classes and IDs

Once you're confident with HTML, pair it with **CSS** for styling and **JavaScript** for interactivity.

---
