// Prime Factors of a Number (RECURSION)
let num = 117;

Factors(1, num);

function Factors(i, num) {
  if (i < num) {
    if (num % i == 0 && PrimeCheck(2, i)) {
      console.log(i);
    }
    return Factors(i + 1, num);
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
