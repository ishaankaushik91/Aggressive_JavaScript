// Finding frequency of each element in Matrix (LOOP)
let Matrix = [];

for (let i = 0; i < 5; i++) {
  let temp = [];
  for (let j = 0; j < 10; j++) {
    temp.push(Math.floor(Math.random() * 10));
  }
  Matrix.push(temp);
}

Frequency(Matrix);

function Frequency(Matrix) {
  for (let k = 0; k < Matrix.length; k++) {
    for (let l = 0; l < 10; l++) {
      let Freq = 0;
      for (let m = 0; m < Matrix.length; m++) {
        for (let n = 0; n < Matrix.length; n++) {
          if (Matrix[k][l] == Matrix[m][n]) {
            Freq++;
          }
        }
      }
      console.log(`Frequency of ${Matrix[k][l]} = ${Freq}`);
    }
  }
}
