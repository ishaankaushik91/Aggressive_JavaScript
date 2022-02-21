// Find Square Root value (RECURSION)
function SquareRoot(i, num) {
  if (i <= num / 2) {
    if (i * i == num) {
      return console.log(`√${num} = ${i}`);
    }
    return SquareRoot(i + 1, num);
  }
}
SquareRoot(1, 81);
