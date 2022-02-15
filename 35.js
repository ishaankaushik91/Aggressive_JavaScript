// Finding pair of elements giving product equal to Target (RECURSION)
let A1 = [1, 2, 12, 3, 12, 6, 19];
let A2 = [32, 1, 3, 34, 6, 7, 8];

Find(0, A1, 12, A2);

function Find(index, A1, Target, A2) {
  if (index < A1.length) {
    for (let j = 0; j < A2.length; j++) {
      if (A1[index] * A2[j] == Target) {
        console.log(`${A1[index]} X ${A2[j]} = ${Target}`);
      }
    }
    return Find(index + 1, A1, Target, A2);
  }
}
