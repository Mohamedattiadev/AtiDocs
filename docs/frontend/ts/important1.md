---
title: Real-World Use Cases for TypeScript Type Narrowing
description: Practical examples of how type narrowing helps in day-to-day TypeScript projects.
comments: true
---

# Real-World Use Cases for Type Narrowing

Type narrowing helps TypeScript developers write safer, more accurate code in real apps. Below are real scenarios where narrowing improves reliability and clarity.

---

## 1. Handling API Response Types

```ts
type ApiResponse =
  | { success: true; data: string[] }
  | { success: false; error: string };

function handleResponse(res: ApiResponse) {
  if (res.success) {
    console.log("Items:", res.data.join(", "));
  } else {
    console.error("API Error:", res.error);
  }
}
```

**Important**: Discriminated unions allow you to handle different outcomes with full type safety.

---

## 2. Working with Form Values

```ts
function parseFormValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.trim();
  }
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value ? "Yes" : "No";
}
```

**Use case**: Form fields often have mixed types — narrowing ensures correct behavior.

---

## 3. Component Props in UI Libraries

```ts
type ButtonProps =
  | { variant: "link"; href: string }
  | { variant: "action"; onClick: () => void };

function Button(props: ButtonProps) {
  if (props.variant === "link") {
    return <a href={props.href}>Link</a>;
  } else {
    return <button onClick={props.onClick}>Click</button>;
  }
}
```

**Use case**: Prevents invalid prop combinations (e.g., passing `href` to an action button).

---

## 4. Event Handling in DOM

```ts
function handleInput(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    console.log("Input value:", event.target.value);
  }
}
```

**Important**: The DOM API uses many union types — `instanceof` helps ensure safe usage.

---

## 5. Parsing JSON from External Sources

```ts
function processUser(user: unknown) {
  if (
    typeof user === "object" &&
    user !== null &&
    "name" in user &&
    typeof (user as any).name === "string"
  ) {
    console.log("User:", (user as any).name);
  } else {
    console.warn("Invalid user object");
  }
}
```

**Use case**: APIs can return malformed or unexpected data — narrowing adds protection.

---

## 6. Differentiating Between Error Shapes

```ts
function handleError(error: unknown) {
  if (error instanceof Error) {
    console.error("Standard error:", error.message);
  } else if (
    typeof error === "object" &&
    error !== null &&
    "message" in error
  ) {
    console.error("Custom error:", (error as any).message);
  } else {
    console.error("Unknown error:", error);
  }
}
```

**Use case**: Helps handle both `Error` objects and custom error shapes from APIs.

---

## Summary

- Type narrowing makes code **safer and smarter**, especially in conditions, components, and APIs.
- Use `typeof`, `in`, `instanceof`, and discriminated unions to control behavior by type.
- Combine narrowing with type guards and runtime checks for robust code.
