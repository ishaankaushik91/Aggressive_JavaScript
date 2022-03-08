// Binomial Coefficient (LOOP)
function Factorial(num)
{
    let pi = 1;
    for (let i = 2; i <= num; i++)
    {
        pi *= i;
    }
    return pi;
}

let Coefficient = Factorial(7) / Factorial(5) * Factorial(7 - 5);
console.log(Coefficient);