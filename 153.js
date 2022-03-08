// Storing factors of a number in array (LOOP)

let s = [];
PrimeFactors(20, s);
console.log(s);

function PrimeFactors(num, store) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i * j == num) {
        store.push(i, j);
      }
    }
  }
}