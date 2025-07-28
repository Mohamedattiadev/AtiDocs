---
title: TypeScript Generics
description: Learn how to write reusable and type-safe code using generics in TypeScript.
comments: true
---

# TypeScript Generics

Generics enable you to write flexible and reusable code without losing type safety.

---

## 1. What Are Generics?

Generics allow you to define a placeholder for a type that is provided when the function, class, or interface is used.

### Basic Example:

```ts
function identity<T>(value: T): T {
  return value;
}

const result = identity<string>("hello");
```

- `T` is a generic type parameter.
- You can explicitly provide the type (`<string>`) or let TypeScript infer it.

---

## 2. Type Inference with Generics

You often don’t need to specify the type; TypeScript infers it:

```ts
const numberResult = identity(123); // inferred as number
```

---

## 3. Generic Interfaces

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<string> = {
  data: "OK",
  success: true,
};
```

---

## 4. Generic Functions with Constraints

Use `extends` to constrain generics to specific structures:

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello"); // ✅
getLength([1, 2, 3]); // ✅
getLength(123); // ❌
```

---

## 5. Generics in Classes

```ts
class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

const stringBox = new Box<string>("Hello");
```

---

## 6. Multiple Generic Types

```ts
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const merged = merge({ name: "Alice" }, { age: 30 });
// merged is of type { name: string; age: number }
```

---

## 7. Important Notes

**Important**: Generics are erased during compilation — they exist only at compile time to enforce type checks. JavaScript output does not retain any generic types.

---

## Video: TypeScript Generics Tutorial

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <a href="https://www.youtube.com/watch?v=EcCTIExsqmI&t=49s&pp=ygULZ2VuZXJpY3MgdHM%3D" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/EcCTIExsqmI/0.jpg" alt="TypeScript Generics Tutorial" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">Mastering TypeScript Generics – Web Dev Simplified</strong>
  </a>
</div>

---
