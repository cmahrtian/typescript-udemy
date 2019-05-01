"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Dan';
}
var person = {
    firstName: 'Chris',
    age: 34
};
greet(person);
changeName(person);
greet(person);
