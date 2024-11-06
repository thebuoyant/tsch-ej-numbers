import { handleGetAllClassOneData } from "./handlers/record-class-one.handler";
import { handleGetDecadesCount } from "./handlers/record-decades-count.handler";
import { handleGetEuroNumbersCount } from "./handlers/record-euro-numbers-count.handler";
import { handleGetFirstDrawData } from "./handlers/record-first-draw.handler";
import { handleGetLastDrawData } from "./handlers/record-last-draw.handler";
import { handleGetLowHighCount } from "./handlers/record-low-high-count.handler";
import { handleGetMaxJackpot } from "./handlers/record-max-jackpot.handler";
import { handleGetWinningNumbersCount } from "./handlers/record-winning-numbers-count.handler";
import { handleReadJsonData } from "./handlers/record.handler";
import { TDecades } from "./types/decade.types";
import { TEuroNumbersKeyValue } from "./types/euro-numbers-key-value.types";
import { TLowHigh } from "./types/low-high.types";
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

export function getDecadesCount(limit = 0): TDecades {
  return handleGetDecadesCount(limit);
}

export function getLowHighCount(limit = 0): TLowHigh {
  return handleGetLowHighCount(limit);
}
