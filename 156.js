// Binomial Coefficient (RECURSION)
function Factorial(num)
{
    if (num >= 1)
    {
        return num * Factorial(num - 1);
    }
    return 1;
}

let Coefficient = Factorial(7) / Factorial(5) * Factorial(7 - 5);
console.log(Coefficient);