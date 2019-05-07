"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Chris'));
console.log(echo(27));
console.log(echo({ name: 'Chris', age: 34 }).length);
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Chris').length);
console.log(betterEcho(27));
console.log(echo({ name: 'Chris', age: 34 }));
// Built-In Generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'Banana']);
