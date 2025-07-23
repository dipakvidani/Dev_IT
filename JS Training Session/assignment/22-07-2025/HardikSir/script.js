//nulish and && oprator
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
console.log(height && 100); // no output

let isLoggedIn = false;

console.log(isLoggedIn || 100); // 100
console.log(isLoggedIn ?? 100); // false
console.log(isLoggedIn && 100); // no output

//if data is not return NA
let data = null;
console.log(data || "NA");

//first iteration 1 to 100 -->even
//second iteration 1 to 100 -->odd

let isEven = true;

for (let i = 0; i < 2; i++) {
  isEven ? console.info("Even") : console.info("Odd");

  for (let j = 1; j <= 100; j++) {
    isEven && j % 2 == 0 && console.log(j);

    !isEven && j % 2 !== 0 && console.log(j);
  }
  isEven = !isEven;
}

//9th count
let ninecount = 0;

for (let i = 1; i <= 100; i++) {
  // i.toString().split("").includes("9") ? ninecount++ : ninecount;
  let strinNumber=i.toString();
  let OG = strinNumber.split("").filter((n) => n == "9");
  // console.log(OG);
  
  OG.length > 0
    ?   ninecount += OG.length
    : ninecount;
}

console.log("ninecount", ninecount);

// console.warn("",Object.fromEntries([{name:"dipak"}]));


//10 th multiplier btw 1 to 100

let tenMultiplier = [];
for (let i = 1; i <= 100; i++) {
  i % 10 === 0 && tenMultiplier.push(i);
}
console.log(tenMultiplier);

//find the root of a number and only give root of full nnum and not decimal without if else
let number = 25;
let root = Math.sqrt(number);

console.log(Number.isInteger(root) ? root : "Not a full number root");
