//  1. Create a form:
//      1.1 Validate non-empty fields
//     1.2 Match password & confirm password
//      1.3 Validate email
//      1.4Alert success if all are valid

function isNameValid(input) {
    let regex = /^[A-Za-z].{3,}$/;
    return regex.test(input);
}

function isValidAge(age){
    let regex=/^(1[8-9]|[2-5][0-9]|60)$/;
    return regex.test(age);
}



let handleSubmit = (e) => {

  e.preventDefault();

    let username = document.getElementById("username").value;
    let userage=document.getElementById("userage").value;
   
    if (username == "" || userage == "") {
        alert("Fill all The input Fields !")
        return false;
    }

    if (!(isNameValid(username))) {
        alert("Name must grater than 3 OR Name can only in string");
        return false;
    }

    if (!(isValidAge(age))) {
        alert("Age must Between 18 to 60 OR Age can only in number");
        return false;
    }

    if(isNameValid(username)&&isValidAge(age)){
        alert("User Registered Sucessfully!");
        return true;
    }
}