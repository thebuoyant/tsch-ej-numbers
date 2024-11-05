import { describe, test, expect } from "@jest/globals";
import { handleGetAllClassOneData } from "../../handlers/record-class-one.handler";

describe("Ensure record class one handler", () => {
  test("Ensure function - getAllClassOneData", () => {
    expect(handleGetAllClassOneData().length).toBeGreaterThan(0);
  });
});
