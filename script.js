"use strict";
// STRING
var myName = 'Chris';
// myName = 34
// NUMBER
var myAge = 34.3;
// myAge = 'Chris'
// BOOLEAN
var lovesFood = true;
// lovesFood = 'Of course'
// ANY (assign types)
var myRealAge;
myRealAge = 34;
myRealAge = '34';
// ARRAY
var hobbies = ['Cooking', 'Sports'];
hobbies = ['100'];
// TUPLE
var address = ['Main Street', 99];
// ENUM
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void (for functions that don't return anything)
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Chris'))
console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello
// myMultiply()
myMultiply = multiply;
console.log(myMultiply(2, 2));
// objects
var userData = {
    name: 'Chris',
    age: 34
};
// userData = {
//     a: 'Hello',
//     b: 22
// }
