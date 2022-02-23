// Forced Prime Factorial (RECURSION)
function Factorial(num) {
  if (num >= 1) {
    return num * Factorial(num - 1);
  }
  return 1;
}

function PrimeCheck(i, num) {
  if (i < num) {
    if (num % i == 0) {
      return 0;
    }
    return PrimeCheck(i + 1, num);
  }
  return 1;
}

function ForcedPrime(num) {
  if (PrimeCheck(2, num) == 0) {
    num += 1;
    return ForcedPrime(num);
  }
  console.log(Factorial(num));
}

ForcedPrime(6);
