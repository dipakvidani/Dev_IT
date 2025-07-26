// 15)Find The Intersection of Two Arrays ex. [[1,2,3],[2,3,4]] / O.P [2,3].

let arr1=[1,2,3];
let arr2=[2,3,4];

let arr3=arr1.filter(ele=>arr2.includes(ele));

console.log(arr3);
