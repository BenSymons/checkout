# checkout

This kata is about the game darts. In darts, you thow three darts at a dart board which you score you points depending on where the dart lands. You can score a single, 1 to 20, a double, which are those same numbers but you get double the points, or a triple which are those same numbers but tripled. There is also the outer ring in the middle which scores 25 and the bullseye.

For this kata you will be writing code for a function called `checkout`. This function will take one param which will be an array of strings. Each string will represent a score for a single dart. The checkout function should return the total score of those three darts. If given an empty array, this will represent three misses and so shoulc return 0.

---

The strings representing each score will be as followed:

```
'1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20'
'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12', 'T13', 'T14', 'T15', 'T16', 'T17', 'T18', 'T19', 'T20'
'ring', 'bullseye';
```

the number by itself will score just that e.g. `checkout('5', '4')` should return `9`. The number prefixed with a 'D' means it would be a double so would score double the number e.g. `checkout(['D10'])` should return `20`. The number prefixed with 'T' means it would be a triple so the score would be tripled e.g. `checkout(['T15'])` should return `45`. The outer ring `'ring'` will score 25 and the `'bullseye'` will score 50.

---

## Instructions

write your code in the index.ts file. There have been some types already provided. Feel free to alter these or create new types. When you want to test your function, run `npm test`. This will compile your tests and run jest at the same time. Do not alter the index.js file generated as your code will be overwritten.