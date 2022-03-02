// Filling prime indexes with even  numbers (RECURSION)
function PrimeCheck(start, num) {
  if (start < num) {
    if (num % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, num);
  }
  return 1;
}

function Store(index, Array) {
  if (index < 10) {
    if (PrimeCheck(2, index) && index % 2 == 0) {
      Array[index] = index;
      return Store(index + 1, Array);
    }
    Array[index] = index;
    return Store(index + 1, Array);
  }
}

let Array = [];

Store(0, Array);
console.log(Array);