// Generating AP series with difference of 3 (RECURSION)
function AP(number)
{
    if (number <= 100)
    {
        console.log(number);
        return AP(number + 3);
    }
}

AP(1);