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