// Splitting Array into given size & converting it to a multi-dimensional Matrix (LOOP)
let Arr = [1, 2, 3, 4, 5];
let res = [];

for (let i = 0; i < Arr.length; i++)
{
    let temp = [];
    temp.push(Arr[i], Arr[i + 1]);
    res.push(temp);
}

for (let j = 0; j < res.length; j++)
{
    for (let k = 0; k < res[j].length; k++)
    {
        for (let l = 0; l < res.length; l++)
        {
            
        }
    }
}