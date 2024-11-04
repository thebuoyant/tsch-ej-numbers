import { describe, test, expect } from "@jest/globals";
import { getAllClassOneData } from "../../handlers/record-class-one.handler";

describe("Ensure record class one handler", () => {
  test("Ensure function - getAllClassOneData", () => {
    expect(getAllClassOneData().length).toBeGreaterThan(0);
  });
});
