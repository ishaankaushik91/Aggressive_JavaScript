// Breaking the given amount of money into notes of 100, 50 & 20 notes (RECURSION)
import readline from "readline-sync";

let Money = readline.questionInt(`Enter money : `);

function BreakUp(rupees, hundered, fifty, twenty) {
  if (rupees >= 1) {
    if (rupees >= 100) {
      rupees = rupees - 100;
      return hundered + BreakUp(rupees, hundered + 1, fifty, twenty);
    } else if (rupees >= 50) {
      rupees = rupees - 50;
      return fifty + BreakUp(rupees, hundered, fifty + 1, twenty);
    } else if (rupees >= 20) {
      rupees = rupees - 20;
      return twenty + BreakUp(rupees, hundered, fifty, twenty + 1);
    }
  }
  console.log(hundered, fifty, twenty);
}

BreakUp(Money, 0, 0, 0);
