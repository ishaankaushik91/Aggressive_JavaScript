// Insertion of a given number in Array at a specific index (RECURSION)
function Insertion(index, Array, number, position)
{
    if (index >= position)
    {
        Array[index + 1] = Array[index];
        return Insertion(index - 1, Array, number, position);
    }
    Array[position] = number;
    console.log(Array);
}

let A = [1, 2, 3, 4];
Insertion(A.length - 1, A, 5, 2);