
// > Add 3 <div> elements and change the color of each using getElementsByTagName. 

let AllDiv=document.getElementsByTagName('div');
for (let div of AllDiv) {
    div.style.backgroundColor = 'violet';
}


// > Make a form with a checkbox group for hobbies using getElementsByName. Show selected hobbies on submit. 
// > Use innerText and innerHTML on same element. Show the difference in rendering. 
// 1. Create a form: 
//      1.1 Validate non-empty fields  
//     1.2 Match password & confirm password 
//      1.3 Validate email 
//      1.4Alert success if all are valid 
 
// 1 Create a form that validates age and name 
//  1.1Name must be at least 3 characters long. 
// 1.2Age must be a number between 18 and 60. 
// 1.3Show appropriate alert messages if validation fails. 
// 1.4Show “Form submitted successfully” only if all validations pass.