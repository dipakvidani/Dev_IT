//[1,2,3,7]
array1 = [1, 2, 3, 4];
console.log(array1)
array1[7] = 7;
console.log(array1); //[ 1, 2, 3, 4, <3 empty items>, 7 ]
console.log(array1.length); //8
console.log(array1[5]); //undefine
array1[5]=10;
console.log(array1[5]); //10




//null comprisoin
let a = null;
console.log("16",Number(null));

console.log(a == 0); //false
console.log(a > 0); //false
console.log(a >= 0); //true


// console string a
// set timeout 1500 second console b
// set timeout 0 second console c
// console d inside promise console e
// set interval set timeout 2 second in console f 

	console.log("a");
        // // make set time out of the 15000 an pass console.log("b");
        setTimeout(() => {
            console.log("b");
        }, 15000);
        // //  make set timeout of the 0 and pass console.log("c");
        setTimeout(() => {
            console.log("c");
        }, 0);
        console.log("d");
        // // make promice and pass console.log("e") and  set set interval set time out of 2000
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("e");
                resolve();
            }, 2000);
        });

//[1, 2, "A", "a", "B", "b"]
const array=[ "A", "b", "a", "B",1,2]
        array.sort((a, b) => {
  let strA = String(a).toLowerCase();
  let strB = String(b).toLowerCase();
  if (strA < strB) return -1;
  if (strA < strB) return 1;
 
});
console.log(array);


let arr = ["a", "A", "B", "b"];
console.log(arr.sort());
let newarr = arr.sort((a, b) => {
  let upperA = a.toUpperCase();
  let upperB = b.toUpperCase();

  if (upperA === upperB) {
    return a < b ? -1 : 1;
  }

  return upperA < upperB ? -1 : 1;
});

console.log("72"+newarr);



let nul=null;

let name="Dipak"