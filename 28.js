// Union of two arrays (LOOP)
let array1 = [1, 0, 2, 3, 4],
  array2 = [3, 5, 2, 2, 8];

Union(array1, array2);

function Union(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let Check = 1;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        Check = 0;
        break;
      }
    }
    if (Check) {
      console.log(array1[i], array2[i]);
    }
  }
}
