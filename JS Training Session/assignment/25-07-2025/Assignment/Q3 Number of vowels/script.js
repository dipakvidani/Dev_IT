// 3)Count Number of Vowels in string ex. const name = 'Javascript'.

document.getElementById("countVowel").addEventListener("click", () => {
  let strInput = document.getElementById("strInput");
  let numbersOfVowels = document.getElementById("numbersOfVowels");

  strInput = strInput.value.toLowerCase();

  let countOFVowel = strInput
    .split("")
    .filter(
      (ele) =>
        ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u"
    ).length;

    numbersOfVowels.innerText=`There is total ${countOFVowel} vowels into the sentence ${strInput}`;
});

// const string = "javascript".toLowerCase();

// console.log(string.split(""));

// console.log(
//   string
//     .split("")
//     .filter(
//       (ele) =>
//         ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u"
//     )
// );

// console.log(
//   string
//     .split("")
//     .filter(
//       (ele) =>
//         ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u"
//     ).length
// );
