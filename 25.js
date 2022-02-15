// .flat() without in Built in (LOOP)
let Matrix = [
  [2, 10, 13, 1],
  [10, 32, 121, 1],
];
let New = [];

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 4; j++) {
    New.push(Matrix[i][j]);
  }
}
console.log(New);
