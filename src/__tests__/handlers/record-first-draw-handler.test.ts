import { describe, test, expect } from "@jest/globals";
import { getFirstDrawData } from "../../handlers/record-first-draw.handler";

describe("Ensure record first draw handler", () => {
  test("Ensure function - getFirstDrawData", () => {
    expect(getFirstDrawData().date).toBe("23.03.2012");
  });
});
