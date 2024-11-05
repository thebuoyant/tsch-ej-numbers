import { getRecords } from "..";
import { TRecord } from "../types/record.types";

export function getFirstDrawData(): TRecord {
  const data = getRecords().reverse();

  return data[0];
}
