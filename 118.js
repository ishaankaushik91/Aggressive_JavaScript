// Printing reverse of Matrix (RECURSION)
let Matrix = [
    [1, 2, 3, 4, 5], 
[6, 7, 8, 9, 10]];

function reverse(index, Matrix)
{
    if (index >= 0)
    {
        for (let j = 4; j >= 0; j--)
        {
            console.log(Matrix[index][j]);
        }
        return reverse(index - 1, Matrix);
    }
}

reverse(1, Matrix);