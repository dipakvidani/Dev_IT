// 17)Find all pair in an Array that sum to a Target Numbers ex. [-1,2,3,3,4,7] / O.P  [[2,4],[3,3],[7,-1]] ...

let arr = [-1, 2, 3, 4, 7];

let targetedsum = 5;

// function findThePairForTarget() {
//   let pairOfTargetedSum = [];
//   arr.forEach((first) => {
//     arr.forEach((second) =>
//       first + second === targetedsum
//         ? pairOfTargetedSum.push([first, second])
//         : pairOfTargetedSum
//     );
//   });
//   return pairOfTargetedSum;
// }

// console.log(findThePairForTarget());

function findThePairForTarget() {
  let pairOfTargetedSum = [];
  let usedElement = [];

  for (const element of arr) {
    console.log(element);
    arr.includes(targetedsum - element)
      ? pairOfTargetedSum.push([element, targetedsum - element])
      : pairOfTargetedSum;
    arr.includes(targetedsum - element)
      ? usedElement.push(element)
      : usedElement;
  }
  console.log("pairOfTargetedSum :", pairOfTargetedSum);
  let unusedElement = arr.filter((ele) => !usedElement.includes(ele));

  console.log("unusedElement : ", unusedElement);

  return [...pairOfTargetedSum, ...unusedElement];
}

console.log(findThePairForTarget());
