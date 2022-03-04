// Summation of all primes in a range (RECURSION)
function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

function Summation(num) {
  if (num <= 1000) {
    if (PrimeCheck(2, num)) {
      return num + Summation(num + 1);
    }
    return Summation(num + 1);
  }
  return 0;
}

console.log(Summation(0));