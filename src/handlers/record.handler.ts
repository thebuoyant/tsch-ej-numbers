import { TRecord } from "../types/record.types";
import { handleRecordMapping } from "../utils/record-mapping.util";
import JsonDataFromCsv from "./../data/data.json";

export function readJsonData(): TRecord[] {
  return handleRecordMapping(JsonDataFromCsv.reverse());
}
