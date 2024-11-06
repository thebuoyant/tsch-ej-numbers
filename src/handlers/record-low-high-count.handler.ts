import { getRecords } from "..";
import { TLowHigh } from "../types/low-high.types";
import { TRecord } from "../types/record.types";

export function handleGetLowHighCount(limit = 0): TLowHigh {
  const data = getRecords(limit);

  let countLow = 0;
  let countHigh = 0;

  data.forEach((item: TRecord) => {
    // low 1 (1 - 25)
    if (
      (item.wn1 > 0 && item.wn1 <= 25) ||
      (item.wn2 > 0 && item.wn2 <= 25) ||
      (item.wn3 > 0 && item.wn3 <= 25) ||
      (item.wn4 > 0 && item.wn4 <= 25) ||
      (item.wn5 > 0 && item.wn5 <= 25)
    ) {
      countLow += 1;
    }
    // high 2 (26 - 50)
    if (
      (item.wn1 > 25 && item.wn1 <= 50) ||
      (item.wn2 > 25 && item.wn2 <= 50) ||
      (item.wn3 > 25 && item.wn3 <= 50) ||
      (item.wn4 > 25 && item.wn4 <= 50) ||
      (item.wn5 > 25 && item.wn5 <= 50)
    ) {
      countHigh += 1;
    }
  });

  return {
    countLow,
    countHigh,
  };
}
