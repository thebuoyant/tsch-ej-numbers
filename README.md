# tsch-ej-numbers

# Abstract

This is an API for the EuroJackpot draws.

https://en.wikipedia.org/wiki/Eurojackpot

<hr/>
Last Draw: 01.11.2024
<hr/>

# Important

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
