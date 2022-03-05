// Frequency of all elements in array (RECURSION)
let Arr = [1, 2, 3, 12, 11, 1, 2, 4, 3, 100, 19, 100, 91, 19];

function Freq(index, Arr) {
  if (index < Arr.length) {
    let fre = 0;
    for (let j = 0; j < Arr.length; j++) {
      if (Arr[index] == Arr[j]) {
        fre++;
      }
    }
    console.log("Frequency of", Arr[index], "is", fre);
    return Freq(index + 1, Arr);
  }
}

Freq(0, Arr);