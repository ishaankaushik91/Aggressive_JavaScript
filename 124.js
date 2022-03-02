// Pushing all primes in Array (RECURSION)
let Array = [];

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

function Raise(start, Array) {
  if (start < 100) {
    if (PrimeCheck(2, start + 5)) {
      Array[start] = start + 5;
    }
    return Raise(start + 1, Array);
  }
  return 0;
}

Raise(0, Array);
console.log(Array);
