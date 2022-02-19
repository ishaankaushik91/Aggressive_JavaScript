// Popping Matrix with 100 random nos. then filtering Primes (RECURSION)
let arr = [];
let Primes = [];

function FillArray(start, arr) {
  if (start < 10) {
    let temp = [];
    for (let i = 0; i < 10; i++) {
      temp.push(Math.floor(Math.random() * 10));
    }
    arr.push(temp);
    return FillArray(start + 1, arr);
  }
}
FillArray(0, arr);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < 10; j++) {
    if (PrimeCheck(2, arr[i][j])) {
      console.log(arr[i][j]);
    }
  }
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
