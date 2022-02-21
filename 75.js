// Find Square Root value (LOOP)
function SquareRoot(num) {
  for (let i = 1; i <= num / 2; i++) {
    if (i * i == num) {
      return i;
    }
  }
}

console.log(`√${81} = ${SquareRoot(81)}`);
