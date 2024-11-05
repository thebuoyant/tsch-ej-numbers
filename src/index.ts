import { getAllClassOneData } from "./handlers/record-class-one.handler";
import { getFirstDrawData } from "./handlers/record-first-draw.handler";
import { getLastDrawData } from "./handlers/record-last-draw.handler";
import { getMaxJackpot } from "./handlers/record-max-jackpot.handler";
import { getWinningNumbersCount } from "./handlers/record-winning-numbers-count.handler";
import { readJsonData } from "./handlers/record.handler";
import { TRecord } from "./types/record.types";
import { TWinningNumbersKeyValue } from "./types/winning-numbers-key-value.types";

export function getRecords(limit = 0): TRecord[] {
  return readJsonData(limit);
}

export function getLastDraw(): TRecord {
  return getLastDrawData();
}

export function getFirstDraw(): TRecord {
  return getFirstDrawData();
}

export function getClassOneDraws(limit = 0): TRecord[] {
  return getAllClassOneData(limit);
}

export function getMaxJackpotDraws(limit = 0): TRecord[] {
  return getMaxJackpot(limit);
}

export function getDrawsWinningNumbersCount(
  limit = 0
): TWinningNumbersKeyValue[] {
  return getWinningNumbersCount(limit);
}
