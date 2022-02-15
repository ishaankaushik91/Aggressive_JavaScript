// Storing only forced Primes in Array (LOOP)
let Arr = [];

MakePrimes(Arr);

function MakePrimes(Arr) {
  for (let j = 1; j <= 100; j++) {
    while (PrimeCheck(j) != 1) {
      j += 1;
    }
    Arr.push(j);
  }
  console.log(Arr);
}

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}
