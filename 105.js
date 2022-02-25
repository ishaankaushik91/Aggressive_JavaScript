// Asynchronous Programming Practice
import axios from "axios";

async  function Ping() {

    try {
        let Response = await axios.get("https://jsonplaceholder.typicode.com/users");
        let Longitude = [], Lattitude = [];
        Response.data.forEach((Element, index) => {
            if (index % 2 == 0)
            {
                Longitude.push(Element.address.geo.lng);
                Lattitude.push(Element.address.geo.lat);
            }
        })
        console.log(Lattitude);
        console.log(Longitude);
    } 
    catch (error) {
        console.log(error);
    }
}

Ping()
console.log("Ishaan will score 9+ MGPA in MAT 5");