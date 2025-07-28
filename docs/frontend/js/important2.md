---
title: JavaScript Event Loop Explained
description: A deep dive into how JavaScript handles asynchronous operations using the event loop, call stack, and task queues.
comments: true
---

# 🔄 JavaScript Event Loop Explained

Understanding the **event loop** is essential for writing responsive, non-blocking JavaScript — whether in the browser or Node.js.

---

## 1. JavaScript Runtime: A Quick Overview

JavaScript runs in a **single-threaded** environment. It can only execute **one task at a time**. So how does it handle things like timers, API calls, and user interactions without freezing?

👉 That’s where the **event loop** comes in.

---

## 2. Core Components of the Event Loop

### 2.1 Call Stack

The **call stack** keeps track of function execution.

- Operates in a **LIFO** (Last-In, First-Out) manner
- If it's busy, nothing else can run

```js
function greet() {
  console.log("Hello");
}

greet(); // 'greet' is pushed to the stack, executed, then popped off
```

---

### 2.2 Web APIs (Browser or Node APIs)

These are APIs provided by the environment (e.g., browser or Node.js) to handle asynchronous operations.

Examples:

- `setTimeout`
- `fetch` / AJAX
- DOM events

```js
setTimeout(() => {
  console.log("Timeout!");
}, 0);
```

This doesn't immediately go to the call stack — it gets handed off to the Web API environment.

---

### 2.3 Callback Queue (aka Task Queue)

Holds **asynchronous callbacks** like:

- `setTimeout`
- `setInterval`
- DOM event handlers

Once the call stack is clear, the event loop moves the first task from this queue to the call stack.

---

### 2.4 Microtask Queue

A **higher-priority** queue for microtasks like:

- `Promise.then()`
- `queueMicrotask()`
- `MutationObserver`

Microtasks run **after the current task**, but **before** anything in the callback queue.

```js
Promise.resolve().then(() => {
  console.log("Promise resolved");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

// Output:
// Promise resolved
// Timeout
```

---

## 3. Event Loop in Action

### Sample Code:

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

### Why?

1. `console.log("Start")` and `console.log("End")` run first (synchronous).
2. The `Promise` callback is placed in the **microtask queue**.
3. `setTimeout` callback is queued in the **callback queue**.
4. After the call stack clears, **microtasks run first**, followed by **callbacks**.

---

## 4. How the Event Loop Works (Visual Summary)

1. JS runs synchronously — line by line.
2. Async tasks (like `setTimeout`, `fetch`) go to **Web APIs**.
3. Their callbacks are placed in:
   - **Microtask Queue** (Promises, `queueMicrotask`)
   - **Callback Queue** (Timers, DOM events)
4. The **event loop**:
   - Waits for the call stack to be empty
   - Runs all microtasks
   - Then executes one task from the callback queue
5. Repeat.

---

## 5. Why It Matters

- Avoid blocking the **call stack** (e.g., large loops, sync XHR).
- Understand why **Promises resolve before timeouts**.
- Debug async behavior like **race conditions** or **timing bugs**.
- Master frameworks (like React, Vue, Node.js) more effectively.

---

## Video: Visualizing the Event Loop

Here’s a fantastic visual explanation from JSConf:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">

  <a href="https://www.youtube.com/watch?v=eiC58R16hb8" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/eiC58R16hb8/0.jpg" alt="JavaScript Event Loop Video" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">JavaScript Event Loop - Philip Roberts (JSConf)</strong>
  </a>

</div>

---

## Summary

The **JavaScript event loop** allows:

- Efficient execution of **async tasks**
- Smooth handling of **Promises** and `async/await`
- Responsive, **non-blocking** code
