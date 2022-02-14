// Creating custom promises
// Same thing, a promise can either be fulfilled or b rejected
function havefun()
{
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved("I am coming out after 5 seconds\n");
        }, 5000);
    })
}

havefun()
.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.log(error);
})