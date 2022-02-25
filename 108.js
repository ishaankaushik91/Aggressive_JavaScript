// Asynchronous Programming Practice
import axios from "axios";

function Ping() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

async function Consume() {
  try {
    let Response = await Ping();
    let Titles = Response.data.map((Element) => Element.title);
    let Lengths = Titles.map((Element) => Element.length);
    console.log(Lengths);
  } catch (error) {
    console.log(error);
  }
}
Consume();
