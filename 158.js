// Making a number its closest factorial (RECURSION)
function FactorialCheck(start, number) {
  if (start <= 10) {
    if (Factorial(start) == number) {
      console.log(number, "is factorial of", start);
      return;
    }
    return FactorialCheck(start + 1, number);
  }
  return 0;
}

function Factorial(num) {
  if (num >= 1) {
    return num * Factorial(num - 1);
  }
  return 1;
}

let booty = 7;
while (FactorialCheck(1, booty) == 0) {
  booty += 1;
}
