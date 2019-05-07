// Simple Generic
function echo(data: any) {
    return data
}

console.log(echo('Chris'))
console.log(echo(27))
console.log(echo({name: 'Chris', age: 34}).length)

// Better Generic
function betterEcho<T>(data: T) {
    return data
}

console.log(betterEcho('Chris').length)
console.log(betterEcho<number>(27))
console.log(echo({name: 'Chris', age: 34}))