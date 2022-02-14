// Async - await is a way to consume promises 
// This is more benificial than .then() & .catch() in then-catch block you can't get the output
// of an async activity coz the pending promise is in event loop

// Disadvantage of then & catch block
import axios from "axios";
function Ping()
{
    return axios.get("https://jsonplaceholder.typicode.com/posts")
}

Ping()
.then((response) => {
    let Arr = [];
    for (let i = 0; i < response.data.length; i++)
    {
       if (i == 10)
       {
            Arr.push(response.data[i]);
       }
       console.log(Arr); // Prints empty array and then stores 
       // Since printing "Arr" is an async activity it gets executed before pushing & we don't get data properly
       // A solution is setTimeout which is non pragmatic
    }
})