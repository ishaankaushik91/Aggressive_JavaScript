// Insertion of a given number in Array at a specific index (LOOP)
function Insertion(num, position, Array)
{
    for (let i = Array.length - 1; i >= position; i--)
    {
        Array[i + 1] = Array[i];
    }
    Array[position] = num;
    console.log(Array);
}

let A = [1, 2, 3, 4];
Insertion(5, 2, A);