import { TRecord } from "../types/record.types";
import { handleRecordMapping } from "../utils/record-mapping.util";
import JsonDataFromCsv from "./../data/data.json";

export function getAllClassOneData(): TRecord[] {
  const data = handleRecordMapping(JsonDataFromCsv.reverse());

  const classOneDataFilter = data.filter((item: TRecord) => {
    return item.countCl1 > 0;
  });

  return classOneDataFilter;
}
