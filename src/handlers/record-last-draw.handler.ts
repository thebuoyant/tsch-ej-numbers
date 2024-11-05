import { getRecords } from "..";
import { TRecord } from "../types/record.types";

export function getLastDrawData(): TRecord {
  const data = getRecords();

  return data[0];
}
