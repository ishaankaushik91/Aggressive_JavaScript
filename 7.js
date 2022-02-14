// Since response from server is not in order, we have something called Promis.all() which takes 
// an array of pending promises and gives then in order as there in API
import axios from "axios";

function Ping()
{
    return axios.get(`https://api.github/users`, {
        auth : {
            username : "ishaankaushik91",
            password : "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"
        }
    })
}

Ping()
.then((response) => {
    let Pending = response.data.map((ele) => axios.get(`https://api.github/${ele.login}`))
    console.log(Pending);
})
.catch((error) => {
    console.log(error);
})