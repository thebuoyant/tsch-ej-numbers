import { describe, test, expect } from "@jest/globals";
import { handleGetLowHighCount } from "../../handlers/record-low-high-count.handler";

describe("Ensure record low high", () => {
  test("Ensure function - handleGetLowHighCount", () => {
    expect(handleGetLowHighCount().countLow).toBeGreaterThan(0);
    expect(handleGetLowHighCount().countHigh).toBeGreaterThan(0);
  });
});
