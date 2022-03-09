// Deletion of all even numbers in Array (LOOP)
let Array = [1, 2, 3, 3, 3, 6, 8, 11, 13];

for (let i = 0; i < Array.length; i++)
{
    for (let j = 0; j < Array.length; j++)
    {
        if (Array[j] % 2 == 0)
        {
            for (let k = j; k < Array.length; k++)
            {
                Array[k] = Array[k + 1];
            }
        }
    }
}
console.log(Array);