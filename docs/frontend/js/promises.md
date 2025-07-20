---
title: JavaScript Promises
description: Understanding JavaScript Promises
comments: true
---

# JavaScript Promises

## 1- What is a Promise?

A **Promise** is an object that represents a task that might complete in the future.

---

## 2- States of a Promise

- **Pending**: still waiting
- **Fulfilled**: completed successfully
- **Rejected**: failed

---

## 3- Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed.");
  }
});
```

---

## 4- Using Promises

```js
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

---

## 5- Chaining Promises

```js
fetch("https://api.example.com")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```
