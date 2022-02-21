// Displaying cubes of first n numbers (LOOP)
for (let i = 1; i <= 10; i++)
{
    console.log(BHP(i));
}

function BHP(num)
{
    let pi = 1;
    for (let i = 1; i <= 3; i++)
    {
        pi *= num;
    }
    return pi;
}