// Sum of left Diagonals of a Matrix (LOOP)
let Matrix = [];

for (let i = 0; i < 5; i++) {
  let temp = [];
  for (let j = 0; j < 5; j++) {
    temp.push(j + i);
  }
  Matrix.push(temp);
}
console.log(Matrix);

let Sum = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i == j) {
      Sum += Matrix[i][j];
    }
  }
}
console.log(Sum);
