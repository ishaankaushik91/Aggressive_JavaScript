// Missing number in Array (LOOP)
let Arr = [2, 3, 4, 5, 6, 7, 8, 10, 11]; //Range from 2-11
let num = 2,
  index = 0;

while (num <= 11) {
  if (Arr[index] != num) {
    console.log(num);
  }
  num++;
  index++;
}
