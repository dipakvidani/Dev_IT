// i/p - Reverse a string - Hello How are you -
// o/p - olleH woh era uoy

let string = "Hello How are you";

let arrString=string.split(" ")

console.log("arrString :", arrString);

let reverseStringArray=arrString.map((word)=>word.split("").reverse().join(""))

console.log("reverseStringArray :", reverseStringArray);

let reverseString=reverseStringArray.join(" ")

console.log("reverseString :", reverseString);

