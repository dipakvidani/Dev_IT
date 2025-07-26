function hasUniqueCharacters() {
  let string = document.getElementById("inputString").value.toLowerCase();
  let UniqueString_Feed = document.getElementById("UniqueString_Feed");
  let UniqueCharFromString = document.getElementById("UniqueCharFromString");
  let charSet = new Set();

  let arrayOfStringChars=string.split("");

  return arrayOfStringChars.every((char) => {
    if (charSet.has(char)) {
      UniqueString_Feed.innerText = `String not have all Unique Chars`;

      let arrayWithUniqueValue = [];

      arrayOfStringChars.map((ele) => {
        arrayWithUniqueValue.includes(ele)
          ? arrayWithUniqueValue
          : arrayWithUniqueValue.push(ele);
      });

      UniqueCharFromString.innerText=`Unique Characters are : ${arrayWithUniqueValue.join(", ")}`

      UniqueString_Feed.classList.remove("text-success");
      UniqueString_Feed.classList.add("text-danger");
      return false;
    } else {
      UniqueString_Feed.innerText = `String have all Unique Chars`;
      UniqueString_Feed.classList.add("text-success");
      UniqueString_Feed.classList.remove("text-danger");
      charSet.add(char);
      return true;
    }
  });
}

// console.log(hasUniqueCharacters("Dipakkk"));
