// Algorithm -> Creating Data Structure Method 2
let str = "123helloeveryonehowareyoquallXYZzebraisananimaldontsleepinclassplz";
let obj = {};

str = str.toLowerCase().split(" ").join("").split("");
str = str.filter((ele) => isNaN(parseInt(ele)));

str.forEach((ele) => {
  let freq = 0;
  str.forEach((chars) => {
    if (ele == chars) {
      freq++;
    }
  });
  obj[ele] = freq;
});

console.log(obj);
