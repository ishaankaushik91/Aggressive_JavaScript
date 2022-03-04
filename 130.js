// Validate Fibonnaci (LOOP)
function Fibonnaci(number)
{
    let num1 = 0, num2 = 1, num3;

    for (let i = 0; i <= 50; i++)
    {
        if (number == num3)
        {
            console.log(`The number ${number}, is on ${i + 1} index in fibonacci series : `);
            break;
        }
        num3 = num2 + num1;
        console.log(num3);
        num2 = num3;
        num1 = num2;
    }
}

Fibonnaci(16);