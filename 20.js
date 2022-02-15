// Finding most frequent occurence of an element (RECURSION)
let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let Freq = [];

Store(0, arr, Freq);
Largest(0, Freq, 0);

function Store(i, Arr, prr) {
  if (i < Arr.length) {
    let f = 0;
    for (let j = 0; j < Arr.length; j++) {
      if (Arr[i] == Arr[j]) {
        f++;
      }
    }
    prr.push(f);
    return Store(i + 1, Arr, prr);
  }
  console.log(prr);
  return 0;
}

function Largest(i, arrrrr, l) {
  if (i < arrrrr.length) {
    if (l < arrrrr[i]) {
      l = arrrrr[i];
      return Largest(i + 1, arrrrr, l);
    }
    return Largest(i + 1, arrrrr, l);
  }
  console.log(l);
  return 0;
}
