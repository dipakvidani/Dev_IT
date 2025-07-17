function isNameValid(input) {
  let regex = /^[A-Za-z]+$/;
  return regex.test(input);
}

function isValidEmailFormat(EMAIL) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(EMAIL);
}

function isPasswordStrong(Password) {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
  return regex.test(Password);
}

let handleSubmit = (e) => {
  e.preventDefault();

  document.getElementById("user_name_feedback").innerText = "";
  document.getElementById("user_email_feedback").innerText = "";
  document.getElementById("user_password_feedback").innerText = "";
  document.getElementById("confirm_user_password_feedback").innerText = "";

  document.getElementById("username").style.borderColor = "";
  document.getElementById("useremail").style.borderColor = "";
  document.getElementById("userpassword").style.borderColor = "";
  document.getElementById("confirm_userpassword").style.borderColor = "";

  let username = document.getElementById("username").value;
  let useremail = document.getElementById("useremail").value;
  let userpassword = document.getElementById("userpassword").value;
  let confirm_userpassword = document.getElementById("confirm_userpassword").value;

  // Check if all fields are filled
  if (username === "" || useremail === "" || userpassword === "" || confirm_userpassword === "") {
    alert("Please fill out all the fields!");
    return false;
  }

  // Validate Name
  if (!isNameValid(username)) {
    document.getElementById("user_name_feedback").innerText = "Please enter a valid name (letters only).";
    document.getElementById("username").style.borderColor = "red";
    return false;
  }

  // Validate Email Format
  if (!isValidEmailFormat(useremail)) {
    document.getElementById("user_email_feedback").innerText = "Please enter a valid email address.";
    document.getElementById("useremail").style.borderColor = "red";
    return false;
  }

  // Validate Password Strength
  if (!isPasswordStrong(userpassword)) {
    document.getElementById("user_password_feedback").innerText = "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.";
    document.getElementById("userpassword").style.borderColor = "red";
    return false;
  }

  // Confirm Password
  if (userpassword !== confirm_userpassword) {
    document.getElementById("confirm_user_password_feedback").innerText = "Passwords do not match.";
    document.getElementById("confirm_userpassword").style.borderColor = "red";
    return false;
  }

  // If everything is valid, allow form submission
  alert("Form submitted successfully!");
  return true;
};
