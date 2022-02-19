// Breaking the given amount of money into notes of 100, 50 & 20 notes (LOOP)
import readline from "readline-sync";

let Money = readline.questionInt(`Enter money : `);
let hundered = 0, fifty = 0, twenty = 0;

while (Money >= 1)
{
    if (Money >= 100)
    {
        Money = Money - 100;
        hundered++;
    }
    else if (Money >= 50)
    {
        Money = Money - 50;
        fifty++;
    }
    else if (Money >= 20)
    {
        Money = Money - 20;
        twenty++
    }

}
console.log(hundered, fifty, twenty);