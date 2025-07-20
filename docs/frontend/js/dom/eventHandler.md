---
title: JavaScript Events
description: Handling events in JavaScript
comments: true
---

# JavaScript Events

## 1- What is an Event?

An event is something that happens in the browser (click, scroll, key press, etc.).

---

## 2- Common Event Types

- `click`
- `mouseover`
- `keydown`
- `submit`
- `load`

---

## 3- Adding Event Listeners

```js
document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});
```

---

## 4- Removing Event Listeners

```js
function sayHi() {
  alert("Hi");
}
const btn = document.getElementById("btn");
btn.addEventListener("click", sayHi);
btn.removeEventListener("click", sayHi);
```

---

## 5- Event Object

```js
document.addEventListener("click", function (event) {
  console.log(event.target); // What was clicked
});
```

---

## 6- Event Bubbling and Capturing

- **Bubbling**: Events go from the innermost element up.
- **Capturing**: Events go from the outermost element down.
