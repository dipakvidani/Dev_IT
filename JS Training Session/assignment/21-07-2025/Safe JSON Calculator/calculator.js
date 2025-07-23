//only except strict js
"use strict";

function handleSubmit(e) {
  e.preventDefault();
  let expression_for_calculate = document.getElementById(
    "expression_for_calculate"
  );
  let Answer = document.getElementById("Answer");
  let expression_for_calculate_val = expression_for_calculate.value;

  //   console.log(eval(expression_for_calculate_val));

  let ansOfExpression = eval(expression_for_calculate_val);

  Answer.value = ansOfExpression;

  //  console.log(Answer);
}


//exception handaling
function handleCalculate() {
  let regex = /^[-+]?[0-9]{0,}([-+*/]?)[0-9]+$/;
  let expression_for_calculate = document.getElementById(
    "expression_for_calculate"
  );
  let expression_for_calculate_val = expression_for_calculate.value;
  let inputFeedback=document.getElementById("inputFeedback");
        expression_for_calculate.style.border="";


  try {
    if (regex.test(expression_for_calculate_val)) {
        expression_for_calculate.style.border="5px solid green";
        inputFeedback.classList="text-success fw-bold";

    }else{
        throw new Error (`invalid input for calculation`);
    }
  } catch (error) {
        expression_for_calculate.style.border="5px solid red";
        inputFeedback.classList="text-danger fw-bold";
        inputFeedback.innerText=error.message;
  }
}


//use promise to handle async operation
function handleAsyncCalculate(e) {
  e.preventDefault();
  let expression_for_calculate = document.getElementById(
    "expression_for_calculate"
  );
  let expression_for_calculate_val = expression_for_calculate.value;
  let Answer = document.getElementById("Answer");
  Answer.value = "";

  let inputFeedback = document.getElementById("inputFeedback");
  expression_for_calculate.style.border = "";

  new Promise((resolve, reject) => {
    if (/^[-+]?[0-9]+([-+*/][0-9]+)*$/.test(expression_for_calculate_val)) {
      resolve(eval(expression_for_calculate_val));
    } else {
      reject(new Error("Invalid input for calculation"));
    }
  })
    .then((result) => {
      inputFeedback.classList = "text-success fw-bold";
      Answer.value = result;
      console.log(result);
      inputFeedback.innerText = `Result: ${result}`;
      expression_for_calculate.style.border = "5px solid green";
    })
    .catch((error) => {
      inputFeedback.classList = "text-danger fw-bold";
      console.error(error);
      Answer.value = "";
      inputFeedback.innerText = error.message;
      expression_for_calculate.style.border = "5px solid red";
    });
}