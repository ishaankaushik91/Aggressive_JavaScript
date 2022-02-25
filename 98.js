// Forced Factorial (LOOP)
function FactorialCheck(number) {
  for (let i = 1; i <= 10; i++) {
    let pi = 1;
    for (let j = 1; j <= i; j++) {
      pi *= j;
    }
    if (pi > number) {
      while (number != pi) {
        number += 1;
      }
      console.log(number);
    } else {
      while (number != pi) {
        number -= 1;
      }
      console.log(number);
    }
  }
}

FactorialCheck(3);
