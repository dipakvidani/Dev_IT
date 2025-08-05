const settings = {
  theme: "dark",
  autosave: true,
};

let userInput = "theme";
console.log(settings[userInput]); // "dark" ✅ dynamic access

// console.log(settings.userInput); ❌ undefined

// console.log(...settings);

console.log(settings.theme?.dark);


settings["[1,2,3]"]="Diapk"


console.log(settings);

// let users = [1,2,3,4,5,6];
// let result = users.find(user => user===10);
// console.log("result", result); // {id: 2}

let users = [{id: 1}, {id: 2}];
let result = users.filter(user => user.id==1);
console.log("result", result); // {id: 2}




