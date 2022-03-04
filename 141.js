// Average of n primes (RECURSION)
function PrimeCheck(i, number) {
  if (i < number) {
    if (number % i == 0) {
      return 0;
    }
    return PrimeCheck(i + 1, number);
  }
  return 1;
}

function Average(number, count) {
  if (number <= 1000) {
    if (PrimeCheck(2, number)) {
      return number + Average(number + 1, count + 1);
    }
    return Average(number + 1, count);
  }

  console.log(count);
  return 0;
}

console.log(Average(0, 0)/170);