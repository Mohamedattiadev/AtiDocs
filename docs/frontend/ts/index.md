---
title: Introduction to TypeScript
description: A beginner-friendly overview of TypeScript, its benefits, and how it compares to JavaScript.
comments: true
---

# TypeScript: A Better JavaScript ✨

TypeScript is a **strongly typed superset of JavaScript** that compiles to plain JavaScript. It offers features like static type checking, interfaces, and tooling that improve code safety and developer productivity.

---

## 🚀 Why TypeScript?

- **Catch errors at compile-time** instead of runtime
- **Better editor support** (autocomplete, refactoring, etc.)
- **Improved code readability and documentation**
- **Scale large projects** more easily with type safety

---

## 🔍 TypeScript vs JavaScript

| Feature                              | JavaScript ✅  | TypeScript ✅✅ |
| ------------------------------------ | -------------- | --------------- |
| Dynamically typed                    | ✔️             | ❌              |
| Statically typed                     | ❌             | ✔️              |
| Interfaces                           | ❌ (via JSDoc) | ✔️              |
| Tooling (autocomplete, intellisense) | Limited        | Excellent       |
| Learning Curve                       | Low            | Moderate        |

> TypeScript is just JavaScript — with types.

---

## 🛠️ Installing TypeScript

You can install it globally via npm:

```bash
npm install -g typescript
```

Check version:

```bash
tsc --version
```

To initialize a project:

```bash
tsc --init
```

This creates a `tsconfig.json` file.

---

## 📁 A Simple Project Structure

```
my-app/
├── src/
│   └── index.ts
├── tsconfig.json
└── package.json
```

Use `tsc` to compile:

```bash
tsc
```

Or watch for changes:

```bash
tsc --watch
```

---

## 🔄 Compiling TS to JS

Your `.ts` file compiles to `.js` with the same logic — just with the types stripped out.

```ts
// index.ts
let name: string = "TypeScript";
console.log("Hello", name);
```

Becomes:

```js
// index.js
let name = "TypeScript";
console.log("Hello", name);
```

---

## 📺 Video: What is TypeScript?

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <a href="https://youtu.be/BwuLxPH8IDs" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/BwuLxPH8IDs/0.jpg" alt="TypeScript Crash Course" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">TypeScript </strong>
  </a>
</div>

---
