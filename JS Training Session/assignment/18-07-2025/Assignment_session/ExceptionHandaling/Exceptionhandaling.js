//exception handaling using try..catch..
//exception handaling using try..catch..finally..

function handleSubmit(e) {
  e.preventDefault();

  let userEmail = document.getElementById("userEmail").value.trim();
  let userPassword = document.getElementById("userPassword").value;
  let userAge = parseInt(document.getElementById("userAge").value.trim(), 10);
  let userName = userEmail.split("@")[0].replace(/[^A-Za-z]/g, "");

  let isEligible_feedback = document.getElementById("isEligible_feedback");
  let isTAndCAccepted_feedback = document.getElementById(
    "isTAndCAccepted_feedback"
  );

  // Reset feedback
  isEligible_feedback.innerText = "";
  isTAndCAccepted_feedback.innerText = "";

  let userGender = document.querySelector(
    'input[name="userGender"]:checked'
  )?.value;
  let isTAndCAccepted = document.getElementById("isTAndCAccepted").checked;

  let hasError = false;

  const formData = {
    name: userName,
    email: userEmail,
    password: userPassword,
    age: Number(userAge),
    gender: userGender || "Not selected",
    acceptedTerms: isTAndCAccepted,
  };

  console.log("Username:", userName);

  try {
    if (userAge < 18) {
      hasError = true;
      throw new Error(`Sorry! ${userName}, You Are a Minor!!!`);
    } else {
      console.log(`${userName}, You are eligible by age.`);
    }
  } catch (error) {
    isEligible_feedback.innerText = error.message;
  } finally {
    console.log("Age eligibility checked.");
  }

  try {
    if (!isTAndCAccepted) {
      hasError = true;
      throw new Error(
        `${userName}, You must agree with our Terms and Conditions !`
      );
    } else {
      isTAndCAccepted_feedback.innerText = "Terms accepted.";
      isTAndCAccepted_feedback.classList.remove("text-danger");
      isTAndCAccepted_feedback.classList.add("text-success");
    }
  } catch (error) {
    isTAndCAccepted_feedback.innerText = error.message;
  } finally {
    console.log("Terms and Conditions checkbox checked.");
  }

  //if there is not problem/Error in FormData
  if (!hasError) {
    console.log("Form Data Object:", formData);
    alert(`Welcome ${formData.name}! Your registration was successful.`);

    localStorage.setItem("userData", JSON.stringify(formData)); //local storage

    document.getElementById("VoterRegistrationForm").reset();
  }
}

function checkEligibility() {
  let userEmail = document.getElementById("userEmail").value.trim();
  let userAge = document.getElementById("userAge").value;
  let userName = userEmail.split("@")[0].replace(/[^A-Za-z]/g, "");
  let isEligible_feedback = document.getElementById("isEligible_feedback");

  isEligible_feedback.innerText = "";

  try {
    if (userAge < 18) {
      throw new Error(`Sorry! ${userName}, You Are a Minor!!!`);
    }
    isEligible_feedback.innerText = "You are eligable for voting...";
    isEligible_feedback.classList.remove("text-danger");
    isEligible_feedback.classList.add("text-success");
  } catch (error) {
    isEligible_feedback.classList.remove("text-success");
    isEligible_feedback.classList.add("text-danger");
    isEligible_feedback.innerText = error.message;
  }
}

function handleInputEmail() {
  let userEmail = document.getElementById("userEmail");

  let emailRegex =
    /^[a-z0-9._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})$/i;

  userEmail.style.boxShadow = "0 0 0 0.25rem rgba(255, 0, 0, 0.25)";

  if (emailRegex.test(userEmail.value.trim())) {
    userEmail.style.boxShadow = "0 0 0 0.25rem rgba(0, 255, 0, 0.25)";
  }
}

function halndleAggrementStatus() {
  let isTAndCAcceptedElement = document.getElementById("isTAndCAccepted");
  let isTAndCAccepted = isTAndCAcceptedElement.checked;

  if (!isTAndCAccepted) {
    isTAndCAcceptedElement.style.boxShadow =
      "0 0 0 0.25rem rgba(255, 0, 0, 0.25)";
  }else{
    isTAndCAcceptedElement.style.boxShadow = "0 0 0 0.25rem rgba(0, 255, 0, 0.25)";

  }
}
