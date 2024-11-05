import { getRecords } from "..";
import { TRecord } from "../types/record.types";

export function getAllClassOneData(limit = 0): TRecord[] {
  const data = getRecords(limit);

  const classOneDataFilter = data.filter((item: TRecord) => {
    return item.countCl1 > 0;
  });

  return classOneDataFilter;
}
