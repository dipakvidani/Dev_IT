// 10)Get All Unique values from Nested Array ex.[[1,2],[2,3],[3,4],[4,3],[5,5]].

let multiDimentionalArray = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 3],
  [5, 5],
];

let Flatarray = multiDimentionalArray.join().split(",");
let arrayWithUniqueValue = [];

Flatarray.map((ele) => {
  arrayWithUniqueValue.includes(ele)
    ? arrayWithUniqueValue
    : arrayWithUniqueValue.push(ele);
});

console.log(arrayWithUniqueValue);

