// 11.js in another way of async - await where we are using 2 functions 1 for returning promise, 2nd for consuming
import axios from "axios";
function Ping() {
  // function returning promise
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

async function Consume() {
  // async coz its consuming & they gotta b in pairs so
  try {
    // Same try to consume
    let res = await Ping();
    let answer = [];

    for (let i = 0; i < res.data.length; i++) {
      if (i == 10) {
        answer.push(i);
      }
      console.log(answer);
    }
  } catch (error) {
    console.log(error);
  }
}

Consume();
