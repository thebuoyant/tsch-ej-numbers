import { getRecords } from "..";
import { TRecord } from "../types/record.types";

export function handleGetLastDrawData(): TRecord {
  const data = getRecords();

  return data[0];
}
