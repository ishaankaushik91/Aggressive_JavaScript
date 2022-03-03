import fs from "fs";

function Read(filename)
{
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}

try {
    
    let SomeData = await Read("users.json");
    SomeData = JSON.parse(SomeData);
    
    let Deadlines = [], IDs = [];

    for (let i = 0; i < SomeData.length; i++)
    {
        for (let j = 0; j < SomeData[i].todos.length; j++)
        {
            Deadlines.push(SomeData[i].todos[j].deadline);
            IDs.push(SomeData[i].todos[j].id);
        }
    }
    
    console.log(Deadlines);
    console.log(IDs);

} catch (error) {
    console.log(error);
}



// reminders.forEach(ele => scheduleJob('${userid-todoid}', '${ele}', () => {
//     sendSMS({ msg: "Hello Man", mobile: "+919618211626" });
// });