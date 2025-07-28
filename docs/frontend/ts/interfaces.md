---
title: TypeScript Interfaces and Type Aliases
description: Learn how to define and use interfaces and type aliases in TypeScript for better type structure and reuse.
comments: true
---

# TypeScript Interfaces and Type Aliases

Interfaces and type aliases are powerful tools for creating reusable, readable, and type-safe structures in TypeScript.

---

## 1. Defining an Interface

Interfaces describe the shape of an object.

```ts
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
}

const user: User = {
  name: "Alice",
  age: 30,
};
```

---

## 2. Type Alias

Type aliases work similarly to interfaces but are more flexible.

```ts
type Product = {
  id: number;
  title: string;
  price: number;
};

const item: Product = {
  id: 1,
  title: "Keyboard",
  price: 49.99,
};
```

**Important**: Use `type` for unions, primitives, tuples, and more complex types. Use `interface` when extending or creating object shapes.

---

## 3. Extending Interfaces

Interfaces can be extended to inherit properties:

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const rex: Dog = {
  name: "Rex",
  breed: "Labrador",
};
```

---

## 4. Extending Type Aliases (via intersection)

You can combine type aliases using `&`:

```ts
type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type Post = {
  title: string;
  content: string;
} & Timestamps;

const blogPost: Post = {
  title: "Hello",
  content: "World",
  createdAt: new Date(),
  updatedAt: new Date(),
};
```

---

## 5. Key Differences

| Feature              | Interface | Type Alias  |
| -------------------- | --------- | ----------- |
| Extensible           | ✅ Yes    | ✅ With `&` |
| Use for primitives   | ❌ No     | ✅ Yes      |
| Declaration merging  | ✅ Yes    | ❌ No       |
| Use in unions/tuples | ❌ No     | ✅ Yes      |

---

## 6. When to Use Each

- Use `interface` when modeling the shape of objects or working with class-based code.
- Use `type` when combining types, working with primitives, or doing advanced type operations.

**Important**: Interfaces are generally preferred for public APIs, as they support declaration merging.

---
