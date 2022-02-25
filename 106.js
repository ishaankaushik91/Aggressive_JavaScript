// Asynchronous Programming Practice
import axios from "axios";

function Ping() {

    return axios.get("https://jsonplaceholder.typicode.com/posts")
}

Ping()
.then((Response) => {

    let Arr = Response.data, Result = [];

    for (let i = 0; i < Arr.length; i++)
    {
        let Temp = [];
        for (let j = 1; j <= 10; j++)
        {
            Temp.push(Arr[j].title);
        }
        Result.push(Temp);    
    }
    console.log(Result);
    
})
.catch((Error) => {
    console.log(Error);
})