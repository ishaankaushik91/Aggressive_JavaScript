// Storing factorials in Matrix (LOOP)
let Matrix = [];
let temp = [];
let pemt = [];

for (let i = 1; i <= 10; i++) {
  if (i <= 5) {
    temp.push(Factorial(i));
  } else {
    pemt.push(Factorial(i));
  }
}
Matrix.push(temp, pemt);
console.log(Matrix);

function Factorial(num) {
  let pi = 1;
  for (let i = 2; i <= num; i++) {
    pi *= i;
  }
  return pi;
}
