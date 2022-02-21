// Storing Array of Factorials in Factorial.js (LOOP)
import readline from "readline-sync";
import fs from "fs";

function Read(file_name) {
  return new Promise((resolved, reject) => {
    fs.readFile(file_name, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolved(data);
      }
    });
  });
}

function Write(File, Source) {
  return new Promise((resolved, reject) => {
    fs.writeFile(File, Source, (err) => {
      if (err) {
        reject(err);
      } else {
        resolved();
      }
    });
  });
}

try {
  let FileData = await Read("Factorial.json");
  FileData = JSON.parse(FileData);

  for (let j = 1; j < 10; j++) {
    FileData.push(Factorial(j));
  }

  await Write("Factorial.json", JSON.stringify(FileData));
} catch (error) {
  console.log(error);
}

function Factorial(num) {
  let pi = 1;
  for (let i = 2; i <= num; i++) {
    pi *= i;
  }
  return pi;
}
