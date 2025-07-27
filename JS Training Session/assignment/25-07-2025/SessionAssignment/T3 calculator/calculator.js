// Task 3:
// Build a mini calculator that uses callbacks.


//using callbacks
function Calculator(expression, callbackMap) {
  const numbers = expression.match(/[0-9.]+/g).map(Number);

  const operator = expression.match(/[\+\-\*\/\%\^]/)[0];

  if (!numbers || numbers.length < 2 || !operator) {
    console.log("Invalid expression");
    return;
  }

  if (callbackMap[operator]) {
    const result = callbackMap[operator](numbers[0], numbers[1]);
    console.log(`${numbers[0]} ${operator} ${numbers[1]} = ${result}`);
  } else {
    console.log("Invalid operator");
  }
}

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b !== 0 ? a / b : "Error: Divide by zero"),
  "%": (a, b) => a % b,
  "^": (a, b) => Math.pow(a, b),
};

Calculator("2.3/23", operations);


//using eval function
function calculate(expression) {
  try {
    const result = eval(expression);
    console.log(`${expression} =${result}`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

calculate("2+3+8*58");
