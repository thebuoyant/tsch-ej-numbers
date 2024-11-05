import { getRecords } from "..";
import { TRecord } from "../types/record.types";

export function handleGetMaxJackpot(limit = 0): TRecord[] {
  const data = getRecords(limit);

  const maxJackpotDataFilter = data.filter((item: TRecord) => {
    return item.countCl1 > 0 && item.quotaCl1 === 120000000;
  });

  return maxJackpotDataFilter;
}
