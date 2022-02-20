// Storing Factorials in Array (LOOP)
let Arr = [];

for (let j = 0; j < 10; j++)
{
    Arr[j] = Factorials(j + 1);
}
console.log(Arr);

function Factorials(num)
{
    let pi = 1;
    for (let i = 1; i <= num; i++)
    {
        pi *= i;
    }
    return pi;
}