const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// o/p: [[1,2,3],[4,5,6],[7,8,9],[10]]
let ArrayWithPairs = [];

for (let i = 0; i < Math.ceil(array1.length / 3); i++) {
  let temp = [];
  console.log("i ::", i);

  for (let j = 0; j < 3; j++) {
    let shiftedElement = array2.shift();
    shiftedElement && temp.push(shiftedElement);    //it will not add undefined
  }
  ArrayWithPairs.push(temp);
}

console.log("ArrayWithPairs :", ArrayWithPairs);
