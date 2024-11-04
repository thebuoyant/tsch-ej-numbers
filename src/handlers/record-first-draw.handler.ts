import { TRecord } from "../types/record.types";
import { handleRecordMapping } from "../utils/record-mapping.util";
import JsonDataFromCsv from "./../data/data.json";

export function getFirstDrawData(): TRecord {
  const data = handleRecordMapping(JsonDataFromCsv);

  return data[0];
}
