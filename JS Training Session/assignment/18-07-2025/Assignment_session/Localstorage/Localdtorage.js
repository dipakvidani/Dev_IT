//Question 1:SET DETAILS IN LOCALSTORAGE

// localStorage.setItem("company name", "Dev IT");

// console.log(localStorage.getItem("companyName"));

//function for store data in Localstorage
let setDetailsInLocalStorage = (key, value) => {
  console.log(
    `Adding one Data to Localstorage key is ${key} : value is ${value}`
  );
  localStorage.setItem(key, value);
};

//function for get data from Localstorage
let getDetailsFromLocalStorage = (key) => {
  console.log(`getting value of ${key} from Localstorage `);

  return localStorage.getItem(key);
};

setDetailsInLocalStorage("empId", "TDV 1002");

let getTheValueofKey = "empId";

console.log(
  `value of key ${getTheValueofKey} ` +
    getDetailsFromLocalStorage(getTheValueofKey)
);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Remove one Data from the LocalStorage
let keyToDeleteFromlocalStorage = "empId";

console.log(`removing ${keyToDeleteFromlocalStorage} from Localstorage`);

localStorage.removeItem(keyToDeleteFromlocalStorage);

console.log(`after removing ${keyToDeleteFromlocalStorage} from Localstorage`);

console.log(
  `get LocalStorage data after removing ${keyToDeleteFromlocalStorage} from Localstorage : ${getDetailsFromLocalStorage(
    keyToDeleteFromlocalStorage
  )}`
);

console.log(
  `getDetailsFromLocalStorage(keyToDeleteFromlocalStorage):${getDetailsFromLocalStorage(
    keyToDeleteFromlocalStorage
  )}`
);

function isValueAvailabeInLocalStorage(key) {
  if (getDetailsFromLocalStorage(key)) {
    console.log(`${key} is available in LocalStorage...`);
    return true;
  } else {
    console.log(`${key} is not available in LocalStorage...`);
    return false;
  }
}

let keyForCheckKeyPresence="empId"

isValueAvailabeInLocalStorage(keyForCheckKeyPresence)


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Set full object or json into the 

//CLEAR A WHOLE LOCAL STORAGE
// localStorage.clear()
