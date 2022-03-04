// Summation of all primes in a range (LOOP)
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

let sum = 0;

for (let j = 1; j < 1000; j++)
{
    if (PrimeCheck(j))
    {
        sum += j;
    }
}

console.log(sum);