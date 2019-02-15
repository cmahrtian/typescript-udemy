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
