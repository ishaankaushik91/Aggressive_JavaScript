// Objects Practise
import readline from "readline-sync";
import fs from "fs";

function Read(file) {
  return new Promise((resolved, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolved(data);
      }
    });
  });
}

function Write(F_name, Source) {
  return new Promise((resolved, reject) => {
    fs.writeFile(F_name, Source, (err) => {
      if (err) {
        reject(err);
      } else {
        resolved();
      }
    });
  });
}

async function Consumer() {
  try {
    let Victim = readline.question(`What's your name buddy ? :\n`);
    let Criminal = readline.question(
      `${Victim}, whom do you wanna complain about ? :\n`
    );
    let Crime = readline.question(`What crime did ${Criminal} do ?:\n`);
    let Case = {
      Victim: Victim,
      Criminal: Criminal,
      Crime: Crime,
    };
    let FIR = await Read("Case.json");
    FIR = JSON.parse(FIR.toString());
    FIR.push(Case);
    console.log(FIR);
    await Write("Case.json", JSON.stringify(FIR));
    console.log(
      `${Victim}, your complain has been filed, it'll take 3 hrs.\nTill the time feel free to contact at 9560601357\n`
    );
  } catch (error) {
    console.log(error);
  }
}

Consumer();
