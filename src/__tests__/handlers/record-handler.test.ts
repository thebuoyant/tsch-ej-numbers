import { describe, test, expect } from "@jest/globals";
import { readJsonData } from "../../handlers/record.handler";

describe("Ensure record handler", () => {
  test("Ensure function - readJsonData", () => {
    expect(readJsonData().length).toBeGreaterThan(0);
    expect(readJsonData(0).length).toBeGreaterThan(0);
    expect(readJsonData(10).length).toBe(10);
  });
});
