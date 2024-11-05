import { getRecords } from "..";
import { TWinningNumbersKeyValue } from "../types/winning-numbers-key-value.types";
import { countWinningNumbersKeyValue } from "../utils/winning-numbers-count.util";

export function getWinningNumbersCount(limit = 0): TWinningNumbersKeyValue[] {
  const data = getRecords(limit);

  return countWinningNumbersKeyValue(data);
}
