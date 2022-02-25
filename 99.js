// Forced Factorial (RECURSION)
function Factorials(start)
{
    if (start <= 10)
    {
        console.log(Factorial(start)); 
    return Factorials(start + 1);
    }
}

function Factorial(num)
{
    if (num >= 1)
    {
        return num * Factorial(num - 1);
    }
    return 1;
}

Factorials(1);