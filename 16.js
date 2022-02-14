// Joining all elements of an Array (RECURSION)
let  myColor = ["Red", "Green", "White", "Black"];

console.log(N(0, myColor));

function N(i, color)
{
    if (i < color.length)
    {
        return color[i] + N(i + 1, color);
    }
    return "";
}