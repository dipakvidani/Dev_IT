//proxy and reflact

// --> proxy basically means to intercepter or intermidiotar or we can say a middle thing all opration 
//     must go thorough it it add a more security by the conditional opration

// -->Reflect is like a proxy which is executte the js default behavior which can help the encounter 
//     the age case problem it is like a prevention step for object manuplation

// -->hear we we use proxy but return the response/perform the opration using Reflact  

let Employee = {
    name: "Dipak",
    city: "Botad",
    age: 23,
    emp_id: "TDV 1002"
}

let lockedProp = "emp_id";


let Employee_Proxy = new Proxy(Employee, {
    get(target, prop) {
        if (prop in target) return Reflect.get(target, prop)
        return false;
    },
    set(target, prop, value) {
        if (!(prop in target)) throw new Error`${prop} not exist in ${target}`
        switch (prop) {
            case "name":
            case "city":
                if (typeof value == "string") {
                    return Reflect.set(target, prop, value);
                }

                throw new Error(`Invalid Datatype of ${prop} it should be String`);


            case "age": if (typeof value == "number") {
                return Reflect.set(target, prop, value);
            }
                throw new Error(`Invalid Datatype of ${prop} it should be number`);


            case "emp_id": if (prop === lockedProp) {
                throw new Error(`Property "${lockedProp}" is locked.`);
            }
                return Reflect.set(target, prop, value);

            default: return Reflect.set(target, prop, value);
        }
    }
})


console.log("Employee age from use of proxy and reflact", Employee_Proxy["age"]);

// console.log(Employee_Proxy["age"] = "Botad");
// console.log(Employee_Proxy["city"] = 123);

console.log(Employee_Proxy);


//see the method overriding & overloading

//Q6 symbols

let student = {
    name: "Dipak",
    age: 23,
    enroll_number: 210430116079,
    city: 'Botad',
}

let Student_Proxy = new Proxy(student, {
    get(target, prop) {
        if (prop in target) return Reflect.get(target, prop);
        return false;
    },
    set(target, prop, value) {
        if (!(prop in target)) throw new Error(`${prop} not exist in ${target}`);

        switch (prop) {
            case "name":
            case "city":
                if (typeof value == "string") {
                    return Reflect.set(target, prop, value);
                }

                throw new Error(`Invalid Datatype of ${prop} it should be String`);


            case "age": if (typeof value == "number") {
                return Reflect.set(target, prop, value);
            }
                throw new Error(`Invalid Datatype of ${prop} it should be number`);


            case "enroll_number": if (prop === lockedProp) {
                throw new Error(`Property "${lockedProp}" is locked.`);
            }
                
            case "id":if (prop === lockedPropInStudent) throw new Error(`Property "${lockedProp}" is locked.`);
                return Reflect.set(target, prop, value);

            default: return Reflect.set(target, prop, value);
        }
    }
})

let id = Symbol("id");

student["id"] = 79;

Object.defineProperty(student, "id", { configurable: false, writable: false });

student["id"]=65;

console.log("Student ID : " + student["id"]);

//Assignments

let Employee1 = {
    emp_id: "TSN 1002",
    name: "Shashwat",
    age: 22,
}

let Employee1_Proxy = new Proxy(Employee1, {
    get(target, prop) {
        if (prop in target) return Reflect.get(target, prop);
        throw new Error(`${prop} is not availabe in this ${target}`)
    },
    set(target, prop, value) {

        // if(!(target[prop])) throw new Error (`${prop} is not avilable in ${target}`);

        switch (prop) {

            case "emp_id":
                if (typeof value == "number") return Reflect.set(target, prop, value);
                throw new Error(`${prop} is Only accept the Number`);

            case "name":
                if (typeof value == "string") return Reflect.set(target, prop, value);
                throw new Error(`${prop} is Only accept the string`);

            case "age":
                if (typeof value == "number") return Reflect.set(target, prop, value);
                throw new Error(`${prop} is Only accept the Number`);

            default:
                return Reflect.set(target, prop, value);
        }
    }
})


Employee1_Proxy["Role"] = "intern";

console.log("Employee1_Proxy is now :", Employee1_Proxy);


//symbol as a secrate key --> user ID

let User = {
    name: "Ruchit",
    emp_id: "TRP 1002",
    age: 23,
}

let UserID = Symbol("UserID");

User["UserID"] = 1;


console.log("User object with symbol name userID : ", User);



//Browser Object Interaction

//-Display aleart with the use of current screen width and hight 

document.getElementById("btn-alert").addEventListener("click", function () {
    console.log(screen);

    alert(`Screen Height : ${screen.height}, Screen Width : ${screen.width}`);
})

