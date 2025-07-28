---
title: JavaScript Error Handling with Try / Catch
description: A focused guide to using try/catch and best practices for error handling in modern JavaScript, especially with async/await.
comments: true
---

# Error Handling in JavaScript with try - catch

Handling errors properly is a key part of writing reliable, maintainable JavaScript—especially when working with asynchronous code like network requests.

This guide covers how to use `try`, `catch`, `finally`, and custom error handling with real-world examples.

---

## 1. The `try` / `catch` Pattern

The `try` block runs code that might throw an error. If an error occurs, control jumps to the `catch` block.

```js
try {
  // risky operation
} catch (error) {
  // handle the error
}
```

### Example:

```js
try {
  const data = JSON.parse("invalid JSON");
} catch (err) {
  console.error("Parsing error:", err.message);
}
```

---

## 2. Handling Asynchronous Errors

When working with `async/await`, you should wrap your `await` calls inside `try/catch` blocks to handle rejections and runtime errors gracefully.

### Example with `fetch()`:

```js
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error:", error.message);
    // Optionally rethrow or handle further
  }
}
```

---

## 3. Checking HTTP Status with `fetch()`

`fetch()` does **not** throw for HTTP errors like 404 or 500—it only throws for **network issues**. You must check the `.ok` property on the response manually.

### Full Example:

```js
async function getUser() {
  try {
    const response = await fetch("https://api.example.com/user");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
```

---

## 4. Custom Error Messages

You can throw your own error messages based on specific logic, such as HTTP status codes:

```js
if (response.status === 404) {
  throw new Error("User not found");
}
```

This allows you to provide meaningful feedback for different error cases.

---

## 5. Using `finally`

The `finally` block always runs—whether an error occurred or not. It's perfect for cleanup actions like hiding loaders or resetting states.

```js
async function loadWithSpinner() {
  showSpinner();
  try {
    const response = await fetch("/data.json");
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("Something went wrong:", err.message);
  } finally {
    hideSpinner();
  }
}
```

---

## Video Tutorial: Try/Catch Explained

Here’s a clear and concise video that walks through error handling in JavaScript using `try`, `catch`, and `finally`:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <a href="https://www.youtube.com/watch?v=NwoAZF66_Go" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/NwoAZF66_Go/0.jpg" alt="Try Catch Video" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">JavaScript Try / Catch / Finally </strong>
  </a>
</div>

---

## Summary

- Use `try/catch` to isolate risky code and gracefully handle errors.
