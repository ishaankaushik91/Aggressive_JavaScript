let Arr = [];

Series(Arr);

Arr.forEach((ele) => {
  if (PrimeCheck(ele)) {
    console.log(ele);
  }
});

function Series(arr) {
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }
}

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}
