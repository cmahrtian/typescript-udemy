"use strict";
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 34;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Bon vivant');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Chris', 'cmahr');
console.log(person.name, person.username);
person.printAge();
// person.setType('Web developer')
