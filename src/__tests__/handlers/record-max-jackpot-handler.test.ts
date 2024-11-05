import { describe, test, expect } from "@jest/globals";
import { getMaxJackpot } from "../../handlers/record-max-jackpot.handler";

describe("Ensure record max jackpot handler", () => {
  test("Ensure function - getMaxJackpot", () => {
    expect(getMaxJackpot().length).toBeGreaterThan(0);
  });
});
