// Assignment 4: Hoisting & Debug Scenario
// Concepts: Hoisting, var/let, debugger, Strict Mode

//Strict Mode
"use strict";

//let/const Hoisting
// console.log(userName);  //ref error

// let userName="Dipak";
// const userName="Dipak";

// console.log(userName);  //Dipak

{
  let userLoggedIn = true;
}

// console.log(isLoggedIn); //not Defiend

// console.log(userLoggedIn); //not defined

// {
//     var age=23;
// }

// console.log(age); //23

// console.log(collage);   //undefine

var collage="ssec"

// console.log(collage);   //ssec
debugger;
Resign("Dr.strange")    //support Hoisting

function Resign(empName){
    console.log(`Thanks ${empName} for resign...`);
}

Resign("Shaktiman")
