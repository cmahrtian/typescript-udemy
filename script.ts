interface NamedPerson {
    firstName: string
}

function greet(person: NamedPerson) {
    console.log(`Hello, ${person.firstName}`)
}

function changeName(person: NamedPerson) {
    person.firstName = 'Dan'
}

const person = {
    firstName: 'Chris',
    age: 34
}

greet(person)
changeName(person)
greet(person)