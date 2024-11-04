import { sortBy } from "lodash";
import { TJsonRecord } from "../types/json-record.types";
import { TRecord } from "../types/record.types";
import { euroStringToNumber, stringToNumber } from "./record.util";

export function handleRecordMapping(
  jsonData: TJsonRecord[],
  limit = 0
): TRecord[] {
  return jsonData.map((item: TJsonRecord): TRecord => {
    const winningMumbers = [
      Number(item.nummer1),
      Number(item.nummer2),
      Number(item.nummer3),
      Number(item.nummer4),
      Number(item.nummer5),
    ];
    const sortedWinningNumbers = sortBy(winningMumbers);
    const euroMumbers = [Number(item.zz1), Number(item.zz2)];
    const sortedEuroNumbers = sortBy(euroMumbers);

    return {
      date: item.datum,
      wn1: sortedWinningNumbers[0],
      wn2: sortedWinningNumbers[1],
      wn3: sortedWinningNumbers[2],
      wn4: sortedWinningNumbers[3],
      wn5: sortedWinningNumbers[4],
      en1: sortedEuroNumbers[0],
      en2: sortedEuroNumbers[1],
      stake: euroStringToNumber(item.spielEinsatz),
      countCl1: stringToNumber(item.anzahlKlasse1),
      quotaCl1: euroStringToNumber(item.quoteKlasse1),
      countCl2: stringToNumber(item.anzahlKlasse2),
      quotaCl2: euroStringToNumber(item.quoteKlasse2),
      countCl3: stringToNumber(item.anzahlKlasse3),
      quotaCl3: euroStringToNumber(item.quoteKlasse3),
      countCl4: stringToNumber(item.anzahlKlasse4),
      quotaCl4: euroStringToNumber(item.quoteKlasse4),
      countCl5: stringToNumber(item.anzahlKlasse5),
      quotaCl5: euroStringToNumber(item.quoteKlasse5),
      countCl6: stringToNumber(item.anzahlKlasse6),
      quotaCl6: euroStringToNumber(item.quoteKlasse6),
      countCl7: stringToNumber(item.anzahlKlasse7),
      quotaCl7: euroStringToNumber(item.quoteKlasse7),
      countCl8: stringToNumber(item.anzahlKlasse8),
      quotaCl8: euroStringToNumber(item.quoteKlasse8),
      countCl9: stringToNumber(item.anzahlKlasse9),
      quotaCl9: euroStringToNumber(item.quoteKlasse9),
      countCl10: stringToNumber(item.anzahlKlasse10),
      quotaCl10: euroStringToNumber(item.quoteKlasse10),
      countCl11: stringToNumber(item.anzahlKlasse11),
      quotaCl11: euroStringToNumber(item.quoteKlasse11),
      countCl12: stringToNumber(item.anzahlKlasse12),
      quotaCl12: euroStringToNumber(item.quoteKlasse12),
      day: item.tag === "Di" ? "Tu" : "Fr",
    };
  });
}
