# tsch-ej-numbers

### Version: 1.0.20241105

# Abstract

This is an API for the EuroJackpot draws.

https://en.wikipedia.org/wiki/Eurojackpot

<hr/>

### There is no guarantee that the data collected is correct or that the API methods are correct.

<hr/>

# Installation

npm install --save tsch-ej-numbers

<hr/>
<br/>

### Record Type (TRecord)

```
export type TRecord = {
  date: string;
  wn1: number;
  wn2: number;
  wn3: number;
  wn4: number;
  wn5: number;
  en1: number;
  en2: number;
  stake: number;
  countCl1: number;
  quotaCl1: number;
  countCl2: number;
  quotaCl2: number;
  countCl3: number;
  quotaCl3: number;
  countCl4: number;
  quotaCl4: number;
  countCl5: number;
  quotaCl5: number;
  countCl6: number;
  quotaCl6: number;
  countCl7: number;
  quotaCl7: number;
  countCl8: number;
  quotaCl8: number;
  countCl9: number;
  quotaCl9: number;
  countCl10: number;
  quotaCl10: number;
  countCl11: number;
  quotaCl11: number;
  countCl12: number;
  quotaCl12: number;
  day: string;
};
```

<hr/>

# API

| Function               | Version |
| ---------------------- | ------- |
| getRecords             | 1.0.x   |
| getLastDraw            | 1.0.x   |
| getFirstDraw           | 1.0.x   |
| getClassOneDraws       | 1.0.x   |
| getMaxJackpotDraws     | 1.0.x   |
| getWinningNumbersCount | 1.0.x   |
| getEuroNumbersCount    | 1.0.x   |
| getDecadesCount        | 1.0.x   |
| getLowHighCount        | 1.0.x   |

<hr/>

## API-Details

### getRecords(limit)

Returns all records of available draws.

- limit
  - optional
  - number of last records
- return type: TRecord[]

Code:

```
import { getRecords } from "tsch-ej-numbers";

console.log(getRecords()); // all records
console.log(getRecords(0)); // all records
console.log(getRecords(10)); // last 10 records
```

<hr/>

### getLastDraw()

Returns the last current record.

- return type: TRecord

Code:

```
import { getLastDraw } from "tsch-ej-numbers";

console.log(getLastDraw());
```

<hr/>

### getFirstDraw()

Returns the first record.

- return type: TRecord

Code:

```
import { getFirstDraw } from "tsch-ej-numbers";

console.log(getFirstDraw());
```

<hr/>

### getClassOneDraws(limit)

Returns all records with success in class one.

- limit
  - optional
  - number of last records
- return type: TRecord[]

Code:

```
import { getClassOneDraws } from "tsch-ej-numbers";

console.log(getClassOneDraws(100));
```

<hr/>

### getMaxJackpotDraws(limit)

Returns all records with success in class one and a quota of 120.000.000,00 €.

- limit
  - optional
  - number of last records
- return type: TRecord[]

Code:

```
import { getMaxJackpotDraws } from "tsch-ej-numbers";

console.log(getMaxJackpotDraws());
console.log(getMaxJackpotDraws(0));
console.log(getMaxJackpotDraws(100));
```

<hr/>

### getWinningNumbersCount(limit)

Returns a key / value array for all winning numbers.

- limit
  - optional
  - number of last records
- return type: TWinningNumbersKeyValue[]

Code:

```
import { getWinningNumbersCount } from "tsch-ej-numbers";

console.log(getWinningNumbersCount());
console.log(getWinningNumbersCount(0));
console.log(getWinningNumbersCount(100));
```

<hr/>

### getEuroNumbersCount(limit)

Returns a key / value array for all euro numbers.

- limit
  - optional
  - number of last records
- return type: TEuroNumbersKeyValue[]

Code:

```
import { getEuroNumbersCount } from "tsch-ej-numbers";

console.log(getEuroNumbersCount());
console.log(getEuroNumbersCount(0));
console.log(getEuroNumbersCount(100));
```

<hr/>

### getDecadesCount(limit)

Returns an object for decades with according count.

- countDecadeOne (winning numbers 1 - 10)
- countDecadeTwo (winning numbers 11 - 20)
- countDecadeThree (winning numbers 21 - 30)
- countDecadeFour (winning numbers 31 - 40)
- countDecadeFive (winning numbers 41 - 50)

* limit
  - optional
  - number of last records
* return type: TDecades

Code:

```
import { getDecadesCount } from "tsch-ej-numbers";

console.log(getDecadesCount());
console.log(getDecadesCount(0));
console.log(getDecadesCount(100));
```

<hr/>

### getLowHighCount(limit)

Returns an object for low and high sections with according count.

- countLow (winning numbers 1 - 25)
- countHigh (winning numbers 26 - 50)

* limit
  - optional
  - number of last records
* return type: TLowHigh

Code:

```
import { getLowHighCount } from "tsch-ej-numbers";

console.log(getLowHighCount());
console.log(getLowHighCount(0));
console.log(getLowHighCount(100));
```

<hr/>
