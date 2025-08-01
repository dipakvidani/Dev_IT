const abc = [1, 2, 3, 4];
const xyz = abc;
console.log("Before xyz[3] = 6 xyz :", xyz);
console.log("Before xyz[3] = 6 abc :", xyz);

xyz[3] = 6;
console.log("xyz :", xyz);
console.log("abc", abc);
//Bcz we storing the refrace not values
//itZ call shallow copy

//if we want store the value we can deepcopy its values


const copyOfabc=[...abc];
console.log("copyOfabc", copyOfabc);

copyOfabc.push(123);
console.log("abc :", abc);


console.log("copyOfabc", copyOfabc);
