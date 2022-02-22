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
    let num3 = readline.questionInt(`Enter num 3`);
    return axios.get(`http://59.92.225.188/${sum1}/${num3}`)
})
.then((res) => {
    console.log(res.data);
    let sum2 = res.data;
    let num4 = readline.questionInt('Enter num 4');
    return axios.get(`http://59.92.225.188/${sum2}/${num4}`)
})
.then((res) => {
    console.log(res.data);
})
