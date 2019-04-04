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
