// Deletion of all even numbers in Array (RECURSION)
let Array = [1, 2, 3, 3, 3, 6, 8, 11, 13];

Deletion(0, Array);

function Increment(i, A) {
  if (i < A.length) {
    if (A[i] % 2 == 0) {
      for (let j = i; j < A.length; j++) {
        A[j] = A[j + 1];
      }
    }
    return Increment(i + 1, A);
  }
}

function Deletion(index, Array) {
  if (index < Array.length) {
    Increment(0, Array);
    return Deletion(index + 1, Array);
  }
  console.log(Array);
}
