// Algorithm to find nth Power of a given number (LOOP)
function Search(num, numOf) {
  let pi = 1;
  for (let i = 1; i <= num; i++) {
    pi *= numOf;
    if (pi == num) {
      console.log(`Nth power = ${i}`);
      break;
    }
  }
}
Search(81, 3);
