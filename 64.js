// Storing Factorials in Array (RECURSION)
let Arr = [];
Store(0, Arr);
console.log(Arr);

function Store(i, Arr)
{
    if (i < 10)
    {
        Arr[i] = Factorials(i + 1);
        return Store(i + 1, Arr);
    }
}

function Factorials(num)
{
    if (num >= 1)
    {
        return num * Factorials(num - 1);
    }
    return 1;
}