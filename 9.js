// Promise Practise
function havefun(num)
{
    return new Promise((resolved, reject) => {
        if (num <= 10000/2)
        {
            setTimeout(() => {
                resolved(`I am coming out after ${num} milliseconds\n`);
            }, num);
        }
        else
        {
            reject("Time should be less than or equal to 5 seconds\n");
        }
    })
}

havefun(100)
.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.log(error);
})