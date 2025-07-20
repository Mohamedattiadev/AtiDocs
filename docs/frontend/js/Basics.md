---
title: JavaScript Basics
description: Learn the fundamentals of JavaScript
comments: true
---

# JavaScript Basics

This guide covers the core building blocks of JavaScript — perfect for beginners!

---

## 1. Variables

Variables store data.

```js
let name = "Alice"; // Can change
const age = 25; // Can't change
var city = "London"; // Old way (not recommended)
```

- `let` and `const` are the modern way to create variables.
- Use `const` by default, unless you need to change the value.

---

## 2. Data Types

JavaScript has different types of data:

```js
let text = "hello"; // String
let number = 42; // Number
let isHappy = true; // Boolean
let nothing = null; // Null
let notSet; // Undefined
let person = { name: "Tom" }; // Object
let list = [1, 2, 3]; // Array
```

---

## 3. Operators

```js
// Arithmetic
5 + 3; // 8
10 - 4; // 6
6 * 2; // 12
9 / 3; // 3

// Comparison
5 == "5"; // true (loose)
5 === "5"; // false (strict)
4 !== 5; // true

// Logical
true && false; // false
true || false; // true
!true; // false
```

---

## 4. Functions

Functions are blocks of code you can reuse.

```js
function greet(name) {
  return "Hello, " + name;
}

const sayHi = (name) => "Hi, " + name;

greet("Alice"); // "Hello, Alice"
```

---

## 5. Conditionals

Run code based on conditions.

```js
let age = 18;

if (age >= 18) {
  console.log("You're an adult");
} else {
  console.log("You're a minor");
}
```

---

## 6. Loops

Repeat code multiple times.

```js
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

## 7. Arrays

Store multiple values.

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
fruits.push("orange"); // Add to end
```

---

## 8. Objects

Group related data together.

```js
let person = {
  name: "Bob",
  age: 30,
  isStudent: false,
};

console.log(person.name); // "Bob"
```

---

## 9. Events

React to things like clicks.

```html
<button onclick="sayHello()">Click me</button>

<script>
  function sayHello() {
    alert("Hello!");
  }
</script>
```

---

## 10. DOM Manipulation

Change the web page with JavaScript.

```html
<p id="demo">Hello</p>

<script>
  document.getElementById("demo").textContent = "Changed!";
</script>
```

---

## 11. Asynchronous Code

Wait for things like data from a server.

```js
// Using Promises
fetch("https://api.example.com")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Using async/await
async function getData() {
  const response = await fetch("https://api.example.com");
  const data = await response.json();
  console.log(data);
}
```

---

## Summary

JavaScript helps you make websites interactive. Learn these basics well:

- Variables & Data Types
- Functions & Loops
- Conditions & Operators
- Arrays & Objects
- DOM & Events
- Async code

Once you're comfortable, explore more advanced stuff like ES6+, modules, and frameworks (React, Vue, etc.).

---
