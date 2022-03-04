// Printing Pattern (RECURSION)
function outer(start, end, value)
{
    if (start <= end)
    {
        value += start;
        console.log(value);
        return outer(start + 1, end, value);
    }
}

outer(1, 5, "");