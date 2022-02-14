// Putting "-" between 2 even nos. (RECURSION)
import readline from "readline-sync";

let Num = readline.question("Enter a number : \n");
let Splitted = Num.split("");
Dash(0, Splitted);
console.log(Splitted);

function Dash(start, Arr)
{
    if (start < Arr.length)
    {
        if (parseInt(Arr[start]) % 2 == 0)
        {
            Arr[start] = "-" + Arr[start];
            return Dash(start + 1, Arr);
        }
        return Dash(start + 1, Arr);
    }
    return "";
}