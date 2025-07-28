---
title: TypeScript Type System
description: A practical guide to TypeScript’s static types, type annotations, inference, and common pitfalls.
comments: true
---

# TypeScript Type System

TypeScript’s static typing system helps catch errors early and improves code clarity and maintainability.

---

## 1. Basic Type Annotations

You can declare variable types explicitly:

```ts
let age: number = 30;
let name: string = "Alice";
let isActive: boolean = true;
```

### Arrays

```ts
let numbers: number[] = [1, 2, 3];
let tags: string[] = ["ts", "js"];
```

### Objects

```ts
let user: { name: string; age: number } = {
  name: "John",
  age: 25,
};
```

---

## 2. Type Inference

TypeScript can infer types when you initialize variables:

```ts
let count = 10; // inferred as number
```

**Important**: Always annotate function parameters and return types, especially for complex logic.

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

---

## 3. Union and Literal Types

Union types allow multiple possible values:

```ts
let id: number | string;
id = 123;
id = "abc";
```

Literal types allow only specific string or number values:

```ts
let status: "success" | "error" | "loading";
status = "success"; // OK
status = "failed"; // Error
```

---

## 4. Tuples

Tuples are arrays with fixed length and types:

```ts
let userInfo: [string, number] = ["Alice", 30];
```

---

## 5. Optional and Default Parameters

You can make parameters optional or assign default values:

```ts
function log(message: string, level: string = "info") {
  console.log(`[${level}] ${message}`);
}
```

```ts
function printUser(name: string, age?: number) {
  console.log(name, age);
}
```

---

## 6. Common Pitfalls

- TypeScript performs type checking at **compile time**, not runtime.
- Using `any` disables type safety. Avoid it unless absolutely necessary.

```ts
let value: any = "hello"; // avoid if possible
```

Use `unknown` when the type is uncertain:

```ts
let input: unknown;
```

**Important**: Prefer `unknown` over `any` because `unknown` forces type checking before usage.

---
