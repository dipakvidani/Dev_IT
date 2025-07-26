let gamer = {
  gamerName: "Dipak",
  gameName: "Bgmi",
  role: "igl+assulter",
  uid: 121321231213,
};

// console.log(`keys are in  object gamer : ${Object.keys(gamer)}`);

// console.log(`number of keys are in  object gamer : ${Object.keys(gamer).length}`);

function isObjectEmpty(objName) {
  return (Object.keys(objName).length > 0)
    ? `Object has total ${Object.keys(gamer).length} Keys`
    : `Object is Empty !`;
}

console.log(isObjectEmpty(gamer));

let corporateJob={

}

console.log(isObjectEmpty(corporateJob));

