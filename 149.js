// Making elements of array cousin primes (RECURSION)
let primes = [122, 123, 124, 125, 126, 128, 129];

Traversal(0, primes);
console.log(primes);

function Traversal(index, arr) {
  if (index < arr.length) {
    while (PrimeCheck(2, arr[index]) == 0) {
      arr[index] += 1;
    }
    return Traversal(index + 1, arr);
  }
}

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}