// Making each element of a matrix a forced prime (RECURSION)
function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

function MakePrime(num) {
  if (PrimeCheck(2, num) == 0) {
    return MakePrime(num + 1);
  }
  return num;
}

let matrix = [
  [4, 4, 4, 4],
  [6, 6, 6, 6],
  [8, 8, 8, 8],
  [10, 10, 10, 10],
];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    matrix[i][j] = MakePrime(matrix[i][j]);
  }
}
console.log(matrix);
