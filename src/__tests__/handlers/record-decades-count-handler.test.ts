import { describe, test, expect } from "@jest/globals";
import { handleGetDecadesCount } from "../../handlers/record-decades-count.handler";

describe("Ensure record decades", () => {
  test("Ensure function - handleGetDecadesCount", () => {
    expect(handleGetDecadesCount().countDecadeOne).toBeGreaterThan(0);
    expect(handleGetDecadesCount().countDecadeTwo).toBeGreaterThan(0);
    expect(handleGetDecadesCount().countDecadeThree).toBeGreaterThan(0);
    expect(handleGetDecadesCount().countDecadeFour).toBeGreaterThan(0);
    expect(handleGetDecadesCount().countDecadeFive).toBeGreaterThan(0);
  });
});
