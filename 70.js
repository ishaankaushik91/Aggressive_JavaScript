// Find wether a number is Summation of AP or not (RECURSION)
function Find(i, num) {
  if (i <= num) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (sum == num) {
        return j - 1;
      }
      sum += j;
    }
    return Find(i + 1, num);
  }
}
console.log(Find(1, 66));
