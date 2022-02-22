// Checking wether Matrix is identity or not (RECURSION)
let Matrix = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

function Identity(i, Matrix) {
  if (i < Matrix.length) {
    for (let j = 0; j < Matrix[i].length; j++) {
      if (i == j && Matrix[i][j]) {
        console.log(Matrix[i][j]);
      }
    }
    return Identity(i + 1, Matrix);
  }
}

Identity(0, Matrix);
