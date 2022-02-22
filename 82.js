// Sum of all elements in a Matrix (RECURSION)
let Matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];

function Summation(i, Matrix)
{
    if (i < 3)
    {
        let sum = 0;
        for (let j = 0; j < 4; j++)
        {
            sum += Matrix[i][j];
        }
        console.log(sum);
        return Summation(i + 1, Matrix) + sum;
    }
}

Summation(0, Matrix);