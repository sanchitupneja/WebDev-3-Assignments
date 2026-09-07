const crypto = require("crypto");
const fs = require("fs");

let rolls = Number(process.argv[2]) || 1;

for (let i = 0; i < rolls; i++) {
  let diceValue = crypto.randomInt(1, 7);
  console.log("Dice Rolled: " + diceValue);

  fs.appendFileSync("dice-history.txt", "Dice Rolled: " + diceValue + "\n");
}