"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Dan';
}
var person = {
    firstName: 'Chris',
    hobbies: ['cooking', 'sports', 'coding']
};
greet({ firstName: 'Chris', age: 34 });
changeName(person);
greet(person);
