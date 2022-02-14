// Practising using GitHub API
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
    response.data.forEach((ele) => {
        axios.get(`https://api.github/${ele.login}`, {auth : {username : "ishaankaushik91", password : "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"}})
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    })
})
.catch((error) => {
    console.log(error);
})