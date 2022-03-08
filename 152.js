// frequency of all prime elements in array (Declarative Paradigm)
let array = [
  [1, 2, 3, 4],
  [6, 8, 9, 10],
  [3, 43, 34, 11],
];

array.forEach((Element) => {
  Element.forEach((nums) => {
    let freq = 0;
    array.forEach((sub) => {
      sub.forEach((bums) => {
        if (bums == nums && PrimeCheck(nums)) {
          freq++;
        }
      });
    });
    console.log("Frequency of", nums, "=", freq);
  });
});

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}
