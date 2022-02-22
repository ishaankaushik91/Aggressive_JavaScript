import axios from "axios";

function ping() {
  return axios.get(`http://59.92.225.188/`);
}

try {
  let res = await ping();
  let Data = res.data;
  let income = -1;

  for (let i = 0; i < Data.length; i++)
  {
      if (Data[0] < Data[i])
      {
          Data[0] = Data[i];
      }
  }
  console.log(Data[0].salary);
  
} catch (error) {
  console.log(error);
}
