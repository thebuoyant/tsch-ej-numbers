import { TRecord } from "../types/record.types";
import { TWinningNumbersKeyValue } from "../types/winning-numbers-key-value.types";

export function countWinningNumbersKeyValue(
  data = [] as TRecord[]
): TWinningNumbersKeyValue[] {
  return [
    {
      key: "1",
      value: countWinningNumberFromData(data, 1),
    },
    {
      key: "2",
      value: countWinningNumberFromData(data, 2),
    },
    {
      key: "3",
      value: countWinningNumberFromData(data, 3),
    },
    {
      key: "4",
      value: countWinningNumberFromData(data, 4),
    },
    {
      key: "5",
      value: countWinningNumberFromData(data, 5),
    },
    {
      key: "6",
      value: countWinningNumberFromData(data, 6),
    },
    {
      key: "7",
      value: countWinningNumberFromData(data, 7),
    },
    {
      key: "8",
      value: countWinningNumberFromData(data, 8),
    },
    {
      key: "9",
      value: countWinningNumberFromData(data, 9),
    },
    {
      key: "10",
      value: countWinningNumberFromData(data, 10),
    },
    {
      key: "11",
      value: countWinningNumberFromData(data, 11),
    },
    {
      key: "12",
      value: countWinningNumberFromData(data, 12),
    },
    {
      key: "13",
      value: countWinningNumberFromData(data, 13),
    },
    {
      key: "14",
      value: countWinningNumberFromData(data, 14),
    },
    {
      key: "15",
      value: countWinningNumberFromData(data, 15),
    },
    {
      key: "16",
      value: countWinningNumberFromData(data, 16),
    },
    {
      key: "17",
      value: countWinningNumberFromData(data, 17),
    },
    {
      key: "18",
      value: countWinningNumberFromData(data, 18),
    },
    {
      key: "19",
      value: countWinningNumberFromData(data, 19),
    },
    {
      key: "20",
      value: countWinningNumberFromData(data, 20),
    },
    {
      key: "21",
      value: countWinningNumberFromData(data, 21),
    },
    {
      key: "22",
      value: countWinningNumberFromData(data, 22),
    },
    {
      key: "23",
      value: countWinningNumberFromData(data, 23),
    },
    {
      key: "24",
      value: countWinningNumberFromData(data, 24),
    },
    {
      key: "25",
      value: countWinningNumberFromData(data, 25),
    },
    {
      key: "26",
      value: countWinningNumberFromData(data, 26),
    },
    {
      key: "27",
      value: countWinningNumberFromData(data, 27),
    },
    {
      key: "28",
      value: countWinningNumberFromData(data, 28),
    },
    {
      key: "29",
      value: countWinningNumberFromData(data, 29),
    },
    {
      key: "30",
      value: countWinningNumberFromData(data, 30),
    },
    {
      key: "31",
      value: countWinningNumberFromData(data, 31),
    },
    {
      key: "32",
      value: countWinningNumberFromData(data, 32),
    },
    {
      key: "33",
      value: countWinningNumberFromData(data, 33),
    },
    {
      key: "34",
      value: countWinningNumberFromData(data, 34),
    },
    {
      key: "35",
      value: countWinningNumberFromData(data, 35),
    },
    {
      key: "36",
      value: countWinningNumberFromData(data, 36),
    },
    {
      key: "37",
      value: countWinningNumberFromData(data, 37),
    },
    {
      key: "38",
      value: countWinningNumberFromData(data, 38),
    },
    {
      key: "39",
      value: countWinningNumberFromData(data, 39),
    },
    {
      key: "40",
      value: countWinningNumberFromData(data, 40),
    },
    {
      key: "41",
      value: countWinningNumberFromData(data, 41),
    },
    {
      key: "42",
      value: countWinningNumberFromData(data, 42),
    },
    {
      key: "43",
      value: countWinningNumberFromData(data, 43),
    },
    {
      key: "44",
      value: countWinningNumberFromData(data, 44),
    },
    {
      key: "45",
      value: countWinningNumberFromData(data, 45),
    },
    {
      key: "46",
      value: countWinningNumberFromData(data, 46),
    },
    {
      key: "47",
      value: countWinningNumberFromData(data, 47),
    },
    {
      key: "48",
      value: countWinningNumberFromData(data, 48),
    },
    {
      key: "49",
      value: countWinningNumberFromData(data, 49),
    },
    {
      key: "50",
      value: countWinningNumberFromData(data, 50),
    },
  ];
}

function countWinningNumberFromData(
  data = [] as TRecord[],
  winningNumber: number
): number {
  let count = 0;

  data.forEach((item) => {
    if (
      item.wn1 === winningNumber ||
      item.wn2 === winningNumber ||
      item.wn3 === winningNumber ||
      item.wn4 === winningNumber ||
      item.wn5 === winningNumber
    ) {
      count += 1;
    }
  });

  return count;
}
