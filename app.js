const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Starting app.js");

let numbers = [2, 7, 10, 15, 42, 101];

for (let i = 0; i < numbers.length; i++) {
  let n = numbers[i];
  if (isEven(n)) {
    console.log(n + " is even");
  } else {
    console.log(n + " is odd");
  }
}

log("Done checking numbers");