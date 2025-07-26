function findFactorial() {
  const input = document.getElementById("inputNumber");
  const outputCard = document.getElementById("outputCard");
  const FactorialSpan = document.getElementById("FactorialSpan");

  const number = parseInt(input.value.trim());
  let factorial = 1;

  if (isNaN(number) || number < 0) {
    FactorialSpan.innerText = "Invalid Input.";
    outputCard.classList.remove("d-none");
    outputCard.classList.remove("alert-info");
    outputCard.classList.add("alert-danger");
    return;
  }

  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  FactorialSpan.innerText = `Factorial of ${number} is ${factorial}`;
  outputCard.classList.remove("d-none");
  outputCard.classList.remove("alert-danger");
  outputCard.classList.add("alert-info");
}
