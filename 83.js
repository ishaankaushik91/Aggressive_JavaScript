// Sum of all odd elements of an Matrix (LOOP)
let Matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];

let sum = 0;

for (let i = 0; i < Matrix.length; i++)
{
    for (let j = 0; j < Matrix[i].length; j++)
    {
        if (Matrix[i][j] % 2 != 0)
        {
            sum += Matrix[i][j];
        }
    }
}
console.log(sum);