// Forcefully making all numbers even in Array (LOOP)
function Even(number)
{
    while (number % 2)
    {
        number += 1
    }
    console.log(number);
}

let Array = [1, 3, 5, 7, 11, 13, 15, 17, 19];

for (let i = 0; i < Array.length; i++)
{
    Even(Array[i]);
}