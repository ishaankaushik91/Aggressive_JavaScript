// Dsiplay in Format (RECURSION)
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
Proper(0, color);

function Proper(i, arr) {
  if (i < arr.length) {
    console.log(`${i + 1} choice is ${arr[i]}`);
    return Proper(i + 1, arr);
  }
}
