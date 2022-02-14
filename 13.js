// Async - await Practice
function abc(num1, num2) {
  return new Promise((resolved, reject) => {
    if (num1 < num2) {
      resolved(`${num1} < ${num2}`);
    } else {
      reject(`${num1} > ${num2}`);
    }
  });
}

async function Consume() {
  try {
    let result = await abc(10, 10 - 1);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

Consume();
