// Adding only primes in a given range (RECURSION)
function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

function Summation(start) {
  if (start <= 10) {
    if (PrimeCheck(2, start)) {
      return start + Summation(start + 1);
    }
    return Summation(start + 1);
  }
  return 0;
}
console.log(Summation(1));
