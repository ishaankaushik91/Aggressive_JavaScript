// Find wether a given number is factorial or not (LOOP)
let number = 40320;

for (let i = 1; i <= number / 2; i++) {
  let pi = 1;
  let Check = 0;
  for (let j = 2; j <= i; j++) {
    if (pi == number) {
      console.log(`Factorial of ${j - 1}`);
      break;
      Check = 1;
    }
    pi *= j;
  }
  if (Check) {
    break;
  }
}
