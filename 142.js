// Frequency of all elements in array (LOOP)
let Arr = [1, 2, 3, 12, 11, 1, 2, 4, 3, 100, 19, 100, 91, 19];

for (let i = 0; i < Arr.length; i++)
{
    let Frequency = 0;
    for (let j = 0; j < Arr.length; j++)
    {
        if (Arr[i] == Arr[j])
        {
            Frequency++;
        }
    }
    console.log("Frequency of %d", Arr[i], Frequency);
}