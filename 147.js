// Making each element of matrix factorial of its index (RECURSION)
let Matrix = [
  [10, 11, 13, 15],
  [20, 12, 13, 14],
  [17, 18, 19, 23],
  [9, 7, 6, 3],
];

Traversal(0, Matrix);
console.log(Matrix);

function Traversal(index, Matrix) {
  if (index < Matrix.length) {
    for (let j = 0; j < Matrix[index].length; j++) {
      Matrix[index][j] = Factorial(index + j);
    }
    return Traversal(index + 1, Matrix);
  }
}

function Factorial(number) {
  if (number >= 1) {
    return number * Factorial(number - 1);
  }
  return 1;
}
