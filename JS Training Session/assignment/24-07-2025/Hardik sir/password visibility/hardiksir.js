//eye button in password field

function togglePasswordVisibility() {
  const userPassword = document.getElementById("userPassword");
  const togglePassword = document.getElementById("togglePassword");

  const isPasswordVisible = userPassword.type === "text";

  if (isPasswordVisible) {
    userPassword.setAttribute("type", "password");
    togglePassword.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  } else {
    userPassword.setAttribute("type", "text");
    togglePassword.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  }
}

let isFormVisible=false;

function showTask1Form(){
    let togglePasswordForm=document.getElementById("togglePasswordForm");

    
    isFormVisible?togglePasswordForm.classList.add("d-none"):togglePasswordForm.classList.remove("d-none");
    isFormVisible=!isFormVisible;
}
