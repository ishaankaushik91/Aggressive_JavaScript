// Missing number in Array (RECURSION)
let Arr = [2, 3, 4, 5, 6, 7, 8, 10, 11]; //Range from 2-11

MissingNumber(2, Arr, 0);

function MissingNumber(num, Array, index) {
  if (num <= 11) {
    if (Array[index] != num) {
      console.log(num);
      return MissingNumber(num + 1, Array, index + 1);
    }
    return MissingNumber(num + 1, Array, index + 1);
  }
}
