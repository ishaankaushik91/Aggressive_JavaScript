// Algorithm to find nth Power of a given number (RECURSION)
function Search(i, num, numOf, pi) {
  if (i <= num) {
    pi *= numOf;
    if (pi == num) {
      console.log(`Nth Power = ${i}`);
      return;
    }
    return Search(i + 1, num, numOf, pi);
  }
}
Search(1, 125, 5, 1);
