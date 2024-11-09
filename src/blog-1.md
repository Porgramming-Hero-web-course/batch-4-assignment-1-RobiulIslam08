# 🚀 The significance of union and intersection types in TypeScript

TypeScript provides powerful type features to improve code safety and maintainability. Two key features are **union types** and **intersection types**.

## Union Types

Union types allow a variable to be one of several types. It’s helpful when a value can be of multiple types. Here’s an example:

```typescript
type Age = number | string;

function handleAge(age: Age) {
  if (typeof age === "number") {
    return 'Age is a number';
  } else if (typeof age === "string") {
    return 'Age is a string';
  }
}

console.log(handleAge(30));   // Output: Age is a number
console.log(handleAge("30")); // Output: Age is a string
