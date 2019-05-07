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
