import { describe, test, expect } from "@jest/globals";
import { handleGetFirstDrawData } from "../../handlers/record-first-draw.handler";

describe("Ensure record first draw handler", () => {
  test("Ensure function - getFirstDrawData", () => {
    expect(handleGetFirstDrawData().date).toBe("23.03.2012");
  });
});
