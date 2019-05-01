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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Chris';
myPerson.lastName = 'Null';
greet(myPerson);
myPerson.greet(myPerson.lastName);
