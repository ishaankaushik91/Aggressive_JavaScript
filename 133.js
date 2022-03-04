import readlineSync from "readline";
import fs from "fs/promises";

let a = new Date('Fri Mar 04 2022 18:00:00 GMT+0530');
let b = new Date();
console.log((a - b) / (1000 * 60 * 60));
let c = a - 7;
console.log(new Date(c));