// Write a loop from 1 to 100 that skips the multiple of 3 and 5.
// Given an input element with type="email", fetch the value of the type attribute using JavaScript
// Write a function to hide a paragraph when a button is clicked.
// Prompt the user to enter their age and display it in an alert.
// Create a form and reset it using a button.
// Write a function that returns the square of a number.
// Split the string "red,green,blue" into an array.
// Use a ternary operator to display "Pass" if marks are above 40, otherwise "Fail".

//Q1 Write a loop from 1 to 100 that skips the multiple of 3 and 5.
let endnumber = 100;

for (let number = 1; number <= endnumber; number++) {
  if (number % 3 == 0) continue;
  if (number % 5 == 0) continue;
  console.log(number);
}

//Q2 Given an input element with type="email", fetch the value of the type attribute using JavaScript

let emailField = document.getElementById("userEmail");

let inpFieldTypeCheck = emailField.getAttribute("type");

// alert("Type of Input Field of Email Input is : " + inpFieldTypeCheck);

//Q3 Write a function to hide a paragraph when a button is clicked.
let isParaVisible = true;

function toggleParaVisibility() {
  let para = document.getElementById("hideenpara");
  let btn = document.getElementById("btn-hidePra");
  //   btn.innerText = "";

  isParaVisible = !isParaVisible;

  btn.innerText = isParaVisible ? "Hide" : "Show";

  para.style.display = isParaVisible ? "" : "none";
  // para.style.opacity = isParaVisible ? 100 : 0;
  // para.hidden = !isParaVisible ;
}

//Q4 Prompt the user to enter their age and display it in an alert.
// let userAge = prompt("Enter your Age:");

try {
  userAge = Number(userAge);

  if (!isNaN(userAge)) {
    // alert(`Your age is ${userAge}`);
  } else {
    throw new Error`Invalid Input Type!`();
  }
} catch (error) {
//   alert(error.message);
}

// Q5 Create a form and reset it using a button.

function checkPasswordStrength() {
  let password = document.getElementById("password").value;
  let password_feedback = document.getElementById("password_feedback");
  password_feedback.innerText = "";
  document.getElementById("Cap_char_check").classList = "";
  document.getElementById("Spec_char_check").classList = "";
  document.getElementById("Num_char_check").classList = "";
  document.getElementById("length_check").classList = "";
  document.getElementById("pass_strength_check").classList = "";

  console.log(password);

  if (isPasswordStrong(password)) {
    document.getElementById("pass_strength_check").classList = "text-success";
  }

  //check for capital char
  if (isPassIncludeOneCapitalChar(password)) {
    document.getElementById("Cap_char_check").classList = "text-success";
  }

  //check for special char
  if (isPassIncludeOneSpecialChar(password)) {
    document.getElementById("Spec_char_check").classList = "text-success";
  }

  //check for number char
  if (isPassIncludeOneNumChar(password)) {
    document.getElementById("Num_char_check").classList = "text-success";
  }

  if (password.length >= 8) {
    document.getElementById("length_check").classList = "text-success";
  }
}

function confirmPassword() {
  let password = document.getElementById("password").value;
  let ConfirmPassword = document.getElementById("ConfirmPassword").value;

  console.log(password);
  console.log("confirm password", ConfirmPassword);

  document.getElementById("ConfirmPassword_feedback").innerText = "";

  if (password !== ConfirmPassword) {
    document.getElementById("ConfirmPassword_feedback").innerText =
      "password and confirm password not same";
    return false;
  }
}

function handleSubmit(e) {
  let password = document.getElementById("password").value;
  let ConfirmPassword = document.getElementById("ConfirmPassword").value;

  e.preventDefault();
  
  if (password === "" || confirmPassword === "") {
    //   alert("Fullfill all the Details !!");
      return false;
    }
    
    //   console.log(isPasswordStrong(password));
    
    if (
        !isPasswordStrong(password) ||
        !isPassIncludeOneCapitalChar(password) ||
    !isPassIncludeOneNumChar(password) ||
    !isPassIncludeOneSpecialChar(password) ||
    !isPasswordStrong(password) ||
    password !== confirmPassword
) {
    // alert("Full fill all the Requirement!!!");
}
document.getElementById("Password_check_form").reset();   
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function showPwCheck() {
  document.getElementById("pwCheck").classList.remove("d-none");
}

function removePwCheck(e) {
  console.log(e.target.value);

  if (e.target.value) {
    document.getElementById("pwCheck").classList.remove("d-none");
  } else {
    document.getElementById("pwCheck").classList.add("d-none");
  }
}

function isPasswordStrong(Password) {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
  return regex.test(Password);
}

function isPassIncludeOneCapitalChar(password) {
  const regex = /^(?=.*[A-Z])+.*$/;
  return regex.test(password);
}

function isPassIncludeOneSpecialChar(password) {
  const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])+.*$/;
  return regex.test(password);
}

function isPassIncludeOneNumChar(password) {
  const regex = /^(?=.*[0-9])+.*$/;
  return regex.test(password);
}


// Q6 Write a function that returns the square of a number.

function square(_number){
    return _number*_number;
}

let numberForFindSquare=10;


console.log(`square of ${numberForFindSquare} is ${square(10)}`);

// Q 7 Split the string "red,green,blue" into an array.

let ColorsString="red,green,blue";

let ColorsArray=ColorsString.split(",");

console.log(ColorsArray);


//Q 8 Use a ternary operator to display "Pass" if marks are above 40, otherwise "Fail".
function checkResult() {
  const marksInput = document.getElementById("marksInput").value.trim();
  const resultSpan = document.getElementById("resultSpan");

  resultSpan.innerText = ""; 

  if (marksInput === "" || isNaN(marksInput) || marksInput < 0 || marksInput > 100) {
    resultSpan.innerText = "Please enter valid marks (0–100)";
    resultSpan.className = "text-warning fw-bold";
    return;
  }

  const isStudentPass = marksInput > 40;

  resultSpan.innerText = isStudentPass
    ? "You are passed 🎉"
    : "Sorry! Better Luck Next Time 💔";

  resultSpan.className = isStudentPass
    ? "text-success fw-bold"
    : "text-danger fw-bold";
}

