// 2)Remove Duplecate From Array ex. const arr = [1,2,2,3,3,3,4,5,7,7,7] without using Newset() method.

const arr = [1,2,2,3,3,3,4,5,7,7,7];

const arrayWithUniqueValue=[];

arr.forEach((ele)=>{
    arrayWithUniqueValue.includes(ele)?arrayWithUniqueValue:arrayWithUniqueValue.push(ele)
})

console.log(arrayWithUniqueValue);