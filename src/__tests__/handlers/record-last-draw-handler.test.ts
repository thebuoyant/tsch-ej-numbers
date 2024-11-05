import { describe, test, expect } from "@jest/globals";
import { handleGetLastDrawData } from "../../handlers/record-last-draw.handler";

describe("Ensure record last draw handler", () => {
  test("Ensure function - getLastDrawData", () => {
    expect(handleGetLastDrawData().date).not.toBe("23.03.2012");
  });
});
