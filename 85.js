// Checking wether Matrix is identity or not (LOOP)
let Matrix = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

for (let i = 0; i < Matrix.length; i++) {
  for (let j = 0; j < Matrix[i].length; j++) {
    if (i == j && Matrix[i][j]) {
      console.log(Matrix[i][j]);
    }
  }
}
