let student=new Set();

console.log(student.delete("Dipak"));   ///boolean T|F
student.add("Dipak")
console.log(student);



let arrayWithDuplicateValues=[1,2,2,3,4,4,5,6];

let array=new Set(arrayWithDuplicateValues);
//convert set to array by default set is object
console.log([...array]);

let simpleObject={
    name:"BMW",
    price:20000
}

console.log(Object.keys(simpleObject).length);  //know obj entries or length

// let studentmap=new Map(["name","Diapak"],["age",23],[{1:1},{2:2}])

// console.log(studentmap);

const userRoles = new Map();

userRoles.set('admin', 'Full Access');
userRoles.set('editor', 'Edit Content');
userRoles.set('viewer', 'Read Only');

console.log(userRoles);


