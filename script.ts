interface NamedPerson {
    firstName: string
    age?: number
    [propName: string]: any
    greet(lastName: string): void
}

function greet(person: NamedPerson) {
    console.log(`Hello, ${person.firstName}`)
}

function changeName(person: NamedPerson) {
    person.firstName = 'Dan'
}

const person: NamedPerson = {
    firstName: 'Chris',
    hobbies: ['cooking', 'sports', 'coding'],
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}

// greet({firstName: 'Chris', age: 34})
greet(person)
changeName(person)
greet(person)
person.greet('Mahr')

class Person implements NamedPerson {
    firstName!: string
    lastName!: string
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}

const myPerson = new Person()
myPerson.firstName = 'Chris'
myPerson.lastName = 'Null'
greet(myPerson)
myPerson.greet(myPerson.lastName)

// Function Types
interface DoubleValueFunc {
    (number1: number, number2: number): number
}

let myDoubleFunction: DoubleValueFunc
myDoubleFunction = function(value1: number, value2: number) {
    return (value1 + value2) * 2
}

console.log(myDoubleFunction(10, 20))