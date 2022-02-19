// Prime Factors of a Number (LOOP)

let num = 117;

for (let j = 2; j <= num; j++)
{
    if (num % j == 0 && PrimeCheck(j))
    {
        console.log(j);
    }
}

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}
