"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Dan';
}
var person = {
    firstName: 'Chris',
    hobbies: ['cooking', 'sports', 'coding'],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet({firstName: 'Chris', age: 34})
greet(person);
changeName(person);
greet(person);
person.greet('Mahr');
