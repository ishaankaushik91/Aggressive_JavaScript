// Clearing all everything other than number from Array (LOOP)
let arr = [0, 1, false, 2, undefined, "", 3, null, 100, 123, null];

for (let i = 0; i < arr.length; i++) {
  if (!arr[i]) {
    for (let j = i; j < arr.length; j++) {
      arr[j] = arr[j + 1];
    }
  }
}
console.log(arr);
