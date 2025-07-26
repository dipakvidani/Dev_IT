// 18) All Console.log (setTimeout) QUE...

console.log("a"); //1

async function greet() {
  return "hi";
}

let result =  greet();

console.log(result);


setTimeout(() => {
  console.log("b"); //4
});

setTimeout(() => {
  console.log("d"); //5
}, 3500);

console.log("e"); //2

Promise.resolve().then(() => console.log("f")); //3

// Output:
// a
// e
// f
// b
// d
