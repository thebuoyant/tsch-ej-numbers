// src/__tests__/index.test.ts

import { add, subtract, greet } from "../index";

describe("Utility Functions", () => {
  test("add function adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("subtract function subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(5, 5)).toBe(0);
  });

  test("greet function returns a greeting message", () => {
    expect(greet("Alice")).toBe("Hello, Alice!");
    expect(greet("Bob")).toBe("Hello, Bob!");
  });
});
