const log = require("./modules/logger");

// argv[0] is node, argv[1] is this file, so actual args start from index 2
let operation = process.argv[2];
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);

log("Calculator started");

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("Please enter proper input");
  console.log("Example: node calculator.js add 10 5");
} else {
  let result;

  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "sub") {
    result = num1 - num2;
  } else if (operation === "mul") {
    result = num1 * num2;
  } else if (operation === "div") {
    if (num2 === 0) {
      console.log("Cannot divide by zero");
      result = undefined;
    } else {
      result = num1 / num2;
    }
  } else {
    console.log("Invalid operation. Use add, sub, mul or div");
    result = undefined;
  }

  if (result !== undefined) {
    console.log("Result: " + result);
  }
}