function user(name){
let username=name;

return{
    setUsername:function (newName) {
        this.username=newName;
        return `userName Changed to ${this.username}`
},
    getUsername:function () {
        return username;
}
        
}
}

let User1=new user("Dipak");

console.log("User1.getUsername()"+User1.getUsername());
console.log("User1.username"+User1.username);

console.log('User1.setUsername("Uday")'+User1.setUsername("Uday"));
