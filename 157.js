// Making a number its closest factorial (LOOP)
function FactorialCheck(num) {
  for (let i = 1; i <= 10; i++) {
    let pi = 1;
    for (let j = 1; j <= i; j++) {
      if (pi == num) {
        console.log(`${num} is factorial of ${j - 1}`);
        return pi;
      }
      pi *= j;
    }
  }
  return 0;
}

let booty = 7;

while (FactorialCheck(booty) == 0) {
  booty += 1;
}