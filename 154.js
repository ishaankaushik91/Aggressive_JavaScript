// Storing factors of a number in array (RECURSION)
let s = [];
PrimeFactors(1, 20, s);
console.log(s);

function PrimeFactors(i, num, array) {
  if (i <= num) {
    for (let j = 1; j <= num; j++) {
      if (i * j == num) {
        array.push(i, j);
      }
    }
    return PrimeFactors(i + 1, num, array);
  }
}