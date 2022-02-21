// Find wether a number is Summation of AP or not (LOOP)
let num = 66;

Find(num);

function Find(num) {
  for (let i = 1; i < num; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (sum == num) {
        console.log(j - 1);
        return;
      }
      sum += j;
    }
  }
}
