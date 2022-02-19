// Sigma n (RECURSION)
function Summation(start, end)
{
    if (start <= end)
    {
        return start + Summation(start + 1, end);
    }
    return 0;
}
console.log(Summation(1, 10));