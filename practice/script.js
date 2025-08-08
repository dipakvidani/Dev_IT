const settings = {
  theme: "dark",
  autosave: true,
};

let userInput = "theme";
console.log(settings[userInput]); // "dark" ✅ dynamic access

// console.log(settings.userInput); ❌ undefined

// console.log(...settings);

console.log(settings.theme?.dark);

settings["[1,2,3]"] = "Diapk";

console.log(settings);

// let users = [1,2,3,4,5,6];
// let result = users.find(user => user===10);
// console.log("result", result); // {id: 2}

let users = [{ id: 1 }, { id: 2 }];
let result = users.filter((user) => user.id == 1);
console.log("result", result);

let date = new Date();

console.log(date);
console.log("Get Full Year :" + date.getFullYear());
console.log("get date :" + date.getDate());
console.log("get date :" + date.getDay());
console.log("get date :" + date.getMonth());
console.log("get date :" + date.getHours());

const map = new Map();
const map2 = new Map([
  ["a", 1],
  ["b", 2],
]);
const map3 = new Map([[["a", 1]]]);

console.log(map2);
console.log(map3);
let obj = {};

console.log(Reflect.set(obj, "x", 50));

console.log(Math.floor(Math.random() * (2 - 1 + 1)) + 1);

console.log(Number.MAX_VALUE);
console.log(5 + +"5");

let buffer = new ArrayBuffer(8); // 8 bytes
let view = new DataView(buffer); // Create DataView

view.setUint8(0, 255); // Write 1 byte at offset 0
view.setInt16(1, 300, true); // Write 2 bytes at offset 1 (little-endian)

console.log(view.getUint8(0)); // 255
console.log("grtInt16 :" + view.getInt16(0, true)); // 300

let str = "1 2 3 ";
let replaedStr=str.replaceAll(" ","")

console.log(str.replaceAll(" ",""));
console.log(replaedStr);

