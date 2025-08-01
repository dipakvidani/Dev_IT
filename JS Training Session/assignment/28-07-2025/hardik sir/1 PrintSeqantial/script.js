// const p1 = setTimeout(function () {
//   return "Hello World 1";
// }, 3000);
// const p2 = setTimeout(function () {
//   return "Hello World 2";
// }, 1000);
// const p3 = setTimeout(function () {
//   return "Hello World 3";
// }, 2000);
// I want to get result in sync like p1, p2 and p3

function delay(msg, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

async function PrintLineByLine() {
  const p1 = await delay("Hello World 1", 3000);
  console.log(p1);

  const p2 = await delay("Hello World 2", 1000);
  console.log(p2);

  const p3 = await delay("Hello World 3", 2000);
  console.log(p3);
}

PrintLineByLine();



setTimeout(function () {
  console.log("Hello World 1");

  setTimeout(function () {
    console.log("Hello World 2");

    setTimeout(function () {
      console.log("Hello World 3");
    }, 2000);

  }, 1000);

}, 3000);
