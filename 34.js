// Finding pair of elements giving product equal to Target (LOOP)
let A1 = [1, 2, 12, 3, 12, 6, 19];
let A2 = [32, 1, 3, 34, 6, 7, 8];
let Target = 34 + 2;

for (let i = 0; i < A1.length; i++) {
  for (let j = 0; j < A2.length; j++) {
    if (A1[i] * A2[j] == Target) {
      console.log(`${A1[i]} X ${A2[j]} = ${Target}`);
    }
  }
}
