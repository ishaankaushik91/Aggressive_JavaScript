import readlineSync from "readline-sync";
import fs from "fs";

function read(filename)
{
    return new Promise((resolved, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolved(data);
            }
        })
    })
}

function write(target, source)
{
    return new Promise((resolved, reject) => {
        fs.writeFile(target, source, (err) => {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolved();
            }
        })
    })
}

async function consume() {
  try {
    
    /* Taking inputs */
    let email = readlineSync.question(`Enter your email : `);
    
    /* Reading Database */
    let dataBase = await read("users.json");
    dataBase = JSON.parse(dataBase);

    /* Checking wether email already in use or not */
    dataBase.forEach((Element) => {
        if (email == Element.email)
        {
            let id = readlineSync.question(`Bro enter your todo id : `);
            for (let i = 0; i < Element.todo.length; i++)
            {
                if (id == Element.todo[i].id)
                {
                    Element.todo[i] = 0;
                }
            }
        }
    })

    /* Wirting in Database */
    await write("users.json", JSON.stringify(dataBase));
    

  } catch (error) {
    console.log(error);
  }
}

consume();