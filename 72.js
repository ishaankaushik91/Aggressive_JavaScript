// Displaying cubes of first n numbers (RECURSION)
function Cube(i)
{
    if (i <= 10)
    {
        let pi = 1;
        for (let j = 1; j <= 3; j++)
        {
            pi *= i;
        }
        console.log(pi);
        return Cube(i + 1);
    }
}
Cube(1);