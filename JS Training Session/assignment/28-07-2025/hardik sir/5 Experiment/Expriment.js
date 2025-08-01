const obj = {
  a: "foo",
  b: function () {
    console.log(this);
    
    console.log("Inside b",this.a);    //for this--->function
  },
};
const c = obj.b;    //this is window/globle scope or undefine   //not accessed stand aloone
obj.b() //this is function  bcZ we call it object

 c()            //not acess stand alone give  undefined