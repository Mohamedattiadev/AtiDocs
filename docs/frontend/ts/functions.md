---
title: TypeScript Functions
description: Learn how to define and annotate functions in TypeScript, including return types, optional parameters, and overloads.
comments: true
---

# TypeScript Functions

TypeScript provides rich typing for functions, enabling you to catch argument or return-type issues at compile time.

---

## 1. Function Parameter and Return Types

You can explicitly type both the parameters and the return value:

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

If the return type is not provided, TypeScript will infer it — but **explicit return types are recommended** for clarity and error prevention.

---

## 2. Optional and Default Parameters

### Optional Parameters:

```ts
function log(message: string, user?: string): void {
  console.log(user ? `${user}: ${message}` : message);
}
```

### Default Parameters:

```ts
function log(message: string, level: string = "info"): void {
  console.log(`[${level}] ${message}`);
}
```

---

## 3. Anonymous Functions and Arrow Functions

Type annotations for anonymous functions are usually inferred:

```ts
const double = (value: number): number => value * 2;
```

You can also explicitly declare types:

```ts
const double: (x: number) => number = (x) => x * 2;
```

---

## 4. Function Types (as Variables)

Function types can be defined and reused:

```ts
type MathOp = (a: number, b: number) => number;

const add: MathOp = (x, y) => x + y;
```

---

## 5. Rest Parameters

```ts
function sum(...values: number[]): number {
  return values.reduce((acc, val) => acc + val, 0);
}
```

---

## 6. Function Overloads

**Important**: TypeScript allows function overloads, but the implementation must handle all cases.

```ts
function reverse(input: string): string;
function reverse(input: number[]): number[];
function reverse(input: string | number[]): string | number[] {
  return typeof input === "string"
    ? input.split("").reverse().join("")
    : input.slice().reverse();
}
```

---

## 7. `void` vs `never`

- `void`: function returns nothing.
- `never`: function never returns (e.g., throws an error or has an infinite loop).

```ts
function fail(): never {
  throw new Error("Something went wrong");
}
```

---
