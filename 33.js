// Storing only forced Primes in Array (RECURSION)
let Arr = [];

MakePrimes(1, Arr);

function MakePrimes(index, arr) {
  if (index <= 100) {
    while (PrimeCheck(2, index) != 1) {
      index += 1;
    }
    arr.push(index);
    return MakePrimes(index + 1, arr);
  }
  console.log(arr);
  return 0;
}

function PrimeCheck(start, num) {
  if (start < num) {
    if (num % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, num);
  }
  return 1;
}
