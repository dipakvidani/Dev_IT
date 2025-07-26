// 17)Find all pair in an Array that sum to a Target Numbers ex. [-1,2,3,3,4,7] / O.P  [[2,4],[3,3],[7,-1]] ...

let arr = [-1, 2, 3, 3, 4, 7];

let targetedsum = 6;

function findThePairForTarget() {
  let pairOfTargetedSum = [];
  arr.forEach((first) => {
    arr.forEach((second) =>
      first + second === targetedsum
        ? pairOfTargetedSum.push([first, second])
        : pairOfTargetedSum
    );
  });
  return pairOfTargetedSum;
}

console.log(findThePairForTarget());
