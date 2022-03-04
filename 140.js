// Average of n primes (LOOP)
function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}

function Average() {
  let sum = 0, count = 0;
  for (var j = 3; j <= 1000; j++) {
    if (PrimeCheck(j)) {
      sum += j;
      count++;
    }
  }

  return sum / count;
}

console.log(Average());