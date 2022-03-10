import http from 'http';
import fs from "fs/promises";

let port = 5000;
var counter = 0;

let server = http.createServer(async (req, res) => {
    
    if (counter == 30)
    {   
        if (req.socket.remoteAddress == "::ffff:59.92.225.188")
        {
            res.end("Limit exceeded bro");
        }
    }

    let fileData = await fs.readFile("res.json");
    res.setHeader('Content-Type', 'application/json');
    res.end(fileData);
    ++counter;
    console.log(counter);
    //console.log(req.socket.localAddress);
    console.log(req.headers);
    console.log(req.socket.remoteAddress);
    
})

server.listen(port, () => {
    console.log(`server started at ${port}`);
})