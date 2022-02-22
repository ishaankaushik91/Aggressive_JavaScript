// Sum of all elements in a Matrix (LOOP)
let Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let sum = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 4; j++) {
    sum += Matrix[i][j];
  }
}
console.log(sum);
