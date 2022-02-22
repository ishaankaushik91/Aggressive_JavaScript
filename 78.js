import axios from "axios";
import readline from "readline-sync";

let num1 = readline.questionInt(`Enter number 1 :`);
let num2 = readline.questionInt(`Enter num2 :`);

function ping(num1, num2)
{
    return axios.get(`http://59.92.225.188/${num1}/${num2}`)
}

ping(num1, num2)
.then((res) => {
    let sum1 = res.data;
    console.log(sum1);
    let Num3 = readline.questionInt("enter num 3 :");
    ping(sum1, Num3)
    .then((res) => {
        let sum2 = res.data;
        console.log(sum2);
        let Num4 = readline.questionInt("enter num 4 :");
        ping(sum2, Num4)
        .then((res) => {
            console.log(res.data);
        })
    })
})
.catch((error) => {
    console.log(error);
})