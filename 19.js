// Finding most frequent occurence of an element (LOOP)
let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let Freq = [];

for (let i = 0; i < arr.length; i++) {
  let f = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      f++;
    }
  }
  Freq.push(f);
}

let l = -1;
for (let k = 0; k < Freq.length; k++) {
  if (l < Freq[k]) {
    l = Freq[k];
  }
}
console.log(l);
