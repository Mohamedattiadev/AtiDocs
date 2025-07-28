---
title: JavaScript localStorage Explained
description: Learn how to use localStorage in JavaScript to persist data in the browser across sessions.
comments: true
---

# JavaScript localStorage Explained

`localStorage` allows you to store key-value data in a user's browser — **persistently**, even after the page reloads or the browser is closed.

---

## 1. What is `localStorage`?

- Part of the **Web Storage API**
- Stores **string key-value pairs**
- Synchronous and stored **per origin**
- Persistent: stays until explicitly cleared

📝 Each origin (domain + protocol + port) gets up to **5–10MB** of storage.

---

## 2. Basic Usage

### Set an Item

```js
localStorage.setItem("username", "john_doe");
```

### Get an Item

```js
const name = localStorage.getItem("username");
console.log(name); // "john_doe"
```

### Remove an Item

```js
localStorage.removeItem("username");
```

### Clear All Items

```js
localStorage.clear(); // ⚠️ removes everything for this origin
```

---

## 3. Important Notes

- **All data is stored as strings.**
- You must **serialize/deserialize** complex data types like objects or arrays.

```js
const user = { name: "Alice", age: 30 };

// Save
localStorage.setItem("user", JSON.stringify(user));

// Retrieve
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "Alice"
```

---

## 4. When to Use `localStorage`

Use it for:

- Saving **UI preferences** (e.g. theme, layout)
- Caching small amounts of data
- Storing tokens (⚠️ but beware of XSS risks)

Avoid for:

- Sensitive data (use **httpOnly cookies** for auth tokens)
- Large datasets
- Syncing across tabs (use `storage` event or other techniques)

---

## 5. Example: Theme Switcher

```js
// Check stored theme
const theme = localStorage.getItem("theme");
if (theme) {
  document.body.classList.add(theme);
}

// Save user preference
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}
```

---

## 6. `sessionStorage` vs. `localStorage`

| Feature            | `localStorage`         | `sessionStorage`    |
| ------------------ | ---------------------- | ------------------- |
| Lifespan           | Until manually cleared | Until tab is closed |
| Shared Across Tabs | ✅ Yes                 | ❌ No               |
| Size Limit         | ~5-10MB                | ~5MB                |

---

## 7. Listen to Storage Changes

Useful when syncing changes across tabs:

```js
window.addEventListener("storage", (event) => {
  console.log(`Key changed: ${event.key}`);
  console.log(`New value: ${event.newValue}`);
});
```

---

## Video Guide

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">

  <a href="https://www.youtube.com/watch?v=GihQAC1I39Q" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/GihQAC1I39Q/0.jpg" alt="localStorage Video Tutorial" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">localStorage in JavaScript - Web Dev Simplified</strong>
  </a>

</div>

---

## Summary

- `localStorage` lets you persist small data client-side.
- Keys and values are always **strings**.
- Serialize objects using `JSON.stringify()`.
- Be careful not to store **sensitive data**.
