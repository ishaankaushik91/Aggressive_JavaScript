import axios from "axios";

function Ping()
{
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
}


Ping()
.then((Response_from_Server) => {
      
})








// import readlineSync from "readline-sync";
// import util from "util";
// import fs from "fs";
// var readFile = util.promisify(fs.readFile);
// async function registerUser() {
//   try {
//     console.clear();
//     console.log(`
//    ====================================\n
//    \tRegister New User\n 
//    ====================================`);
//     var username = readlineSync.question("Enter your name : ");
//     var password = readlineSync.question("Enter your password : ", {
//       hideEchoBack: true,
//     });
//     var phone = readlineSync.question("Enter your mobile number : ");
//     var email = readlineSync.question("Enter your email address : ");
//     var address = readlineSync.question("Enter your address : ");
//     var userData = { username, password, phone, email, address, todos: [] };
//     console.log(userData);
//     await fs.writeFile("data.json", fileData, (err) => {
//       if (err) {
//         throw errf;
//       } else {
//         console.log("written");
//       }
//     });
//     var fileData = await readFile("data.json");
//     console.log(fileData.toString());
//   } catch (error) {
//     console.error(error);
//   }
// }