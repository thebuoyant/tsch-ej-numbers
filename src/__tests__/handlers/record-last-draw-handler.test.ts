import { describe, test, expect } from "@jest/globals";
import { getLastDrawData } from "../../handlers/record-last-draw.handler";

describe("Ensure record last draw handler", () => {
  test("Ensure function - getLastDrawData", () => {
    expect(getLastDrawData().date).not.toBe("23.03.2012");
  });
});
