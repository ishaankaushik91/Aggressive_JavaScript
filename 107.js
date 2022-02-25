// Asynchronous Programming Practice
import axios from "axios";

function Ping() {

    return axios.get("https://jsonplaceholder.typicode.com/posts")
}

Ping()
.then((Response) => {
    
    let Titles = [];
    Response.data.forEach((Element) => {
        Titles.push(Element.title);
    });
    
    return Titles;
})
.then((All) => {
    let All_Length = All.map((Element) => Element.length);
    return All_Length;
})
.then((Lengths) => {
    console.log(Lengths);
})
.catch((Error) => {
    console.log(Error);
})