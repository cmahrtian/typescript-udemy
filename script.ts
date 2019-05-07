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

// Built-In Generics
const testResults: Array<number> = [1.94, 2.33]
testResults.push(-2.99)
console.log(testResults)