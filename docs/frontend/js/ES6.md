---
title: ES6 Features
description: New features introduced in ES6 (ECMAScript 2015)
comments: true
---

# ES6 Features

## 1. let and const

```js
let x = 10;
const y = 20;
```

---

## 2. Arrow Functions

```js
const greet = (name) => `Hello, ${name}`;
```

---

## 3. Template Literals

```js
let name = "Alice";
console.log(`Hi, ${name}!`);
```

---

## 4. Destructuring

```js
const user = { name: "Bob", age: 25 };
const { name, age } = user;
```

---

## 5. Spread and Rest

```js
// Spread
let nums = [1, 2, 3];
let copy = [...nums];

// Rest
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
```

---

## 6. Default Parameters

```js
function greet(name = "Guest") {
  return `Hi, ${name}`;
}
```

---

## 7. Classes

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }
}
```

---

## 8. Promises

Covered in detail in the Promises file.
