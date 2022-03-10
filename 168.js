// Algorithm -> Creating Data Structure Method 2
let str = '123helloeveryonehowareyoquallXYZzebraisananimaldontsleepinclassplz';
let obj = {};

for (let i = 0; i < str.length; i++)
{
    let freq = 0;
    for (let j = 0; j < str.length; j++)
    {
        if (str[i] == str[j])
        {
            freq++;
        }
    }
    obj[str[i].toLowerCase()] = freq;
}

console.log(obj);