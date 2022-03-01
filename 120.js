// Convert a factorial to prime number (RECURSION)
function Factorial(num) {
  if (num >= 1) {
    return num * Factorial(num - 1);
  }
  return 1;
}

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

let num = Factorial(6);
while (PrimeCheck(2, num) == 0) {
  num += 1;
}
console.log(num);
