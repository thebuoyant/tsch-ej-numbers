import { getRecords } from "..";
import { TEuroNumbersKeyValue } from "../types/euro-numbers-key-value.types";
import { countEuroNumbersKeyValue } from "../utils/euro-numbers-count.util";

export function getEuroNumbersCount(limit = 0): TEuroNumbersKeyValue[] {
  const data = getRecords(limit);

  return countEuroNumbersKeyValue(data);
}
