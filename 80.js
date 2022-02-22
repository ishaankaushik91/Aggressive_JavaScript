import axios from "axios";
import readline from "readline-sync";

let num1 = readline.questionInt(`Enter number 1 :`);
let num2 = readline.questionInt(`Enter num2 :`);

function ping(num1, num2)
{
    return axios.get(`http://59.92.225.188/${num1}/${num2}`)
}

try {
    
    let sum = await ping(num1, num2)
    let num3 = readline.questionInt("Enter num 3");
    let sum2 = await ping(sum.data, num3);
    let num4 = readline.questionInt("Enter num 4 ");
    let sum3 = await ping(sum2.data, num4);
    console.log(sum3.data);

} catch (error) {
    console.log(error);
}