import { describe, test, expect } from "@jest/globals";
import { handleReadJsonData } from "../../handlers/record.handler";

describe("Ensure record handler", () => {
  test("Ensure function - readJsonData", () => {
    expect(handleReadJsonData().length).toBeGreaterThan(0);
    expect(handleReadJsonData(0).length).toBeGreaterThan(0);
    expect(handleReadJsonData(10).length).toBe(10);
  });
});
