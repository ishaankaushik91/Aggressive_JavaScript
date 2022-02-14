// Putting "-" between 2 even nos. (LOOP)
import readline from "readline-sync";

let Num = readline.question("Enter a number : \n");
let Num_Split =  Num.split("");

for (let i = 0; i < Num_Split.length; i++)
{
    if (parseInt(Num_Split[i]) % 2 == 0)
    {
        Num_Split[i] = "-" + Num_Split[i];
    }
}