class Person {
    name: string
    private type: string
    protected age: number

    constructor(name: string, public username: string) {
        this.name = name
    }
}

const person = new Person('Chris', 'cmahr')
console.log(person.name, person.username)