require("./xyz.js");
const {calculateSum,me,calculateMultiply}= require("./calculate/index");

var name = "yashwanth";
var a = 10;
var b = 20;

//console.log(name);
console.log(a+b);

calculateSum(a,b);
calculateMultiply(a,b);
console.log(me);

//console.log(globalThis)