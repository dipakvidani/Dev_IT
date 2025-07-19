//exception handaling using try..catch..
//exception handaling using try..catch..finally..

function handleSubmit(e) {
  e.preventDefault();

  let userEmail = document.getElementById("userEmail").value.trim();
  let userPassword = document.getElementById("userPassword").value;
  let userAge = document.getElementById("userAge").value;
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
      console.log(`${userName}, you accepted the terms.`);
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

    document.getElementById("Voter Registration Form").reset();
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
  } catch (error) {
    isEligible_feedback.innerText = error.message;
  }
}
