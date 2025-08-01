const array = [1, 2, [3, 4, [5], 6], 7];
// o/p: [1,2,3,4,5,6,7]

console.log("array.toString().split(", ") :", array.toString().split(","));

console.log("array.flat(Infinity) :", array.flat(Infinity));

console.log("array.join().split(",") :", array.join().split(","));
