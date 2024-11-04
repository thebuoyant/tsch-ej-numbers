import { TRecord } from "../types/record.types";
import { handleRecordMapping } from "../utils/record-mapping.util";
import JsonDataFromCsv from "./../data/data.json";

export function getLastDrawData(): TRecord {
  const data = handleRecordMapping(JsonDataFromCsv.reverse());

  return data[0];
}
