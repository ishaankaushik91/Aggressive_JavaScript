// Forced Prime (LOOP)
function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}

function ForcedPrime(number) {
  while (PrimeCheck(number) != 1) {
    number += 1;
  }
  console.log(number);
}

ForcedPrime(200000);