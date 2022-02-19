// Finding frequency of each element in Matrix (RECURSION)
let Matrix = [];

FillMatrix(0, Matrix);
Frequency(0, Matrix);

function FillMatrix(start, Matrix) {
  if (start < 5) {
    let temp = [];
    for (let i = 0; i < 10; i++) {
      temp.push(Math.floor(Math.random() * 10));
    }
    Matrix.push(temp);
    return FillMatrix(start + 1, Matrix);
  }
}

function Frequency(i, Matrix) {
  if (i < Matrix.length) {
    for (let j = 0; j < Matrix[i].length; j++) {
      let Freq = 0;
      for (let k = 0; k < Matrix.length; k++) {
        for (let l = 0; l < Matrix[k].length; l++) {
          if (Matrix[i][j] == Matrix[k][l]) {
            Freq++;
          }
        }
      }
      console.log(`Frequency of ${Matrix[i][j]} = ${Freq}`);
    }
    return Frequency(i + 1, Matrix);
  }
}
