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

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element))
}
printAll<string>(['Apple', 'Banana'])

// Generic Types
const echo2: <T>(data: T) => T = betterEcho

console.log(echo2<string>('something'))

// Generic Class
class SimpleMath<T> {
    baseValue: T
    mutiplyValue: T
    calculate(): number {
        return +this.baseValue * +this.mutiplyValue
    }
}

const simpleMath = new SimpleMath()
simpleMath.baseValue = 10
simpleMath.mutiplyValue = 20
console.log(simpleMath.calculate())