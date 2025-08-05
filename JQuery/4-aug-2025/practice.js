// let regexp = /\.{3,}/g;
// console.log( "Hello!... How goes?.....".match(regexp));


let regexp = /#[a-f0-9]{6}/gi;

let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

console.log( str.match(regexp) )  // #121212,#AA00ef