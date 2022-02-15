// Product & Sum of Array elements (RECURSION)
let Array = [];

console.log("Sum = ", Sum(0, Array), "Product = ", Product(0, Array));

function Sum(index, arr) {
  if (index <= 100) {
    Array[index] = (index + 1) * 10 ** 3;
    return arr[index] + Sum(index + 1, arr);
  }
  return 0;
}

function Product(index, arr) {
  if (index <= 100) {
    return arr[index] * Product(index + 1, arr);
  }
  return 1;
}
