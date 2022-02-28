// M4 1st problem (LOOP)
import axios from "axios";
import fs from "fs/promises";

function ping()
{
    return axios.get(`https://gist.githubusercontent.com/yoobi55/5d36f13e902a75225a39a8caa5556551/raw/cbd57cfdddbdfc009fd9ccdadf5fb7129af71c73/restaurant-data.json`)
}

async function Solution()
{
    try {

        let Res = await fs.readFile("res.json");
        Res = JSON.parse(Res);
        let WholeData = Res.restaurants[0];
        let Time = WholeData.operating_hours;
        console.log(Time);
        let Splitted = Time.Monday.split("-")[0];

    } catch (error) {
        console.log(error);
    }
}

Solution();

/*

let Tester = Res.restaurants[0].reviews, Count = 0, Sum = 0;

        // Algorithm to put AvgRating key om reviews
        for (let i = 0; i < Tester.length; i++)
        {
            Sum += Tester[i].rating;// All  Ratings of a cafe
            Count++;
        }
        Tester.push({"avgRating": Sum/Count});
        console.log(Tester);

*/