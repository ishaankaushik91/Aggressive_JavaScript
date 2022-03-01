// Adding only primes in a given range (LOOP)
function PrimeCheck(number)
{
    for (let i = 2; i < number; i++)
    {
        if (number % i == 0)
        {
            return 0;
        }
    }
    return 1;
}

function Summation(end)
{
    let sum = 0;

    for (let i = 1; i <= end; i++)
    {
        if (PrimeCheck(i))
        {
            sum += i;
        }
    }
    return sum;
}

console.log(Summation(1000));