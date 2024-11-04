import { readJsonData } from "./handlers/record.handler";

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// Beispiel einer weiteren Utility-Funktion
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function getRecords() {
  return readJsonData();
}
