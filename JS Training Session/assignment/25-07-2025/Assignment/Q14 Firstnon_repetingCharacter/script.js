function findFirstNonRepeatingChar() {
  const string = document
    .getElementById("inputString")
    .value.toLowerCase()
    .trim();
  const result = document.getElementById("resultMessage");
  // console.log(string.split(""));
  let charFrequency = {};

  //    Count freqancy count  of each character
  for (let char of string) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  console.log(charFrequency);

  for (let char of string) {
    if (charFrequency[char] === 1) {
      console.log(`First non-repeating Char : ${char}`);
      result.textContent = `First non-repeating character: '${char}'`;
      result.className = "text-success fw-semibold";
      return;
    }
  }

  console.log("No non-repeating character found.");
  result.textContent = "No non-repeating character found.";
  result.className = "text-danger fw-semibold";
  return;
}

findFirstNonRepeatingChar("DiipakVidani");
