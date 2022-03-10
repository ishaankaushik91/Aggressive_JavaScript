// Algorithm -> Creating Data Structure Method 2
let str = "123helloeveryonehowareyoquallXYZzebraisananimaldontsleepinclassplz";
str = str.toLowerCase().split(" ").join("").split("");
str = str.filter((ele) => isNaN(parseInt(ele)));
let obj = {};

let char, charCount;
for (let i = 97; i <= 122; i++)
{
    char = String.fromCharCode(i);
    charCount = charFreq(char);
    obj[char] = charCount;
}
console.log(obj);

function charFreq(char)
{
    return str.split('').reduce((count, ch) => (ch == char) ? ++count : count, 0);
}