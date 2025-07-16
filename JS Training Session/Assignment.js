// Date 11/07/2025


//Q1 Object that represent student 

const Student = {
    First_Name: "Dipak",
    Last_Name: "Vidani",
    age: 21,
    salary: "25,000",
    isActive: true
}

console.log(Student.isActive ? "Student is active" : "Student is inactive");    //?? nullish oprator ---> allow null value
console.log(Student.First_Name);
console.log(Student.Last_Name);
console.log(Student.age);
console.log(Student.salary);



// Q2 array of subject

const Subject = ["Math", "Physics", "English"];

Subject.push("Computer");

console.log(Subject);


// Q3 method--->Return full name 

const Student1 = {
    First_Name: "Dipak",
    Last_Name: "Vidani",
    age: 21,
    salary: "25,000",
    isactive: true,
    Fullname: function () {
        return this.First_Name + this.Last_Name;
    }
}

console.log(Student1.Fullname());
;

//Q4 student is active with Bollean

const Student2 = {
    First_Name: "Dipak",
    Last_Name: "Vidani",
    age: 21,
    salary: "25,000",
    isactive: true,
    toggleStatus: function () {
        this.isactive = !(this.isactive)
    },
    Fullname: function () {
        return this.First_Name + this.Last_Name;
    }
}

console.log(Student2.toggleStatus());
;

//Q5 Display Current Date and Random

let date = new Date();

console.log(date.getDate());
console.log(date.getDate());
console.log(date.getFullYear());

// Math random 

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 10));


//random number between 1 to 20

console.log(Math.floor(Math.random(1, 20) * 10));
