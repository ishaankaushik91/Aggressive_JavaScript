// Clearing all everything other than number from Array (RECURSION)
let arr = [0, 1, false, 2, undefined, "", 3, null, 100, 123, null];

function Deletion(i, arr) {
  if (i < arr.length) {
    if (!arr[i]) {
      let j = i;
      Delete(j, arr);
    }
    return Deletion(i + 1, arr);
  }
}

function Delete(start, arr) {
  if (start < arr.length) {
    arr[start] = arr[start + 1];
    return Delete(start + 1, arr);
  }
}

Deletion(0, arr);
console.log(arr);
