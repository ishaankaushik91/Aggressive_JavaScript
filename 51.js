// Algorithm to check wether a number is power of 4 or not (LOOP)
function PowerCheck(num) {
  let pi = 1;
  for (let i = 1; i <= num; i++) {
    if (pi == num) {
      return 1;
    }
    pi *= 4;
  }
  return 0;
}
console.log(PowerCheck(256));
