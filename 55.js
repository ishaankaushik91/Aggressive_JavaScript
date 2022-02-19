// Popping Matrix with 100 random nos. then filtering Primes (LOOP)
let arr = [];

let Primes = [];

for (let i = 0; i < 10; i++) {
  let temp = [];
  for (let j = 0; j < 10; j++) {
    temp.push(Math.floor(Math.random() * 10));
  }
  arr.push(temp);
}

for (let k = 0; k < arr.length; k++) {
  for (let l = 0; l < 9; l++) {
    if (PrimeCheck(arr[k][l])) {
      Primes.push(arr[k][l]);
    }
  }
}

console.log(Primes);

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}
