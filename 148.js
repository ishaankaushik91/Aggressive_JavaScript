// Making elements of array cousin primes (LOOP)
let primes = [122, 123, 124, 125, 126, 128, 129];

for (let j = 0; j < primes.length; j++)
{
    while (PrimeCheck(primes[j]) == 0)
    {
        primes[j] += 1;
    }
}

console.log(primes);

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