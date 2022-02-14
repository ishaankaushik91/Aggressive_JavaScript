// Callback Practice
setTimeout(() => {
    Samsung(NPrimes(0));
}, 500);

// Samsung is a callback who is accepting another function as a parameter
let Samsung = (callback) => {
    if(callback)
    {
        console.log("Hey");
    }
}

function NPrimes(start) {
  if (start <= 100) {
    if (PrimeCheck(2, start)) {
      console.log(start);
      return NPrimes(start + 1);
    }
    return NPrimes(start + 1);
  }
}

function PrimeCheck(i, num) {
  if (i < num) {
    if (num % i == 0) {
      return 0;
    }
    return PrimeCheck(i + 1, num);
  }
  return 1;
}