// log the browser's user agent using navigator 
console.warn("User agents are :");

console.log(navigator.userAgent);

// check the if broswer is online or not

console.warn(navigator.onLine ? "Browser user is online" : "Browser user is offline");


//history back and forward
document.getElementById("btn-back").addEventListener("click", function () {

    history.back();

})

document.getElementById("btn-forward").addEventListener("click", function () {

    history.forward();

})

//add h1 with the text "Welcome Intern!" using document object

const h1 = document.createElement("h1");


h1.innerText = "Welcome Intern";
h1.id = "Main-Heading"

// document.body.appendChild(h1);

document.body.prepend(h1);


//btn for change the h1 text to "You Clicked the Button !!!"

document.getElementById("btn-welcome").addEventListener("click", () => {
    document.getElementById("Main-Heading").innerText = "You Clicked the Button !!!"
})

//btn for reset the page

document.getElementById("btn-Reset").addEventListener("click", () => {
    location.reload();
})

// Q1 Reflact Object in JavaScript 

console.log(Reflect);

// | Method                                        | Purpose                                    |
// | --------------------------------------------- | ------------------------------------------ |
// | `Reflect.get(target, propertyKey)`            | Like `target[propertyKey]`                 |
// | `Reflect.set(target, propertyKey, value)`     | Like `target[propertyKey] = value`         |
// | `Reflect.has(target, propertyKey)`            | Like `propertyKey in target`               |
// | `Reflect.deleteProperty(target, propertyKey)` | Like `delete target[propertyKey]`          |
// | `Reflect.ownKeys(target)`                     | Returns all keys (`Object.keys` + symbols) |
// | `Reflect.construct(target, args)`             | Like `new target(...args)`                 |
// | `Reflect.apply(targetFunc, thisArg, args)`    | Like `Function.prototype.apply`            |

// When would you use a Symbol instead of a regular string as an object key?

// | Feature                | String Keys | Symbol Keys                       |
// | ---------------------- | ----------- | --------------------------------- |
// | Globally visible       | ✅ Yes       | 🚫 No (unless using `Symbol.for`) |
// | Unique by default      | ❌ No        | ✅ Yes                             |
// | Enumerable (in loops)  | ✅ Yes       | 🚫 No (by default)                |
// | Risk of key collision  | ❌ Yes       | ✅ Avoided                         |
// | Used for meta-behavior | ❌ Rarely    | ✅ Common                          |

// 3. What is the difference between window.location and document.location?

// | Feature                  | `window.location`   | `document.location`                |
// | ------------------------ | ------------------- | ---------------------------------- |
// | ✅ Standard & recommended | Yes                 | ❌ No (deprecated in some browsers) |
// | 🔧 Accesses the URL info | Yes                 | Yes (same object)                  |
// | 👎 Deprecated            | No                  | Yes                                |
// | 💻 Availability          | All modern browsers | Might throw warnings               |


// window.location is part of the Window interface.

// document.location exists for backward compatibility and historical reasons.

// Both refer to the same Location object, which represents the current URL and provides methods like:

// assign()
// replace()
// reload()

// and properties like href, host, pathname, search, hash, etc.

// window.innerWidth;   // Viewport width (in pixels)
// window.innerHeight;  // Viewport height
// window.location.href // Current URL
// window.open()        // Open a new tab/window

// screen.width;        // Total screen width (e.g., 1920)
// screen.height;       // Total screen height
// screen.availWidth;   // Width excluding OS taskbar/docks
// screen.availHeight;  // Height excluding taskbar
// screen.colorDepth;   // Bit depth per pixel (e.g., 24)


//  4. How can you detect if the user is online using JavaScript?

// navigator.onLine ?
//     console.log("User is online")
//     :
//     console.log("User is offline")

// 5. Explain how the screen object differs from the window object.


// | Aspect                | `window`                                                | `screen`                                                  |
// | --------------------- | ------------------------------------------------------- | --------------------------------------------------------- |
// | **Represents**        | The **browser window/tab** (viewport + controls)        | The **entire physical screen** of the user's device       |
// | **Purpose**           | Used to control and interact with the **browser**       | Used to get **device display properties**                 |
// | **Common Properties** | `window.innerWidth`, `window.location`, `window.open()` | `screen.width`, `screen.availHeight`, `screen.colorDepth` |
// | **Scope**             | Refers to the **visible part of the webpage**           | Refers to the **whole monitor or device screen**          |
// | **Used For**          | Managing browser behavior                               | Detecting screen size, color depth, etc.                  |
