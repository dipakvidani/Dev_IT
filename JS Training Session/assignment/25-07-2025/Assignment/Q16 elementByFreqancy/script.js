// 16)Find a Group of Elements by Frequancy (Write Your Own FullName).

function findGroupOfElementByFrequancy(number) {
  let charMap = new Map();
  let fullName = "DipakVidani";
  fullName = fullName.toLowerCase();

  //set freqncy for all character
  for (const char of fullName) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  console.log(charMap);
  
  
//    Filter and collect characters with matching frequency
    const result = [];
    for (const [char, freq] of charMap.entries()) {
        if (freq === number) {
            result.push(char);
        }
    }

     console.log(`Characters in '${fullName}' that appear ${number} times:`, result);
}

findGroupOfElementByFrequancy(2);
