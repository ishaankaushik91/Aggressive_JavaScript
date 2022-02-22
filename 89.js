// Storing factorials in Matrix (RECURSION)
let Matrix = [];
let temp = [];
let pemt = [];

function Capacity(i, temp, pemt) {
  if (i <= 10) {
    if (i <= 5) {
      temp.push(Factorial(i));
      return Capacity(i + 1, temp, pemt);
    }
    pemt.push(Factorial(i));
    return Capacity(i + 1, temp, pemt);
  }
}

function Factorial(num) {
  if (num >= 1) {
    return num * Factorial(num - 1);
  }
  return 1;
}

Capacity(1, temp, pemt);
Matrix.push(temp, pemt);
console.log(Matrix);
