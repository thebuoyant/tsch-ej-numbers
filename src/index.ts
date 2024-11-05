import { handleGetAllClassOneData } from "./handlers/record-class-one.handler";
import { handleGetEuroNumbersCount } from "./handlers/record-euro-numbers-count.handler";
import { handleGetFirstDrawData } from "./handlers/record-first-draw.handler";
import { handleGetLastDrawData } from "./handlers/record-last-draw.handler";
import { handleGetMaxJackpot } from "./handlers/record-max-jackpot.handler";
import { handleGetWinningNumbersCount } from "./handlers/record-winning-numbers-count.handler";
import { handleReadJsonData } from "./handlers/record.handler";
import { TEuroNumbersKeyValue } from "./types/euro-numbers-key-value.types";
import { TRecord } from "./types/record.types";
import { TWinningNumbersKeyValue } from "./types/winning-numbers-key-value.types";

export function getRecords(limit = 0): TRecord[] {
  return handleReadJsonData(limit);
}

export function getLastDraw(): TRecord {
  return handleGetLastDrawData();
}

export function getFirstDraw(): TRecord {
  return handleGetFirstDrawData();
}

export function getClassOneDraws(limit = 0): TRecord[] {
  return handleGetAllClassOneData(limit);
}

export function getMaxJackpotDraws(limit = 0): TRecord[] {
  return handleGetMaxJackpot(limit);
}

export function getWinningNumbersCount(limit = 0): TWinningNumbersKeyValue[] {
  return handleGetWinningNumbersCount(limit);
}

export function getEuroNumbersCount(limit = 0): TEuroNumbersKeyValue[] {
  return handleGetEuroNumbersCount(limit);
}
