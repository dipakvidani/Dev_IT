// console.log(false&&"Dipak");    //false

// console.log(""&&"Dipak");   //""

// console.log(undefined&&"Dipak");    //undefine


// ### Include 

const sentence="My name is Dipak Vidani"

console.log(sentence.includes("dipak".toLowerCase()));  //false

console.log(sentence.toLowerCase().includes("dipak".toLowerCase()));    //true

console.log(sentence.toUpperCase().includes("dipak".toUpperCase()));    //true

console.log("1".toUpperCase())


//find the current date

function getSimpleWeekNUmber(date){
    const start=new Date(date.getFullYear(),0,1);
    console.log(start);
    const diff=date-start;
    console.log(diff);
    
    const oneweek=1000*60*60*24*7;
    console.log(oneweek);
    
    console.log(Math.ceil((diff+1)/oneweek));
    

    return Math.ceil((diff+1)/oneweek)

    
}

let today =new Date("2025-07-23")
getSimpleWeekNUmber(today)


//calculate days btwn two days

console.warn("Calculate date btw two dates");

const date1=new Date("2025-07-01")
console.log(date1);


const date2=new Date("2025-07-23")
console.log(date2);


const diffTime=Math.abs(date2-date1)
console.log(diffTime);


const diffdays=Math.ceil(diffTime/(1000*60*60*24))


console.log(diffdays);

// const PI=3.14545464

// PI=3.14

// TypeError: Assignment to constant variable.



