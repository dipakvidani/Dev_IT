// Create a Base Class of your choice​
// Add relevant fields to the class considering ‘encapsulation’​
// Use constructor to initialize the properties​
// Add a prototype method getDetails() that returns class info​
// Add static method to the class​
// Create another class (with some extra property) that extends base class ​

// Question 1 : Create a Base Class of your choice​

// class Employee {
//   constructor(name, empid) {
//     this.name = name;
//     this.empid = empid;
//   }
// }

//Question 2 : Add relevant fields to the class considering ‘encapsulation’​
// class Employee {
//   #salary = 7000;

//   constructor(name, empid) {
//     this.name = name;
//     this.empid = empid;
//   }

//   get_emp_details() {
//     return console.log(
//       "Name: ",
//       this.name,
//       "Emp_ID: ",
//       this.empid,
//       "salary: ",
//       this.#salary
//     );
//   }
// }

//Question 3: Use constructor to initialize the properties

// ​
// class Employee {
//   #salary = 7000;

//   constructor(name, empid) {
//     this.name = name;
//     this.empid = empid;
//   }

//   get_emp_details() {
//     return console.log(
//       "Name: ",
//       this.name,
//       "Emp_ID: ",
//       this.empid,
//       "salary: ",
//       this.#salary
//     );
//   }
// }

// let emp1 = new Employee("Dipak", "TDV 1002");

// console.log(emp1.get_emp_details());

//Question 4 : Add a prototype method getDetails() that returns class info​

// class Employee {
//   #salary = 7000;

//   constructor(name, empid) {
//     this.name = name;
//     this.empid = empid;
//   }

//   getDetails() {
//     return console.log(
//       "Name: ",
//       this.name,
//       "Emp_ID: ",
//       this.empid,
//       "salary: ",
//       this.#salary
//     );
//   }
// }

// let emp1 = new Employee("Dipak", "TDV 1002");

// console.log(emp1.getDetails());

//Question 5 : Add static method to the class​

// class Employee {
//   #salary = 7000;

//   constructor(name, empid,company_name) {
//     this.name = name;
//     this.empid = empid;
//     this.company_name=company_name;
//   }

//   static Resign() {
//     this.company_name=""
//    return `I am Resigning...I am not felling Well...`;
//   }

//   getDetails() {
//    return `Name : ${this.name}, EmpID : ${this.empid}, company_name : ${this.company_name}, salary : ${this.#salary}`
//   }
// }

// let emp1 = new Employee("Dipak", "TDV 1002", "DEV IT");

// console.log("Employee Details : ",( emp1.getDetails()));

// console.log("Static Resign Function : ", (Employee.Resign()));

// Question 6 : Create another class (with some extra property) that extends base class ​

class Employee {
  #salary;

  constructor(empname, empid, company_name) {
    this.empname = empname;
    this.empid = empid;
    this.company_name = company_name;
  }

  static Resign() {
    this.company_name = "";
    return `My name is ${this.empname} I am Resigning ...I am not felling Well ...Good Bye Take care ...`;
  }

  getDetails() {
    return `Name : ${this.empname}, EmpID : ${this.empid}, company_name : ${
      this.company_name
    }, salary : ${this.#salary}`;
  }
}

class Manger extends Employee {
  constructor(empname, empid, company_name, teammembers) {
    super(empname, empid, company_name);
    this.teammembers = teammembers;
    this.designation = this.constructor.name;
  }

  getDetails() {
    return `${super.getDetails()}, designation:${
      this.designation
    }, teammembers : ${this.teammembers}`;
  }

  getTeamDetails() {
    return `Your Team members names are :${this.teammembers}`;
  }
}

Manger.prototype.setDeadline = function (project) {
    
  const currentDate = new Date();

  // Calculate deadline 3 months from now
  const deadlineDate = new Date(currentDate);
  deadlineDate.setMonth(deadlineDate.getMonth() + 3);

  // Format the date
  const formattedDate = deadlineDate.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return `Hey ${this.teammembers} Your deadline for project "${project}" is  ${formattedDate}`;
};

// let emp1 = new Employee("Dipak", "TDV 1002", "DEV IT");

// console.log("Employee Details : ", emp1.getDetails());

// console.log("Static Resign Function : ", Employee.Resign());

let Manager1 = new Manger("Dipak", "TDV 1002", "DEV IT", [
  "Dhruv",
  " Shashwat",
  " Ruchit"
]);

console.log(Manager1.getDetails());

console.log(Manager1.setDeadline("Tea cofee"));
