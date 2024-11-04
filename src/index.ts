import { readJsonData } from "./handlers/record.handler";
import { TRecord } from "./types/record.types";

export function getRecords(limit = 0): TRecord[] {
  return readJsonData(limit);
}
