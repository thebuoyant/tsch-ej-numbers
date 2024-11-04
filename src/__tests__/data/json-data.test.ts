import { describe, test, expect } from "@jest/globals";
import JsonDataFromCsv from "./../../data/data.json";
import { euroStringToNumber, stringToNumber } from "../../utils/record.util";

describe("Ensure JSON data", () => {
  const data = JsonDataFromCsv;

  test("Ensure data object", () => {
    expect(data).toBeDefined();
  });

  test("Ensure JSON item: datum", () => {
    data.forEach((jsonItem) => {
      const allowedYears = [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
      ];

      expect(typeof jsonItem.datum).toBe("string");
      expect(jsonItem.datum.length).toBe(10);
      expect(jsonItem.datum.substring(2, 3)).toBe(".");
      expect(jsonItem.datum.substring(5, 6)).toBe(".");
      expect(allowedYears).toContain(jsonItem.datum.substring(6, 10));
    });
  });

  test("Ensure JSON item: nummer1", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.nummer1).toBe("string");
      expect(Number(jsonItem.nummer1)).toBeGreaterThanOrEqual(1);
      expect(Number(jsonItem.nummer1)).toBeLessThanOrEqual(50);
    });
  });

  test("Ensure JSON item: nummer2", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.nummer2).toBe("string");
      expect(Number(jsonItem.nummer2)).toBeGreaterThanOrEqual(1);
      expect(Number(jsonItem.nummer2)).toBeLessThanOrEqual(50);
    });
  });

  test("Ensure JSON item: nummer3", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.nummer3).toBe("string");
      expect(Number(jsonItem.nummer3)).toBeGreaterThanOrEqual(1);
      expect(Number(jsonItem.nummer3)).toBeLessThanOrEqual(50);
    });
  });

  test("Ensure JSON item: nummer4", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.nummer4).toBe("string");
      expect(Number(jsonItem.nummer4)).toBeGreaterThanOrEqual(1);
      expect(Number(jsonItem.nummer4)).toBeLessThanOrEqual(50);
    });
  });

  test("Ensure JSON item: nummer5", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.nummer5).toBe("string");
      expect(Number(jsonItem.nummer5)).toBeGreaterThanOrEqual(1);
      expect(Number(jsonItem.nummer5)).toBeLessThanOrEqual(50);
    });
  });

  test("Ensure JSON item: zz1", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.zz1).toBe("string");
      expect(Number(jsonItem.zz1)).toBeGreaterThanOrEqual(1);
      expect(Number(jsonItem.zz1)).toBeLessThanOrEqual(12);
    });
  });

  test("Ensure JSON item: zz2", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.zz2).toBe("string");
      expect(Number(jsonItem.zz2)).toBeGreaterThanOrEqual(1);
      expect(Number(jsonItem.zz2)).toBeLessThanOrEqual(12);
    });
  });

  test("Ensure JSON item: spielEinsatz", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.spielEinsatz).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.spielEinsatz)).toBe("number");
      expect(jsonItem.spielEinsatz).toContain(",00 €");
      expect(jsonItem.spielEinsatz).toContain(".");
      expect(euroStringToNumber(jsonItem.spielEinsatz)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse1", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse1).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse1)).toBe("number");
      expect(euroStringToNumber(jsonItem.anzahlKlasse1)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: quoteKlasse1", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse1).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse1)).toBe("number");
      expect(jsonItem.quoteKlasse1).toContain(" €");
      expect(jsonItem.quoteKlasse1).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse1)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse2", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse2).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse2)).toBe("number");
      expect(euroStringToNumber(jsonItem.anzahlKlasse2)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: quoteKlasse2", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse2).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse2)).toBe("number");
      expect(jsonItem.quoteKlasse2).toContain(" €");
      expect(jsonItem.quoteKlasse2).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse2)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse3", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse3).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse3)).toBe("number");
      expect(euroStringToNumber(jsonItem.anzahlKlasse3)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: quoteKlasse3", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse3).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse3)).toBe("number");
      expect(jsonItem.quoteKlasse3).toContain(" €");
      expect(jsonItem.quoteKlasse3).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse3)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse4", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse4).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse4)).toBe("number");
      expect(euroStringToNumber(jsonItem.anzahlKlasse4)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: quoteKlasse4", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse4).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse4)).toBe("number");
      expect(jsonItem.quoteKlasse4).toContain(" €");
      expect(jsonItem.quoteKlasse4).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse4)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse5", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse5).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse5)).toBe("number");
      expect(euroStringToNumber(jsonItem.anzahlKlasse5)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: quoteKlasse5", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse5).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse5)).toBe("number");
      expect(jsonItem.quoteKlasse5).toContain(" €");
      expect(jsonItem.quoteKlasse5).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse5)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse6", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse6).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse6)).toBe("number");
      expect(euroStringToNumber(jsonItem.anzahlKlasse6)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: quoteKlasse6", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse6).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse6)).toBe("number");
      expect(jsonItem.quoteKlasse6).toContain(" €");
      expect(jsonItem.quoteKlasse6).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse6)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse7", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse7).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse7)).toBe("number");
      expect(euroStringToNumber(jsonItem.anzahlKlasse7)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: quoteKlasse7", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse7).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse7)).toBe("number");
      expect(jsonItem.quoteKlasse7).toContain(" €");
      expect(jsonItem.quoteKlasse7).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse7)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse8", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse8).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse8)).toBe("number");
      expect(euroStringToNumber(jsonItem.anzahlKlasse8)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: quoteKlasse8", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse8).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse8)).toBe("number");
      expect(jsonItem.quoteKlasse8).toContain(" €");
      expect(jsonItem.quoteKlasse8).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse8)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse9", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse9).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse9)).toBe("number");
      expect(euroStringToNumber(jsonItem.anzahlKlasse9)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: quoteKlasse9", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse9).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse9)).toBe("number");
      expect(jsonItem.quoteKlasse9).toContain(" €");
      expect(jsonItem.quoteKlasse9).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse9)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse10", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse10).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse10)).toBe("number");
      expect(
        euroStringToNumber(jsonItem.anzahlKlasse10)
      ).toBeGreaterThanOrEqual(0);
    });
  });

  test("Ensure JSON item: quoteKlasse10", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse10).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse10)).toBe("number");
      expect(jsonItem.quoteKlasse10).toContain(" €");
      expect(jsonItem.quoteKlasse10).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse10)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse11", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse11).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse11)).toBe("number");
      expect(
        euroStringToNumber(jsonItem.anzahlKlasse11)
      ).toBeGreaterThanOrEqual(0);
    });
  });

  test("Ensure JSON item: quoteKlasse11", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse11).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse11)).toBe("number");
      expect(jsonItem.quoteKlasse11).toContain(" €");
      expect(jsonItem.quoteKlasse11).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse11)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: anzahlKlasse12", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.anzahlKlasse12).toBe("string");
      expect(typeof stringToNumber(jsonItem.anzahlKlasse12)).toBe("number");
      expect(
        euroStringToNumber(jsonItem.anzahlKlasse12)
      ).toBeGreaterThanOrEqual(0);
    });
  });

  test("Ensure JSON item: quoteKlasse12", () => {
    data.forEach((jsonItem) => {
      expect(typeof jsonItem.quoteKlasse12).toBe("string");
      expect(typeof euroStringToNumber(jsonItem.quoteKlasse12)).toBe("number");
      expect(jsonItem.quoteKlasse12).toContain(" €");
      expect(jsonItem.quoteKlasse12).toContain(",");
      expect(euroStringToNumber(jsonItem.quoteKlasse12)).toBeGreaterThanOrEqual(
        0
      );
    });
  });

  test("Ensure JSON item: tag", () => {
    data.forEach((jsonItem) => {
      const allowedDays = ["Fr", "Di"];

      expect(typeof jsonItem.tag).toBe("string");
      expect(jsonItem.tag.length).toBe(2);
      expect(allowedDays).toContain(jsonItem.tag);
    });
  });
});
