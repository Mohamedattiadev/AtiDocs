---
title: JavaScript Event Loop Explained
description: Deep dive into how JavaScript handles asynchronous operations via the event loop, call stack, and queue
comments: true
---

# JavaScript Event Loop 🔄

Understanding the **event loop** is crucial for writing efficient, non-blocking JavaScript — especially for frontend or Node.js applications.

---

## 1. JavaScript Runtime Model

JavaScript is **single-threaded**, meaning it can do **one thing at a time**. But thanks to the **event loop**, it can handle **asynchronous tasks** like network requests, timers, and UI updates.

---

## 2. Key Components

### 2.1 Call Stack

- Keeps track of function calls
- Follows LIFO (Last-In, First-Out)
- If the stack is busy, JS can't do anything else

```js
function greet() {
  console.log("Hello");
}

greet(); // pushed to the stack, then popped after execution
```

### 2.2 Web APIs / Browser APIs

Provided by the browser (or Node.js environment)

Includes: setTimeout, DOM events, AJAX/fetch, etc.

```js
setTimeout(() => {
  console.log("Timeout!");
}, 0);
```

The setTimeout callback doesn't go to the call stack immediately. It waits in a queue.

### 2.3 Callback Queue (Task Queue)

- Stores setTimeout, DOM events, etc.
- Waits for the call stack to be empty
- Then the event loop pushes tasks to the call stack

### 2.4 Microtask Queue

- Stores Promise callbacks, queueMicrotask, MutationObserver
- Runs before the callback queue after each task

```js
Promise.resolve().then(() => {
  console.log("Promise resolved");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

// Output:
// "Promise resolved"
// "Timeout"
```

## 3. The Event Loop in Action

### Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Output:

```
Start
End
Promise
Timeout
```

**Why?**

- Call stack: "Start" and "End" run immediately.
- Promise goes to microtask queue → runs before setTimeout.
- setTimeout is in callback queue → runs last.

## 4. Visualization

- JS reads line by line → pushes function calls to the call stack
- Async tasks (like timers or fetch) are sent to Web APIs
- Their callbacks go to:
  - Microtask Queue (Promises)
  - Callback Queue (Timers, DOM events)
- The Event Loop checks:
  - If the call stack is empty
  - Runs all microtasks
  - Then runs one callback from the callback queue

## 5. Why It Matters

- Avoid blocking the call stack (e.g., with large loops or sync XHR)
- Always remember Promises resolve before timeouts
- Debug async behavior (e.g., race conditions, timing issues)

## Video Explanation

- Here’s a great video that visually explains the JavaScript Event Loop:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">

  <a href="https://www.youtube.com/watch?v=eiC58R16hb8" target="_blank" style="text-align: center; display: block; padding: 1em;  border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/eiC58R16hb8/0.jpg" alt="JavaScript Event Loop Video" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">JavaScript Event Loop - Philip Roberts (JSConf)</strong>
  </a>

</div>

## Summary

The event loop allows JS to handle:

- Multiple async tasks
- Promises and await
- Efficient and non-blocking code

Mastering it helps you:

- Write better asynchronous logic
- Debug timing-related bugs
- Understand frameworks like React, Vue, and Node.js better
