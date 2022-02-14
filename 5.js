// Practising on API of axios algorithms
import axios from "axios";

function HitApi()
{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        let Resultant = [];
        for (let i = 0; i < response.data.length; i++)
        {
            let Title = response.data.map((ele) => ele.title);
            let User = response.data.map((ele) => ele.userId);
            Resultant.push(Title, User);
        }
        console.log(Resultant);
    })
    .catch((error) =>  {
        console.log(error);
    })
}

HitApi();