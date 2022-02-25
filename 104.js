// Asynchronous Programming Practice
import axios from "axios";
import { rmSync } from "fs";

function Ping() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

Ping()
  .then((Response) => {
    let Lattitude = [],
      Longitude = [];
    Response.data.forEach((Element, index) => {
      if (index % 2 == 0) {
        Lattitude.push(Element.address.geo.lat);
        Longitude.push(Element.address.geo.lng);
      }
    });
    console.log(Lattitude);
    console.log(Longitude);
  })
  .catch((Error) => {
    console.log(Error);
  });