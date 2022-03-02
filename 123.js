// Pushing all primes in Array (LOOP)
let Array = [];

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

for (let i = 0; i < 100; i++)
{
    if (PrimeCheck(i + 5))
    {
        Array[i] = i + 5;
    }
}

console.log(Array);