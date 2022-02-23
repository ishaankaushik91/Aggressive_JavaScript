// Forced Prime Factorial (LOOP)

ForcedPrime(6);

function ForcedPrime(num) {
  while (PrimeCheck(num) == 0) {
    num += 1;
  }
  console.log(Factorial(num));
}

function Factorial(num) {
  let pi = 1;
  for (let i = 2; i <= num; i++) {
    pi *= i;
  }
  return pi;
}

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}
