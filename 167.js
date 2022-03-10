import http from 'http';
import url from "url";

let data = [
    {
        "name" : "Johnny",
        "age" : 35
    }
]

let port = 5000;

let server = http.createServer((req, res) => {
    
    let pathName = url.parse(req.url, true);
    let name = pathName.path;
    
    let trimmedPath = name.split('/').filter(ele => ele != '').join('/');
    console.log(req.method);
    console.log(trimmedPath);
    
})

server.listen(port, () => {
    console.log(`server started at ${port}`);
})