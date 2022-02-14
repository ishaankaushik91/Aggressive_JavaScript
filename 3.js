// Before Practising Promises I need to know that a function can return promises & an object also a promise is
// an object
import axios from "axios";

// Now that I know that function can return an object & function, therefore this proves that promise is an object
// having functions in it. In terms of axios, axios is a promise having get as function in it.
// .then((r)) & catch((e)) are callback functions to consume the promise axios.

function HitApi()
{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) =>  {
        console.log(error);
    })
}

HitApi();