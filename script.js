"use strict";
// let & const
console.log('LET & CONST');
var variable = 'Test';
console.log(variable);
variable = 'Another value';
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99 // won't work
// Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log('ARROW FUNCTIONS');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () { return console.log('Hello!'); };
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('Chris');
// Default Parameters
console.log('DEFAULT PARAMETERS');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown();
//Rest & Spread
console.log('REST & SPREAD');
var numbers = [1, 10, 99, -5];
console.log(Math.max(1, 10, 99, -5));
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray('Dan', 1));
// Destructuring
console.log('DESTRUCTURING');
var myHobbies = ['Cooking', 'Sports'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = {
    userName: 'Chris',
    age: 34
};
var userName = userData.userName, age = userData.age;
console.log(userName, age);
// Template Literals
var myName = 'Chris';
var greeting = "Hello, I'm " + myName + "!\nIt's nice to meet you!";
console.log(greeting);
