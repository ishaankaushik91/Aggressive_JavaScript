// FS practice
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
    let User = await Read("User.json");
    User = JSON.parse(User);
    let Email = readline.question(`Enter your email : `);
    let UserName = readline.question(`Enter a UserName : `);

    User.forEach((Element) => {
        if (Email == Element.Email || UserName == Element.UserName)
        {
            return console.log(`${Email} or ${UserName} already in use!`);
        }
    })
    
    let Password = readline.question(`Enter Password : `);
    let Confirm = readline.question(`Confirm password : `);

    let Chance = 1;
    while (Confirm != Password && Chance <= 3)
    {
        let Confirm = readline.question(`Password didn't match ! Enter again : `);
        Chance++;
        if (Chance == 3)
        {
            throw `Your session has been expired :( please try again !`;
        }
    }

    let Number = readline.question(`Enter your phone number for verification : `);
    /*
    SMS LOGIC & OTP Confirmation
    */

} catch (error) {
    console.log(error);
}