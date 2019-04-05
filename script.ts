// let & const
console.log('LET & CONST')
let variable = 'Test'
console.log(variable)
variable = 'Another value'
console.log(variable)

const maxLevels = 100
console.log(maxLevels)
// maxLevels = 99 // won't work

// Block scope
function reset() {
    let variable = null
    console.log(variable)
}

reset()
console.log(variable)

// Arrow Functions
console.log('ARROW FUNCTIONS')
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2
}
console.log(addNumbers(10, 3))

const multiplyNumbers = (number1: number, number2: number) => number1 * number2
console.log(multiplyNumbers(10, 3))

const greet = () => console.log('Hello!')
greet()

const greetFriend = (friend: string) => console.log(friend)
greetFriend('Chris')

// Default Parameters
console.log('DEFAULT PARAMETERS')
const countdown = (start: number = 10): void => {
    console.log(start)
    while (start > 0) { start -- }
    console.log('Done!', start)
}
countdown()

//Rest & Spread
console.log('REST & SPREAD')
const numbers = [1, 10, 99, -5]
console.log(Math.max(1, 10, 99, -5))
console.log(Math.max(...numbers))

function makeArray(...args: [string, number]) {
    return args
}
console.log(makeArray('Dan', 1))

// Destructuring
console.log('DESTRUCTURING')
const myHobbies = ['Cooking', 'Sports']
const [hobby1, hobby2] = myHobbies
console.log(hobby1, hobby2)

const userData = {
    userName: 'Chris',
    age: 34
}
const {userName, age} = userData
console.log(userName, age)