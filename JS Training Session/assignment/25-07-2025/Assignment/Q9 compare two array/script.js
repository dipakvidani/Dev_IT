// 9)Check if two arrays are Equal.

function comapreTwoArray(array1, array2) {
  return array1.length === array2.length && array1.every((ele, i) => ele === array2[i])
    ? "Arrays are same."
    : "Arrays are not same.";
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

console.log(comapreTwoArray(arr1, arr2));
