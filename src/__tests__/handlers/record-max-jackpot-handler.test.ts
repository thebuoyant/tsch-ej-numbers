import { describe, test, expect } from "@jest/globals";
import { handleGetMaxJackpot } from "../../handlers/record-max-jackpot.handler";

describe("Ensure record max jackpot handler", () => {
  test("Ensure function - getMaxJackpot", () => {
    expect(handleGetMaxJackpot().length).toBeGreaterThan(0);
  });
});
