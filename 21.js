// Product & Sum of Array elements (LOOP)
let Array = [], sum = 0, pi = 1;
for (let i = 0; i < 100; i++)
{
    Array[i] = (i + 1) * 10**3;
    pi *= Array[i];
    sum += Array[i];
}
console.log("Sum = ", sum, "Product = ", pi);