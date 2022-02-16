// Removing all Primes in Array (RECURSION)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Deletion(0, arr);

function Deletion(index, arr) {
  if (index < arr.length) {
    if (PrimeCheck(2, arr[index])) {
      for (let j = index; j < arr.length; j++) {
        arr[j] = arr[j + 1];
      }
    }
    return Deletion(index + 1, arr);
  }
  console.log(arr);
}

function PrimeCheck(i, num) {
  if (i < num) {
    if (num % i == 0) {
      return 0;
    }
    return PrimeCheck(i + 1, num);
  }
  return 1;
}
