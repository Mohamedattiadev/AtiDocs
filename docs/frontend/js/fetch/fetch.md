---
title: Fetch API and Async/Await
description: Fetching data and asynchronous JavaScript
comments: true
---

# Fetch API and Async/Await

## 1- What is Fetch?

The **Fetch API** lets you make network requests (like getting data from a server).

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

---

## 2- Using async/await

```js
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

## 3- Why async/await?

- Makes code easier to read
- Acts like synchronous code but works asynchronously

---

## 4- Async vs Sync

**Synchronous**: Code runs line by line, waits for each step.  
**Asynchronous**: Code can move on without waiting (non-blocking).

Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 1000);

console.log("End");
```

1- ==console.log("Start");==

- This line is synchronous, so it runs immediately and prints: ==Start==

2- ==setTimeout(() => { console.log("This runs later"); }, 1000);==

- This is asynchronous. It tells the browser:

> "Wait 1 second, then run this function."
> But it doesn’t stop the rest of the code from running.It continues right away.
> So instead of waiting 1 second here, the browser sets a >timer and moves on.

3- ==console.log("End");==

- This line runs immediately after setting the timer, so it prints: ==End==

---

- so final output

```
Start
End
This runs later


```

## Video Guide

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">

  <a href="https://www.youtube.com/watch?v=ubw2hdQIl4E" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/ubw2hdQIl4E/0.jpg" alt="localStorage Video Tutorial" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">localStorage in JavaScript - Web Dev Simplified</strong>
  </a>

</div>
