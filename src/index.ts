import { readJsonData } from "./handlers/record.handler";
import { TRecord } from "./types/record.types";

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

export function getRecords(limit = 0): TRecord[] {
  return readJsonData(limit);
}
