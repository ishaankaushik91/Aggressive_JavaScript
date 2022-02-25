// Asynchronous Programming Practice
function Done(time) {
  if (!time) {
    console.log("Some-time has to be given");
  } else {
    setTimeout(() => {
      console.log("Ishaan will score 9+ MGPA in MAT 5");
    }, time);
  }
}

Done(10000);
