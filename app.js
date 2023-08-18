const strImport = require("./fileA");
const classA = require("./classA");
const ClassA = require("./classA");
const myObj = require("./objectA");
const Math = require('./math');

// ## Area of a Rectangle ##
const area = Math.area(5,10);
console.log(area)

// ## perimeter of a Rectangle ##
const perimeter = Math.perimeter(5,10);
console.log(perimeter)

// ## sum ##
// const sum = Math.add(5, 10);
// console.log(sum)

// ## interval ##
// setInterval(()=> {

//     console.log("meow after 5 sec"), 5000

// })


// ## creating class instance after exporting the class ##
// const classObj = new ClassA();
// classObj.myFunc();

// console.log(strImport)

// classA.myFunc();

// myObj.methodA();