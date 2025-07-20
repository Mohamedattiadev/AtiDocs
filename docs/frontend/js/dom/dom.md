---
title: JavaScript DOM
description: Understanding the Document Object Model (DOM)
comments: true
---

# JavaScript DOM 🌐

## 1- What is the DOM?

The **Document Object Model (DOM)** is a tree-like structure that represents the HTML elements of a web page. JavaScript uses the DOM to read and change content, structure, and style.

---

## 2- Accessing Elements

```js
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("tag");
document.querySelector("selector");
document.querySelectorAll("selector");
```

---

## 3- Changing Content

```js
document.getElementById("demo").textContent = "Hello!";
document.getElementById("demo").innerHTML = "<b>Hello!</b>";
```

---

## 4- Changing Styles

```js
document.getElementById("demo").style.color = "red";
```

---

## 5- Creating and Adding Elements

```js
const p = document.createElement("p");
p.textContent = "New paragraph";
document.body.appendChild(p);
```

---

## 6- Removing Elements

```js
const elem = document.getElementById("demo");
elem.remove();
```

---

## 7- DOM Events

```js
document.getElementById("btn").addEventListener("click", function () {
  alert("Clicked!");
});
```
