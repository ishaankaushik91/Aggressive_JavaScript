// Union of two arrays (RECURSION)
let array1 = [1, 0, 2, 3, 4],
  array2 = [3, 5, 2, 2, 8];

Union(0, array1, array2);

function Union(i, array1, array2)
{
    if (i < array1.length)
    {
        let Check = 1;
        for (let j = 0; j < array2.length; j++)
        {
            if (array1[i] == array2[j])
            {
                Check = 0;
                break;
            }
        }
        if (Check)
        {
            console.log(array1[i], array2[i]);
        }
        return Union(i + 1, array1, array2);
    }
}