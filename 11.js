// async - await helps in consuming promise
// But it has got some rules, which are :
// 1) async - await works with pair, if you are waiting for async activity then you have to be in an
// async function
// 2) If I want to consume a promise in the same funcion then only the function returnin promise has to be
// async
// 3) Instead of then & catch we have to perform algorithms in try-catch blocks
// NOTE : The best thing about async - await is that the task after await will only work after response
// like it makes things synchronous

// 10.js in async - await
import axios from "axios";
async function Ping() {
  // returning promise & getting consumed in same function so async function
  // try --> Try this if it's correct
  try {
    let code = [];
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts"); // We are awaiting for response
    // Below only executes when await is conmpleted
    for (let i = 0; i < res.data.length; i++) {
      if (i == 10) 
      {
        code.push(i);
      }
    }
    console.log(code);
  } catch (error) {
    // If there's an error then execute this
    console.log(error);
  }
}

Ping();
