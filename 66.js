// Find wether a given number is factorial or not (RECURSION)
let number = 720;
FindFactorial(1, number);

function FindFactorial(i, number)
{
    if (i <= number / 2)
    {
        let pi = 1;
        for (let j = 2; j <= i; j++)
        {
            if (pi == number)
            {
                console.log(`Factorial of ${j - 1}`);
                break;
            }
            pi *= j;
        }
        return FindFactorial(i + 1, number);
    }
}