interface NamedPerson {
    firstName: string
    age?: number
    [propName: string]: any
}

function greet(person: NamedPerson) {
    console.log(`Hello, ${person.firstName}`)
}

function changeName(person: NamedPerson) {
    person.firstName = 'Dan'
}

const person = {
    firstName: 'Chris',
    hobbies: ['cooking', 'sports', 'coding']
}

greet({firstName: 'Chris', age: 34})
changeName(person)
greet(person)