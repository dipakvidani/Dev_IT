const arr = [0, 1, 3, 4, 10];

let lastValue = arr[arr.length - 1];
let missingValues = [];

for (let i = 0; i <= lastValue; i++)  !arr.includes(i) ? missingValues.push(i) : "Hehe!!";


console.info("Missing Values Are : ", missingValues);
