// Filling prime indexes with even  numbers (LOOP)
function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}

function Store(Array) {
  for (let k = 0; k < 10; k++) {
    if (PrimeCheck(k) && k % 2 == 0) {
      Array[k] = k;
    } else {
      Array[k] = k;
    }
  }
}

let Array = [];
Store(Array);
console.log(Array);