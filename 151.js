// Making elements factorial of index & then making forced prime in matrix (RECURSION)
let matrix = [
  [10, 12, 14, 18, 21],
  [4, 98, 90, 25, 96],
  [100, 190, 132, 110],
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    matrix[i][j] = Factorial(i + j);
    matrix[i][j] = MakePrime(matrix[i][j]);
  }
}

console.log(matrix);

function MakePrime(booty) {
  if (PrimeCheck(2, booty) == 0) {
    return MakePrime(booty + 1);
  }
  return booty;
}

function Factorial(num) {
  if (num >= 1) {
    return num * Factorial(num - 1);
  }
  return 1;
}

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}
