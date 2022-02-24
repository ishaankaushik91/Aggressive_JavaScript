// Sum of diagonals of a Matrix (RECURSION)
let Matrix = [
  [0, 1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 7],
  [4, 5, 6, 7, 8],
];

function Summation(i, Matrix, sum) {
  if (i < Matrix.length) {
    for (let j = 0; j < Matrix[i].length; j++) {
      if (i == j) {
        sum += Matrix[i][j];
      }
    }
    return Summation(i + 1, Matrix, sum);
  }
  return sum;
}
console.log(Summation(0, Matrix, 0));
