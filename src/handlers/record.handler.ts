import { TRecord } from "../types/record.types";
import { handleRecordMapping } from "../utils/record-mapping.util";
import JsonDataFromCsv from "./../data/data.json";

export function readJsonData(limit = 0): TRecord[] {
  const data = handleRecordMapping(JsonDataFromCsv.reverse());

  if (limit > 0) {
    return data.slice(0, limit);
  }

  return data;
}
