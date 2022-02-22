// Sum of all odd elements of an Matrix (RECURSION)
let Matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

function Summation(i, Matrix)
{
    if (i < Matrix.length)
    {
        let sum = 0;
        for (let j = 0; j < Matrix[i].length; j++)
        {
            if (Matrix[i][j] % 2 != 0)
            {
                sum += Matrix[i][j];0
            }
        }
        console.log(sum);
        return Summation(i + 1, Matrix);
    }
}

Summation(0, Matrix);