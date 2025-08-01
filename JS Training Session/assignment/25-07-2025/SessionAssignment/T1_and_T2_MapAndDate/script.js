// Task 1:
// Write a function that accepts an array of values (numbers, strings, etc.).
// Returns an object with all unique values (using Set) and a frequency count of each value (using Map).

console.log(
  "==============================================================================="
);

console.log("Task - 1");

let array = ["Dipak", 1, 2, 3, 3, "Dev IT", "Dev it", "Dev it", 6, 7, 8, 9];

let arraySet = new Set();

array.forEach((ele) => arraySet.add(ele));

console.log("arraySet", arraySet);

let arrayMap = new Map();

for (const element of array) {
  if (arrayMap.has(element)) {
    arrayMap.set(element, arrayMap.get(element) + 1);
  } else {
    arrayMap.set(element, 1);
  }
}

console.log("arrayMap", arrayMap);

console.log(
  "==============================================================================="
);

// Task 2:
// Create a function that parses a given date string.
// Calculates and returns days left from today with a user-friendly message.

console.log("Task - 2");

let date = "26-07-2025";

console.log('date.split("-")' + date.split("-"));

[DD, MM, YYYY] = date.split("-");

let Today = new Date(`${MM}/${DD}/${YYYY}`);

console.log("Today", Today);

function parseDate(date) {
  return Date.parse(date);
}

function dayLeft(futureDate) {
  //   console.log(date.split("-"));

  [DD, MM, YYYY] = futureDate.split("-");

  let futureDateInMs = new Date(`${MM}/${DD}/${YYYY}`);
  console.log("futureDateInMs", futureDateInMs);

  let nowInMs = new Date();
  console.log("nowInMs", nowInMs);

  let daysLeftInMs = futureDateInMs - nowInMs;
  console.log("daysLeftInMs", daysLeftInMs);

  let oneDayInMs = 1000 * 60 * 60 * 24;
  console.log("oneDayInMs", oneDayInMs);

  let dayLeftInDays = daysLeftInMs / oneDayInMs;
  console.log("dayLeftInDays", dayLeftInDays);

  console.log("Math.ceil(dayLeftInDays)", Math.ceil(dayLeftInDays));

  return `In ${futureDate} Total ${Math.ceil(dayLeftInDays)} are Left ...`;
}

console.log(dayLeft("30-07-2025"));

console.log(
  "========================================================================"
);

let datePikker = document.getElementById("datePikker");
let calculateDayLeft = document.getElementById("calculateDayLeft");

datePikker.addEventListener("input", (e) => {
  let date = e.target.value;
  // let toda

  console.log("date", date);

  let [YYYY, MM, DD] = date.split("-");
  let formattedDate = `${DD}-${MM}-${YYYY}`;

  console.log(`dayLeft(${formattedDate}) : `, dayLeft(formattedDate));

  calculateDayLeft.innerText =
    `Today's Date is ${new Date().getDate()} dayLeft(${formattedDate}) :` + `${dayLeft(formattedDate)}`;
});


console.log("===================================================================");
