// function getHighestSumPair(array, pair) {
//   let maxSum = -Infinity;
//   let result = [];

//   for (let i = 0; i <= array.length - pair; i++) {
//     let currentSubArrray = array.slice(i, i + pair);
//     let currentSum = currentSubArrray.reduce((a, b) => a + b, 0);

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       result = currentSubArrray;
//     }
//   }
//   return result;
// }

// let Numbers = [451, 11, 2, 3, 122, 123, 222, 4, 3, 5];

// //  getHighestSumPair
// console.log(getHighestSumPair(Numbers, 3));

// const isLoading= useState([]);

// console.log(isLoading);

//char frequancy
let uName = "Dipak Vidani";
let charMap = new Map();

let uNameChars = uName.split("").filter((ele) => ele != " ");

let charFreqancy = uNameChars.reduce((prev, ele, idx) => {
  let key = ele.toLowerCase();
  if (prev.has(key)) {
    prev.set(key, (prev.get(key) || 0) + 1);
  } else {
    prev.set(key, 1);
  }
  return prev;
}, charMap);

// console.log(charFreqancy);

// console.log([...charFreqancy.entries()]);

let arrayOfEntries = [...charFreqancy.entries()];

// console.log(arrayOfEntries.sort((a, b) => b[1] - a[1]));

let sortedEntries = arrayOfEntries.sort((a, b) => b[1] - a[1]);

let highestfreqancyChar = sortedEntries[0];

console.log(highestfreqancyChar[0] + " : " + highestfreqancyChar[1]);

let string = "apple,,pineapple, mango , graps";

console.log(
  string
    .split(",")
    .map((wrd) => wrd.trim())
    .filter((ele) => Boolean(ele))
);

console.log(string.includes("apple"));

function abc() {
  let p1 = new Promise((res, rej) => {
    let t = true;
    try {
      if (t == true) {
        res("success");
      } else {
        rej("err");
      }
    } catch (error) {}
  });
  p1.then();
}

// async function xyz() {
//   console.log("1");

//   let result = await abc();
//   console.log(result);

//   console.log("2");
// }

// xyz();

console.log("95" + parseInt("1a1"));
console.log("95" + Number("1a"));
console.log(Boolean(undefined));
console.log(Boolean(null));
// console.log(navigator.geolocation);

//sortunique

let arrayForSortUnique = [1, 2, 2, 3, 4, 5, 6, 4, 7, 86, 20, 56, 6];

function sortUnique(array) {
  let arraySet = [...new Set(array)];
  console.log(arraySet);
  console.log(
    "uniqlySortedArray :",
    arraySet.sort((a, b) => a - b)
  );
}

sortUnique(arrayForSortUnique);

//flatten array

let deeplyNestedArray = [
  1,
  2,
  3,
  [4, 5, 4, 5, [1, 2, 2, 7, [1, 2, 2, 6]]],
  3,
  4,
  [1, 2, 3],
];

function flattenArray(array) {
  return array.reduce((prev, ele) => {
    if (Array.isArray(ele)) {
     
      return prev.concat(flattenArray(ele));
    } else {
      prev.push(ele);
      return prev;
    }
  }, []);
}
flattenArray(deeplyNestedArray)
