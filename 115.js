import fs from "fs/promises";
import { kill } from "process";

try {
    
        let Out = fs.readFile("process.txt");
        Out = JSON.parse(Out);

        kill(Out);
        console.log("killed");


} catch (error) {
    console.log(error);
}