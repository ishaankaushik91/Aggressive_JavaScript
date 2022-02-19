// Algorithm to check wether a number is power of 4 or not (RECURSION)
function PowerCheck(start, num, pi) {
  if (start <= num) {
    pi *= 4;
    if (pi == num) {
      return 1;
    }
    return PowerCheck(start + 1, num, pi);
  }
  return 0;
}
console.log(PowerCheck(1, 256, 1));