import { getRecords } from "..";
import { TDecades } from "../types/decade.types";
import { TRecord } from "../types/record.types";

export function handleGetDecadesCount(limit = 0): TDecades {
  const data = getRecords(limit);

  let countDecadeOne = 0;
  let countDecadeTwo = 0;
  let countDecadeThree = 0;
  let countDecadeFour = 0;
  let countDecadeFive = 0;

  data.forEach((item: TRecord) => {
    // decade 1 (1 - 10)
    if (
      (item.wn1 > 0 && item.wn1 <= 10) ||
      (item.wn2 > 0 && item.wn2 <= 10) ||
      (item.wn3 > 0 && item.wn3 <= 10) ||
      (item.wn4 > 0 && item.wn4 <= 10) ||
      (item.wn5 > 0 && item.wn5 <= 10)
    ) {
      countDecadeOne += 1;
    }
    // decade 2 (11 - 20)
    if (
      (item.wn1 > 10 && item.wn1 <= 20) ||
      (item.wn2 > 10 && item.wn2 <= 20) ||
      (item.wn3 > 10 && item.wn3 <= 20) ||
      (item.wn4 > 10 && item.wn4 <= 20) ||
      (item.wn5 > 10 && item.wn5 <= 20)
    ) {
      countDecadeTwo += 1;
    }
    // decade 3 (21 - 30)
    if (
      (item.wn1 > 20 && item.wn1 <= 30) ||
      (item.wn2 > 20 && item.wn2 <= 30) ||
      (item.wn3 > 20 && item.wn3 <= 30) ||
      (item.wn4 > 20 && item.wn4 <= 30) ||
      (item.wn5 > 20 && item.wn5 <= 30)
    ) {
      countDecadeThree += 1;
    }
    // decade 4 (31 - 40)
    if (
      (item.wn1 > 30 && item.wn1 <= 40) ||
      (item.wn2 > 30 && item.wn2 <= 40) ||
      (item.wn3 > 30 && item.wn3 <= 40) ||
      (item.wn4 > 30 && item.wn4 <= 40) ||
      (item.wn5 > 30 && item.wn5 <= 40)
    ) {
      countDecadeFour += 1;
    }
    // decade 5 (51 - 50)
    if (
      (item.wn1 > 40 && item.wn1 <= 50) ||
      (item.wn2 > 40 && item.wn2 <= 50) ||
      (item.wn3 > 40 && item.wn3 <= 50) ||
      (item.wn4 > 40 && item.wn4 <= 50) ||
      (item.wn5 > 40 && item.wn5 <= 50)
    ) {
      countDecadeFive += 1;
    }
  });

  return {
    countDecadeOne,
    countDecadeTwo,
    countDecadeThree,
    countDecadeFour,
    countDecadeFive,
  };
}
