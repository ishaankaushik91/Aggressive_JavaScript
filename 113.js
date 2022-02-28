// Target sum combinations in Array (LOOP)
let A = [
  [1, 2, 4, 5, 10, 0],
  [20, 2, 3, 4, 0, 2],
];

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < A[i].length; j++) {
    for (let k = 0; k < A.length; k++) {
      for (let l = 0; l < A[k].length; l++) {
        if (A[i][j] + A[k][l] == 10) {
          console.log(A[i][j], A[k][l]);
        }
      }
    }
  }
}
