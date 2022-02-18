function SideBySide(num1, num2)
{   
    console.log(`${num1}\t${num2}`);
    let Sum = 0;
    while (num1 != 1)
    {
        num1 = Math.round(num1/2);
        num2 = num2 * 2;
        if (num1 % 2 == 0)
        {
            console.log(`${num1}\t${num2}`);
        }
        else
        {
            console.log(`${num1}\t${num2}`);
            Sum += num2;
        }
    }
    console.log("Summation of right numbers = ", Sum);
}


SideBySide(13, 11);

function Striking(text)
{
    return `${text}\u0336`;
}