import { describe, test, expect } from "@jest/globals";
import { handleGetWinningNumbersCount } from "../../handlers/record-winning-numbers-count.handler";
import { countWinningNumbersKeyValue } from "../../utils/winning-numbers-count.util";
import { RecordMockDataSet } from "../../__mock__/_record-data.mock";

describe("Ensure record winning numbers count", () => {
  test("Ensure function - handleGetWinningNumbersCount", () => {
    expect(handleGetWinningNumbersCount().length).toBe(50);
  });

  test("Ensure function - countWinningNumbersKeyValue", () => {
    const data = RecordMockDataSet;
    expect(countWinningNumbersKeyValue(data)).toStrictEqual([
      {
        key: "1",
        value: 1,
      },
      {
        key: "2",
        value: 1,
      },
      {
        key: "3",
        value: 1,
      },
      {
        key: "4",
        value: 0,
      },
      {
        key: "5",
        value: 1,
      },
      {
        key: "6",
        value: 2,
      },
      {
        key: "7",
        value: 2,
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
        value: 1,
      },
      {
        key: "11",
        value: 2,
      },
      {
        key: "12",
        value: 1,
      },
      {
        key: "13",
        value: 0,
      },
      {
        key: "14",
        value: 2,
      },
      {
        key: "15",
        value: 0,
      },
      {
        key: "16",
        value: 2,
      },
      {
        key: "17",
        value: 2,
      },
      {
        key: "18",
        value: 0,
      },
      {
        key: "19",
        value: 1,
      },
      {
        key: "20",
        value: 1,
      },
      {
        key: "21",
        value: 1,
      },
      {
        key: "22",
        value: 0,
      },
      {
        key: "23",
        value: 2,
      },
      {
        key: "24",
        value: 0,
      },
      {
        key: "25",
        value: 1,
      },
      {
        key: "26",
        value: 1,
      },
      {
        key: "27",
        value: 3,
      },
      {
        key: "28",
        value: 1,
      },
      {
        key: "29",
        value: 3,
      },
      {
        key: "30",
        value: 1,
      },
      {
        key: "31",
        value: 1,
      },
      {
        key: "32",
        value: 2,
      },
      {
        key: "33",
        value: 0,
      },
      {
        key: "34",
        value: 1,
      },
      {
        key: "35",
        value: 3,
      },
      {
        key: "36",
        value: 3,
      },
      {
        key: "37",
        value: 2,
      },
      {
        key: "38",
        value: 3,
      },
      {
        key: "39",
        value: 0,
      },
      {
        key: "40",
        value: 2,
      },
      {
        key: "41",
        value: 1,
      },
      {
        key: "42",
        value: 1,
      },
      {
        key: "43",
        value: 2,
      },
      {
        key: "44",
        value: 1,
      },
      {
        key: "45",
        value: 3,
      },
      {
        key: "46",
        value: 1,
      },
      {
        key: "47",
        value: 1,
      },
      {
        key: "48",
        value: 2,
      },
      {
        key: "49",
        value: 1,
      },
      {
        key: "50",
        value: 1,
      },
    ]);
  });
});
