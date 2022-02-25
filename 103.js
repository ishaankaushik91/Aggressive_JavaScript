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

  try {
      let response = await Done(1000);
      console.log(response);
      console.log("I'm back here again");
  } catch (error) {
      console.log(error);
  }