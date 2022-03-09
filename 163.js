// Insertion of element in matrix at a specific position (LOOP)
let matrix = [
    [12, 11, 101, 12],
    [10, 21, 22, 1]
];

Insertion(matrix, 0, 2, 3);

function Insertion(matrix, row, column, number)
{
    for (let i = (matrix.length - 1); i >= row; i--)
    {
        for (let j = (matrix[i].length - 1); j >= column; j--)
        {
            matrix[i][j + 1] = matrix[i][j];
        }
    }
    matrix[row][column] = number;
    console.log(matrix);
}