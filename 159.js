// Summation of all factorials (LOOP)
let sum = 0;
for (let i = 1; i <= 10; i++)
{
    let pi = 1;
    for (let j = 1; j <= i; j++)
    {
        pi *= j;
    }
    sum += pi;
}

console.log(sum);