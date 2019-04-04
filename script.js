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
