import { TEuroNumbersKeyValue } from "../types/euro-numbers-key-value.types";
import { TRecord } from "../types/record.types";

export function countEuroNumbersKeyValue(
  data = [] as TRecord[]
): TEuroNumbersKeyValue[] {
  return [
    {
      key: "1",
      value: countEuroNumberFromData(data, 1),
    },
    {
      key: "2",
      value: countEuroNumberFromData(data, 2),
    },
    {
      key: "3",
      value: countEuroNumberFromData(data, 3),
    },
    {
      key: "4",
      value: countEuroNumberFromData(data, 4),
    },
    {
      key: "5",
      value: countEuroNumberFromData(data, 5),
    },
    {
      key: "6",
      value: countEuroNumberFromData(data, 6),
    },
    {
      key: "7",
      value: countEuroNumberFromData(data, 7),
    },
    {
      key: "8",
      value: countEuroNumberFromData(data, 8),
    },
    {
      key: "9",
      value: countEuroNumberFromData(data, 9),
    },
    {
      key: "10",
      value: countEuroNumberFromData(data, 10),
    },
    {
      key: "11",
      value: countEuroNumberFromData(data, 11),
    },
    {
      key: "12",
      value: countEuroNumberFromData(data, 12),
    },
  ];
}

function countEuroNumberFromData(
  data = [] as TRecord[],
  euroNumber: number
): number {
  let count = 0;

  data.forEach((item) => {
    if (item.en1 === euroNumber || item.en2 === euroNumber) {
      count += 1;
    }
  });

  return count;
}
