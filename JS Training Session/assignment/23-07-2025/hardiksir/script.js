//Q1 sentence if word length grater than 4 it reverse

const sentance = "Hello , my name is Dipak Vidani";

// console.log(sentance.split(" "));

console.log(
  sentance
    .split(" ")
    .map((word) =>
      word.length >= 4 ? word.split("").reverse().join(""): word
    ).join(" ")
);

// console.log("DIPAK".reverse());



//Q2 spread a multidimentional array into one 

const multidarray=[1,2,[3,4,[5,6,[7,8]]]];

// console.log(multidarray.flat(Infinity));

const flatArr = JSON.stringify(multidarray)
  .replace(/\[|\]/g, "") 
  .split(",") 
  .map(Number); 

console.log(flatArr);

//find if the power of 2 or not
function isPowerOfTwo(x) {
    return (Math.log(x)/Math.log(2)) % 1 === 0; //return the number after point
}


console.log("isPowerOfTwo(11) " , isPowerOfTwo(11)?"is Power of two":"is not Power of two");
console.log("isPowerOfTwo(4) " , isPowerOfTwo(4)?"is Power of two":"is not Power of two");


// if (x == 1 && x == 2 && x == 3) 


let x = {
  value: 1,
  valueOf: function () {
    return this.value++;
  },
};

if (x == 1 && x == 2 && x == 3) {
  console.log("true");
}
