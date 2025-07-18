let parent = document.getElementById("parent");

parent.addEventListener("click", (e) => {
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.id);
  let idOfClickedDiv = e.target.id;

  console.log(`Div With ID :${idOfClickedDiv} is Clicked!!`);
});

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

  if(password ===""||confirmPassword ===""){
    alert("Fullfill all the Details !!");
    return false;
  }

//   console.log(isPasswordStrong(password));
  

  if (
    !isPasswordStrong(password) ||
    !isPassIncludeOneCapitalChar(password) ||
    !isPassIncludeOneNumChar(password) ||
    !isPassIncludeOneSpecialChar(password) ||
    !isPasswordStrong(password) ||
    (password !== confirmPassword)
  ) {
    alert("Full fill all the Requirement!!!");
  }

  
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
