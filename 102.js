// Asynchronous Programming Practice
function Done(time) {
  return new Promise((resolved, reject) => {
    if (!time) {
      reject("Some-time has to be given");
    } else {
      setTimeout(() => {
        resolved("Ishaan will score 9+ MGPA in MAT 5");
      }, time);
    }
  });
}

Done(10000)
  .then((Response) => {
    console.log(Response);
    console.log("I will come first but technically came last");
  })
  .catch((error) => {
    console.log(error);
  });

console.log("I will come first but technically came last");
