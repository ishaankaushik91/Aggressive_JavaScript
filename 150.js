// Making elements factorial of index & then making forced prime in matrix (LOOP)
let matrix = [
  [10, 12, 14, 18, 21],
  [4, 98, 90, 25, 96],
  [100, 190, 132, 110],
];

for (let k = 0; k < 3; k++) {
  for (let l = 0; l < 5; l++) {
    matrix[k][l] = Factorial(k + l);

    while (PrimeCheck(matrix[k][l]) == 0) {
      matrix[k][l] += 1;
    }
  }
}

console.log(matrix);

function Factorial(num) {
  let pi = 1;
  for (let i = 2; i <= num; i++) {
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
