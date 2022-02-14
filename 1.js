// Callback Practice

setTimeout(() => {
  Apple(func1(1, 1000));
}, 5000);

// Apple is a callback who is accepting another function as a parameter
let Apple = (callback) => {
  if (callback) {
    console.log("Callback ka concept clear hai boss Ishaan\n");
  } else {
    console.log("Thode aur efforts lagao janab !\n");
  }
};

function func1(start, end) {
  for (let i = start; i <= end; i++) {
    let Check = 1;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        Check = 0;
        break;
      }
    }
    if (Check) {
      return Check;
    }
  }
}
