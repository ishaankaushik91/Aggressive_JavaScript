// Removing all Primes in Array (LOOP)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Deletion(arr);

function Deletion(arr) {
  for (let j = 0; j < arr.length; j++) {
    if (PrimeCheck(arr[j])) {
      for (let k = j; k < arr.length; k++) {
        arr[k] = arr[k + 1];
      }
    }
  }
  console.log(arr);
}

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}
