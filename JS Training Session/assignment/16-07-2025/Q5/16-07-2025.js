//  1. Create a form:
//      1.1 Validate non-empty fields
//     1.2 Match password & confirm password
//      1.3 Validate email
//      1.4Alert success if all are valid



function isNameValid(input) {
    let regex = /^[A-Za-z]+$/;
    return regex.test(input);
}

function isValidEmailFormat(EMAIL) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(EMAIL);
}

function isPasswordStrong(Password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(Password);
}

let handleSubmit = (e) => {

    e.preventDefault();

    let username = document.getElementById("username").value;
    let useremail = document.getElementById("useremail").value;
    let userpassword = document.getElementById("userpassword").value;
    let confirm_userpassword = document.getElementById("confirm_userpassword").value;

    if (username == "" || useremail == "" || userpassword == "" || confirm_userpassword == "") {
        alert("Fill all The input Fields !")
        return false;
    }

    if (!(isNameValid(username))) {
        alert("Name can only in string");
        return false;
    }

    if (!(isValidEmailFormat(useremail))) {
        alert("Please Enter Email in vaild");
        return false;
    }

    if (!(isPasswordStrong(userpassword))) {
        alert("Password must contain atleast 1 capital, 1 small, 1 symbol and atleast 1number and atleast length of password should be 8.");
        return false;
    }

    if (userpassword !== confirm_userpassword) {
        alert("password and confirm pasword must be same");
        return false;
    }

    if(isNameValid(username)&&isValidEmailFormat(useremail)&&isPasswordStrong(userpassword)&&userpassword===confirm_userpassword){
        alert("User Registered Sucessfully!")
    }
}