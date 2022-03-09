// Insertion of element in matrix at a specific position (RECURSION)
let matrix = [
  [12, 11, 101, 12],
  [10, 21, 22, 1],
];

Insertion(0, matrix, 0, 2, 3);

function Swapper(index, inner, column) {
  if (index >= column) {
    inner[index + 1] = inner[index];
    return Swapper(index - 1, inner, column);
  }
}

function Insertion(index, matrix, row, column, number) {
  if (index >= row) {
    Swapper(matrix[index].length - 1, matrix[index], column);
    return Insertion(index - 1, matrix, row, column, number);
  }
  matrix[row][column] = number;
  console.log(matrix);
}
