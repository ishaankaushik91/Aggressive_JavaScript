import readline from "readline-sync";
import fs from "fs";
import jwt from "jsonwebtoken";

function Read(filename) {
  return new Promise((resolved, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolved(data);
      }
    });
  });
}

function Write(Target, Source) {
  return new Promise((resolved, reject) => {
    fs.writeFile(Target, Source, (err) => {
      if (err) {
        reject(err);
      } else {
        resolved();
      }
    });
  });
}

async function WebToken() {
  try {
    let Email = readline.question(`Enter your email : `);
    let Password = readline.question(`Enter your password : `);

    let FileData = await Read("User.json");
    FileData = JSON.parse(FileData);

    let Credentials = { Email: Email, Password: Password };
    console.log(Credentials);

    let token = jwt.sign(Credentials, `Token`, { expiresIn: 60 * 4 });
    console.log(token);

    FileData.push(Credentials);
    await Write("User.json", JSON.stringify(FileData));

  } catch (error) {
    console.log(error);
  }
}

async function TokenCheck()
{
    try {
        
        let token = readline.question("Enter your token : \n");
        let Key = readline.question("Enter the secret key : \n");

        let FileData = await Read("User.json");
        FileData = JSON.parse(FileData);

        

    } catch (error) {
        console.log(error);
    }
}

TokenCheck();