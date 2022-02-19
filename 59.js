// Sigma n (LOOP)
function Summation(range)
{
    let sum = 0;
    for (let i = 1; i <= range; i++)
    {
        sum += i;
    }
    return sum;
}

console.log(Summation(10));