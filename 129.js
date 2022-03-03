// Forcefully making all numbers even in Array (RECURSION)
function Even(number)
{
    if (number % 2)
    {
        return Even(number + 1);
    }
    console.log(number);
}

function Changing(index, Array)
{
    if (index < Array.length)
    {
        Even(Array[index]);
        return Changing(index + 1, Array);
    }
}

let Array = [1, 3, 5, 7, 11, 13, 15, 17, 19];
Changing(0, Array);