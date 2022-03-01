import { pid } from "process";
import fs from "fs/promises";


try {
    setInterval(() => {
        console.log("Hello World ");
    }, 3000);

    await fs.writeFile("process.txt", JSON.stringify(pid));
} catch (error) {
    console.log(error);
}
