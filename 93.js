// Forced Factorial Prime (RECURSION)
function Factorial(num)
{
    if (num >= 1)
    {
        return num * Factorial(num - 1);
    }
    return 1;
}

function PrimeCheck(i, num)
{
    if (i < num)
    {
        if (num % i == 0)
        {
            return 0;
        }
        return PrimeCheck(i + 1, num);
    }
    return 1;
}

// Stack limit exceeded so I'm using a loop here
function MakePrime(num)
{
    let find = Factorial(num);
    while (PrimeCheck(2, find) == 0)
    {
        find += 1;
    }
    console.log(find)
}
// Stack limit still exceeding at 8 as input
MakePrime(7);