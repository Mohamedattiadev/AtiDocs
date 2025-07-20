---
title: Error Handling
description: A guide to try...catch, custom errors, and safe coding practices in JavaScript
comments: true
---

# Practical JavaScript Error Handling

A focused guide on **modern error handling** in JavaScript — how to use `try...catch`, custom errors, and ensure your code is stable in real-world scenarios.

---

## 1. try...catch

### 1.1 Basic Syntax

```js
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}
```

### 1.2 Example

```js
try {
  let data = JSON.parse('{"name": "Alice"}');
  console.log(data.name); // Alice
} catch (err) {
  console.error("Invalid JSON!", err.message);
}
```

---

## 2. What Triggers catch?

- ❌ Syntax errors **outside** the try block are not caught.
- ✅ Runtime errors **inside** the try block are caught.

```js
try {
  let result = riskyFunction();
} catch (err) {
  console.error("Something went wrong:", err);
}
```

---

## 3. finally Block

Always runs — whether there's an error or not. Use it for cleanup.

```js
try {
  console.log("Trying...");
  throw new Error("Oops!");
} catch (err) {
  console.error("Caught:", err.message);
} finally {
  console.log("Cleanup done");
}
```

Output:

```
Trying...
Caught: Oops!
Cleanup done
```

---

## 4. Throwing Custom Errors

### 4.1 Manually Throw

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  divide(4, 0);
} catch (e) {
  console.error(e.message); // "Cannot divide by zero"
}
```

---

## 5. Best Practices

- ✅ Use `try...catch` for:
  - JSON parsing
  - Network/API calls
  - Code that uses 3rd-party libraries
- ❌ Don’t swallow errors silently:

```js
catch (e) {
  // bad: nothing logged
}
```

- ✅ Log or rethrow unknown errors for debugging.
- ✅ Use custom error types to distinguish logic vs technical failures.

---

## Summary

Solid error handling makes your code:

- Stable
- Debuggable
- Ready for production
- Friendly to users

Mastering `try...catch` gives you more control and trust over your apps.
