// Making each element of matrix factorial of its index (LOOP)
let Matrix = [
  [10, 11, 13, 15],
  [20, 12, 13, 14],
  [17, 18, 19, 23],
  [9, 7, 6, 3],
];

for (let k = 0; k < 4; k++) {
  for (let l = 0; l < 4; l++) {
    Matrix[k][l] = Factorial(k + l);
  }
}

console.log(Matrix);

function Factorial(number) {
  let pi = 1;
  for (let i = 2; i <= number; i++) {
    pi *= i;
  }
  return pi;
}
