//Q1 Write a function checkKeyword(str, keyword) that returns true if the keyword is found in the given str, case-insensitive.
// checkKeyword("Hello World", "world"); // true

//Q2  -Create a function getWeekNumber(date) that returns the ISO 8601 week number of a given date.
//      -daysBetween("2025-07-01", "2025-07-23"); // 22

// getWeekNumber(new Date("2025-01-01")); // Week 1
// getWeekNumber(new Date("2025-12-31")); // Week 1 or 53 depending

// Write a function daysBetween(date1, date2) that calculates and returns the number of full days between the two dates.
// daysBetween("2025-07-01", "2025-07-23"); // 22

//Q3 Write a function cleanNames(str) that takes a comma-separated string and returns an array of trimmed
// cleanNames(" John , Jane , Bob ") // ["John", "Jane", "Bob"]

//

//Q4 Create a countdown timer that counts down from 10 to 0 in the console using setInterval(), and logs "Done!" when finished.

//Q5  Create a class Car with a static property totalCars and a const object inside a function.

//Q8  Explain when to use static vs const.

// Q9 Write a function parseCSV(str) that:

// Converts a comma-separated string to an array

// Trims each item

// Filters out empty strings

// parseCSV(", apple , banana , , cherry ") // ["apple", "banana", "cherry"]

// ===================================================================================================================================================

//Q1 Write a function checkKeyword(str, keyword) that returns true if the keyword is found in the given str, case-insensitive.
// checkKeyword("Hello World", "world"); // true

function handleSearch(e) {
  e.preventDefault();

  let userStr = document.getElementById("userStr").value;
  let keyword = document.getElementById("keyword").value;

  checkKeyword(userStr, keyword);
}

function checkKeyword(str, keyword) {
  let isKeywordIncluded = str.toLowerCase().includes(keyword.toLowerCase());

  let checkKeywordFeedback = document.getElementById("checkKeywordFeedback");
  checkKeywordFeedback.innerText = "";

  checkKeywordFeedback.classList = isKeywordIncluded
    ? "text-success fw-bold"
    : "text-danger fw-bold";

  checkKeywordFeedback.innerHTML = isKeywordIncluded
    ? `${keyword} is included in  to ${str}`
    : `${keyword} is not included in  to ${str}`;
}

console.log("===============================================");

// ================================================================================================================================================================

//Q2  Create a function getWeekNumber(date) that returns the ISO 8601 week number of a given date.

function getWeekNumber(anyDate) {
  let today = new Date(anyDate);
  console.log("today ", today);

  let firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  console.log("firstDayOfYear ", firstDayOfYear);

  let totalDayPassedInMs = Math.abs(today - firstDayOfYear);

  console.log("totalDayPassedInMs ", totalDayPassedInMs);

  let daysPassed = Math.floor(totalDayPassedInMs / (1000 * 60 * 60 * 24)); //Bcz day value can not be next we must take it lower with points

  console.log("daysPassed ", daysPassed);

  let weekPassedTillDate = Math.ceil(daysPassed / 7);

  console.log("weekPassedTillDate", weekPassedTillDate);

  return `This is Week number ${weekPassedTillDate} of year ${today.getFullYear()}`;
}

const today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1; // getMonth() returns 0-indexed month
let year = today.getFullYear();

// Add leading zeros if day or month is a single digit
if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}

// const todayFormattedDate = `${day}/${month}/${year}`;

console.log(getWeekNumber(`${year}-${month}-${day}`));

console.log("==================================================");

// console.log(todayFormattedDate);

// getWeekNumber(today);

// console.log(new Date().getMonth());

// ==================================================================================================================================================================

//Q3 daysBetween("2025-07-01", "2025-07-23"); // 22

function daysBetween(dt1, dt2) {
  let date1 = new Date(dt1);
  let date2 = new Date(dt2);

  console.log(`days btw ${dt1} and ${dt2} Function...`);

  let dateDiffranceInMs = Math.floor(Math.abs(date2 - date1));
  console.log("dateDiffranceInMs ", dateDiffranceInMs);

  let dateDiffranceInDay = dateDiffranceInMs / (1000 * 60 * 60 * 24);
  console.log("dateDiffranceInDay ", dateDiffranceInDay);

  return `day btw ${dt1}-${dt2} is ${dateDiffranceInDay}`;
}

console.log(daysBetween("2025-07-01", "2025-07-23"));

console.log("======================================================");

// ==================================================================================================================================================================

// Q3 Write a function cleanNames(str) that takes a comma-separated
//                             string and returns an array of trimmed
// cleanNames(" John , Jane , Bob ") // ["John", "Jane", "Bob"]

function cleanNames(str) {
  let strArraySepratedFromComaa = str.split(","); //[ ' John ', ' Jane ', ' Bob ' ]
  console.log("strArraySepratedFromComaa", strArraySepratedFromComaa);

  let arrayWithTrimmedElement = strArraySepratedFromComaa.map((el) =>
    el.trim()
  );

  console.log("arrayWithTrimmedElement", arrayWithTrimmedElement);
}

cleanNames(" John , Jane , Bob ");

console.log("=======================================================");

// ================================================================================================================================================

//Q4 Create a countdown timer that counts down from 10 to 0 in the console using setInterval(), and logs "Done!" when finished.
let countDown = 10;

const countDownInterval = setInterval(() => {
  console.log("countDown", countDown);
  countDown--;

  if (countDown < 0) {
    clearInterval(countDownInterval);
    console.log("Done!");
  }
}, 1000);

// ================================================================================================================================================

//Q5  Create a class Car with a static property totalCars and a const object inside a function.

class Car {
  static staticTotalCars = 30;

  constructor(staticTotalCars){
    this.staticTotalCars=staticTotalCars;
  }
}

// console.log("staticTotalCars ",Car.staticTotalCars);

// let toyato=new Car(25);

// console.log("staticTotalCars ",toyato.staticTotalCars);  //25

Car.staticTotalCars=333;

console.log("staticTotalCars ",Car.staticTotalCars);





function getDetatils() {
  const Engine = {
    model:"v8",
    year:"2025"
  };
}


