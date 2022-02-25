// Algorithm Practice
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

for (let i = 0; i < words.length; i++)
{
    if (words[i][0] == 'a' || words[i][0] == 'e' || words[i][0] == 'i' || words[i][0] == 'o' || words[i][0] == 'u')
    {
       console.log(words[i]); 
    }
}