// Validate Fibonnaci (RECURSION)
function Fibonnaci(number, index, n1, n2)
{
    if (index <= 10)
    {   
        if (number == n2 || number == n1)
        {
           console.log(`${number} has fibonnaci index of ${index}`);
           return;
        }
        n1 = n2;
        n2 = n2 + n1;
        return Fibonnaci(number, index + 1, n1, n2);
    }
}

Fibonnaci(16, 0, 0, 1);