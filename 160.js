// Summation of all factorials (RECURSION)
function Factorial(number) {
  if (number >= 1) {
    return number * Factorial(number - 1);
  }
  return 1;
}

function Summation(start) {
  if (start <= 10) {
    return Factorial(start) + Summation(start + 1);
  }
  return 0;
}

console.log(Summation(1));
