// Making each element of a matrix a forced prime (LOOP)
function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}

let matrix = [
  [4, 4, 4, 4],
  [6, 6, 6, 6],
  [8, 8, 8, 8],
  [10, 10, 10, 10],
];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    while (PrimeCheck(matrix[i][j]) == 0) {
      matrix[i][j] += 1;
    }
  }
}

console.log(matrix);
