// Date-14/07/2025 

let student = {
  age: 25,
  name: "Dipak",
  city: "Botad",
  state: "Gujarat"
}
// // object.city

console.log(JSON.stringify(student));   //coverted to json

console.log(JSON.parse(JSON.stringify(student)));   //converted json to string


// Q1 Create an ArrayBuffer of 8 bytes and set first 4 bytes as a 3-bit integer value of 100. Then read and print it.

const buffer = new ArrayBuffer(8);
console.log(buffer);
const view = new DataView(buffer);
console.log(view);

view.setInt32(0, 100);  //setInt(offset,number_to_add)
console.log(view);

const value = view.getInt32(0);   //getInt(offset)

console.log(value);

// Q2 Create 3 different types of events each with one example
//  const btn = document
//   .getElementById("btnn")
//   .addEventListener("mouseover", function () {
//     console.log("Inside of the button");
//   });
// const btn1 = document
//   .getElementById("btnn")
//   .addEventListener("mouseout", function () {
//     console.log("You got out of the button");
//   });
// const btn2 = document
//   .getElementById("txt")
//   .addEventListener("keypress", function () {
//     console.log("Key pressed");
//   }); 

// Q3 convert the following obj into JSON string and log it in the console: {name:'Shashwat', age: 22, isAdmin:true};
let info = { name: "Shashwat", age: 22, isAdmin: true };
let jsonStr = JSON.stringify(info);

console.log(jsonStr);

// Q4 Srting  --->  json
let productInput = '{"product":"Book", "price":99, "inStock":true}';
let jsParse = JSON.parse(productInput);

console.log(jsParse);

// Q5 check is the number is iteger or not
let Check_isNumberInteger = 45;
console.log(Number.isInteger(Check_isNumberInteger));

// Q6 check the regex expression for the name only in charcater
function isInputValid(input) {
  let regex = /^[A-Z]+$/;
  return regex.test(input);
}
let Input1 = "SHASHWAT";
let Input2 = "SHASHWAT BOI";
let Input3 = "SHASHWATBhai";
console.log(`${Input1} ` + isInputValid(Input1));
console.log(`${Input2} ` + isInputValid(Input2));
console.log(`${Input3} ` + isInputValid(Input3));

// Extra Question

// Q1 is the number is even or odd without using if else or inbuilt function 
let Number_for_check_odd_even = 5;

(!(Number_for_check_odd_even % 2)) ?
  console.log(`${Number_for_check_odd_even} is even`)
  :
  console.log(`${Number_for_check_odd_even} is odd`);
;


// Q2 From a given string find the frequency of each character inside of the string
function CountCharFrequency(name) {
  let frequancy_count = {};

  for (let i = 0; i < name.length; i++) {
    let char = name[i];
    if (frequancy_count[char]) {
      frequancy_count[char]++;
    } else {
      frequancy_count[char] = 1;
    }
  }
  return frequancy_count;
}

console.log(CountCharFrequency("shashwat"));
