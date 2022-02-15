// Difference of two arrays (RECURSION)
let A1 = [1021, 2132, 3412313 , 12], A2 = [812, 112, 55, 1];

Difference(0, A1, A2);

function Difference(i, a1, a2)
{
    if (i < a1.length)
    {
        console.log(a1[i] - a2[i]);
        return Difference(i + 1, a1, a2);
    }
    return 0;
}