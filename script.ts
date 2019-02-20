// STRING
let myName = 'Chris'
// myName = 34

// NUMBER
let myAge = 34.3
// myAge = 'Chris'

// BOOLEAN
let lovesFood: boolean = true
// lovesFood = 'Of course'

// ANY (assign types)
let myRealAge
myRealAge = 34
myRealAge = '34'

// ARRAY
let hobbies: any[] = ['Cooking', 'Sports']
hobbies = ['100']

// TUPLE
let address: [string, number] = ['Main Street', 99]

// ENUM
enum Color {
    Gray, // 0
    Green = 100, // 1
    Blue // 2
}
let myColor: Color = Color.Blue
console.log(myColor)

// any
let car: any = 'BMW'
console.log(car)
car = { brand: 'BMW', series: 3 }
console.log(car)

// functions
function returnMyName(): string {
    return myName
}
console.log(returnMyName())

// void (for functions that don't return anything)
function sayHello(): void {
    console.log('Hello!')
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2
}
// console.log(multiply(2, 'Chris'))
console.log(multiply(2, 10))

// function types
let myMultiply: (val1: number, val2: number) => number
// myMultiply = sayHello
// myMultiply()
myMultiply = multiply
console.log(myMultiply(2, 2))

// objects
let userData: { name: string, age: number } = {
    name: 'Chris',
    age: 34
}
// userData = {
//     a: 'Hello',
//     b: 22
// }