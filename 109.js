// Asynchronous Programming Practice
// This also proves why res.data works while consuming axios
function Data(Income) {
  return new Promise((resolved, reject) => {
    if (Income > 1000000) {
      let Obj = { Data: { Chairman: "Ishaan", "Net Worth": "$1Billion" } };
      resolved(Obj);
    } else {
      reject("Do more pls!");
    }
  });
}

async function WealthyIshaan() {
  try {
    let Portfolio = await Data(10000000);
    console.log(Portfolio.Data);
  } catch (error) {
    console.log(error);
  }
}

WealthyIshaan();
