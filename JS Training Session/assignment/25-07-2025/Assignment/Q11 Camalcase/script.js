// 11) Convert String to CamalCase.(Your Full Name).

function camalCaseString(string) {
  console.log('string.split("_") :' + string.split("_"));
  let arrayOfStringsWord = string.split("_"); //convert string to array of word

  let firstWord = arrayOfStringsWord[0].toLowerCase(); //first word lower case
  console.log("firstWord :" + firstWord);

  let ArrayExcludingFirstWord = arrayOfStringsWord.slice(1);

  console.log("ArrayExcludingFirstWord :" + ArrayExcludingFirstWord);

  let CapitalizeWordsExcludingFirstWord = ArrayExcludingFirstWord.map(
    (ele) => ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase() // //first latter upper caseother letter lower case
  ).join("");

  console.log("CapitalizeWordsExcludingFirstWord :" + CapitalizeWordsExcludingFirstWord);
  

  return `${firstWord}${CapitalizeWordsExcludingFirstWord}`;
}

console.log("Final Camel case string :",camalCaseString("hello_dipak_vidani"));
