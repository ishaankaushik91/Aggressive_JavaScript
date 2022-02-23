// Forced Factorial Prime (LOOP)
function Factorial(num) {
  let pi = 1;
  for (let i = 1; i <= num; i++) {
    pi *= i;
  }
  return pi;
}

function PrimeCheck(num) {
  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      return 0;
    }
  }
  return 1;
}

function MakePrime(num) {
  let find = Factorial(num);
  while (PrimeCheck(find) == 0) {
    find += 1;
  }
  console.log(find);
}

MakePrime(8);
