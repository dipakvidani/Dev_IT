// //1.Do Print 1 to 100 and diveded by 3 and 5 do skip and 3 and 5 multiply are there in 1 to 100 in js.
// 2.Write a Paragraph and it's already Hide with Hide Button now in same button add Show paragraph and When Click On Show Paragraph It's Show Paragraph in js.
// 3.Write a program that give input Password and Put Show Eye icon when we click icon the password will be visible and again click on icon it's hide details.
// 4.Make a Dropdown Menu and Add deatils with JSON File add details in JSONfile that all you want to add in dropDown.
// 5.Make a Multiple inputs(Dropdown,Checkbox,Radio) and Add Details via in JSON File.
// 6.Add Radio Button and make one Radio BUtton Disable While click on button, and same do enable that radiobutton. and put submit button to get details what we want.
// 7.Find a Diffrence Between 2 array with deatils like capital and small latter find with the use of includes() Method in js.
// 8.Take a Two Array and Find Common Elements with interset Method in Js.
// 9.Use a method of Find()method and Check Multiple Properties in js.
// 10.Make a Deopdown Menu and Do Debounce In it in js.
// 11.Use window.print() Method and give spacific Option in it in js.
// 12.Make a Editable In js.
// 13.Is There any Way to Make a editable without using JS.
// 14.Make a Multiple Graphs(Flow,Pie,line) in Js.
// 15.R & D Canvas.js

// //1.Do Print 1 to 100 and diveded by 3 and 5 do skip and 3 and 5 multiply are there in 1 to 100 in js. use ternary operator

for (let i = 1; i <= 100; i++) {
  document.getElementById("numberOutput").innerText +=
    i % 3 === 0 && i % 5 === 0 ? " Skip" : " " + i;
}

// 2.Write a Paragraph and it's already Hide with Hide Button now in same button add Show paragraph and When Click On Show Paragraph It's Show Paragraph in js.

// use bootstrap

function handleParaVisibility() {
  {
    const paragraph = document.getElementById("paragraph");
    if (paragraph.classList.contains("d-none")) {
      paragraph.classList.remove("d-none");
      paragraph.classList.add("d-block");
      paragraph.innerText = "Hide Paragraph";
    } else {
      paragraph.classList.remove("d-block");
      paragraph.classList.add("d-none");
      paragraph.innerText = "Show Paragraph";
    }
  }
}

// 4.Make a Dropdown Menu and Add deatils with JSON File add details in JSONfile that all you want to add in dropDown.
//for recipes tags

const recipes = [
  { id: 1, name: "Pasta", tags: ["Italian", "Vegetarian"] },
  { id: 2, name: "Sushi", tags: ["Japanese", "Seafood"] },
  { id: 3, name: "Tacos", tags: ["Mexican", "Spicy"] },
  { id: 4, name: "Curry", tags: ["Indian", "Spicy"] },
  { id: 5, name: "Salad", tags: ["Healthy", "Vegetarian"] },
];

function createDropdown() {
  const dropdown = document.getElementById("recipeDropdown");
  recipes.forEach((recipe) => {
    const option = document.createElement("option");
    option.value = recipe.id;
    option.textContent = recipe.name;
    dropdown.appendChild(option);
  });
}

// Call the function to populate the dropdown
createDropdown();

// 6.Add Radio Button and make one Radio BUtton Disable While click on button, and same do enable that radiobutton. and put submit button to get details what we want.
function radioButtonEnable() {
  const radioButton = document.getElementById("student");
  radioButton.disabled = !radioButton.disabled;
}

// 7.Find a Diffrence Between 2 array with deatils like capital and small latter find with the use of includes() Method in js.
const array1 = ["A", "B", "C", "D"];
const array2 = ["a", "b", "c", "d"];

const differenceElement = array1.filter(
  (item) => !array2.includes(item.toLowerCase())
);
document.getElementById("arrayDifference").innerText =
  "Difference between arrays: " + differenceElement.join(", ");

// 8.Take a Two Array and Find Common Elements with interset Method in Js.
const array3 = ["apple", "banana", "cherry"];
const array4 = ["banana", "kiwi", "cherry"];

const commonElements = array3.filter((item) => array4.includes(item));
document.getElementById("commonElements").innerText =
  "Common elements: " + commonElements.join(", ");

// 9.Use a method of Find()method and Check Multiple Properties in js. //use pizza object
const pizzas = [
  { name: "Margherita", vegetarian: true, price: 8.99 },
  { name: "Pepperoni", vegetarian: false, price: 9.99 },
  { name: "Veggie Supreme", vegetarian: true, price: 10.99 },
];

function findPizzaByName(name) {
  return pizzas.find(
    (pizza) => pizza.name.toLowerCase() === name.toLowerCase()
  );
}

function findVegetarianPizzas() {
  return pizzas.filter((pizza) => pizza.vegetarian);
}

function findPizzaByPrice(maxPrice) {
  return pizzas.filter((pizza) => pizza.price <= maxPrice);
}

// 10.Make a Deopdown Menu and Do Debounce In it in js.

const technologies = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
  "TypeScript",
  "Go",
];

function createDropdownMenu() {
  const dropdown = document.getElementById("dropdownMenu");
  technologies.forEach((tech) => {
    const option = document.createElement("option");
    option.value = tech;
    option.textContent = tech;
    dropdown.appendChild(option);
  });
}

// Call the function to populate the dropdown menu
createDropdownMenu();
let debounceTimeout;
// Debounce function to limit the rate of function execution

function debounce(func, delay) {
  return function (...args) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function filterDropdown() {
  const input = document.getElementById("dropdownInput").value.toLowerCase();
  const dropdown = document.getElementById("dropdownMenu");
  const options = dropdown.querySelectorAll("option");

  options.forEach((option) => {
    if (option.textContent.toLowerCase().includes(input)) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
}


// 11.Use window.print() Method and give spacific Option in it in js.
function printPage() {
  window.print();
}

// 12.Make a Editable table In js.

function makeEditable() {
  const table = document.getElementById("editableTable");
  const rows = table.querySelectorAll("tr");

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    cells.forEach((cell) => {
      cell.contentEditable = true;
      cell.style.border = "1px solid black";
    });
  });
}

// 13.Is There any Way to Make a editable without using JS.
// Yes,
// <div contenteditable="true">This text is editable.</div>


