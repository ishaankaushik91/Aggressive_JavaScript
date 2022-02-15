// Adding elements of 2 Array (RECURSION)
let array1 = [1, 0, 2, 3, 4],
  array2 = [3, 5, 6, 7, 8];
let Resultant = [];

Sum(0, array1, array2, Resultant);

function Sum(i, arr, prr, res) {
  if (i < arr.length) {
    res[i] = arr[i] + prr[i];
    return Sum(i + 1, arr, prr, res);
  }
  console.log(res);
}
