// Convert a factorial to prime number (LOOP)
function Factorial(number) {
  let pi = 1;
  for (let i = 1; i <= number; i++) {
    pi *= i;
  }
  return pi;
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}

let num = Factorial(8);
while (PrimeCheck(num) == 0) {
  num += 1;
}

console.log(num);
