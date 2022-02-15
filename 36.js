// Callback Practice
let I_am_back = (Khush) => {
  if (!Khush) {
    console.log("Yo");
  } else {
    console.log("Bo");
  }
};

function Apple() {
  let Sum = 0;
  for (let i = 1; i <= 100; i++) {
    Sum += i;
  }
  return Sum;
}

I_am_back();
I_am_back(Apple());
console.log("1");
