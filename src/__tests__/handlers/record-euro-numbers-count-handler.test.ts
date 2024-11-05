import { describe, test, expect } from "@jest/globals";
import { countEuroNumbersKeyValue } from "../../utils/euro-numbers-count.util";
import { RecordMockDataSet } from "../../__mock__/_record-data.mock";
import { getEuroNumbersCount } from "../../handlers/record-euro-numbers-count.handler";

describe("Ensure record euro numbers count", () => {
  test("Ensure function - getEuroNumbersCount", () => {
    expect(getEuroNumbersCount().length).toBe(12);
  });

  test("Ensure function - countEuroNumbersKeyValue", () => {
    const data = RecordMockDataSet;
    expect(countEuroNumbersKeyValue(data)).toStrictEqual([
      {
        key: "1",
        value: 2,
      },
      {
        key: "2",
        value: 1,
      },
      {
        key: "3",
        value: 3,
      },
      {
        key: "4",
        value: 4,
      },
      {
        key: "5",
        value: 6,
      },
      {
        key: "6",
        value: 5,
      },
      {
        key: "7",
        value: 1,
      },
      {
        key: "8",
        value: 1,
      },
      {
        key: "9",
        value: 0,
      },
      {
        key: "10",
        value: 2,
      },
      {
        key: "11",
        value: 1,
      },
      {
        key: "12",
        value: 0,
      },
    ]);
  });
});
