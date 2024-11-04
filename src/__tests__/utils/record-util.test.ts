import { describe, test, expect } from "@jest/globals";
import {
  euroStringToNumber,
  formatNumberToEuroString,
  formatNumberToString,
} from "../../utils/record.util";

describe("Ensure record util", () => {
  test("Ensure format number to euro string", () => {
    expect(formatNumberToEuroString(0, 2, ",", ".")).toBe("0,00 €");
    expect(formatNumberToEuroString(10, 2, ",", ".")).toBe("10,00 €");
    expect(formatNumberToEuroString(10000, 2, ",", ".")).toBe("10.000,00 €");
    expect(formatNumberToEuroString(10000.99, 2, ",", ".")).toBe("10.000,99 €");
  });

  test("Ensure format a number to string", () => {
    expect(formatNumberToString(10, 2, ",", ".")).toBe("10,00");
    expect(formatNumberToString(10000, 2, ",", ".")).toBe("10.000,00");
    expect(formatNumberToString(10000.99, 2, ",", ".")).toBe("10.000,99");
    expect(formatNumberToString(10, 0, ",", ".")).toBe("10");
    expect(formatNumberToString(10000, 0, ",", ".")).toBe("10.000");
    expect(formatNumberToString(10000.99, 0, ",", ".")).toBe("10.001");
  });

  test("Ensure €-string to number", () => {
    expect(euroStringToNumber("0,00 €")).toBe(0);
    expect(euroStringToNumber("10,99 €")).toBe(10.99);
  });
});
