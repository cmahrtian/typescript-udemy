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