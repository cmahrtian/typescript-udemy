class Person {
    name: string
    private type: string | undefined
    protected age: number = 34

    constructor(name: string, public username: string) {
        this.name = name
    }

    printAge() {
        console.log(this.age)
        this.setType('Bon vivant')
    }

    private setType(type: string) {
        this.type = type
        console.log(this.type)
    }
}

const person = new Person('Chris', 'cmahr')
console.log(person.name, person.username)
person.printAge()
// person.setType('Web developer')

// Inheritance
class Chris extends Person {
    // name = 'Chris'

    constructor(username: string) {
        super('Chris', username)
        this.age = 27
        // console.log(this.type)
    }
}

const chris = new Chris('cmahr')
console.log(chris)

// Getters & Setters
class Plant {
    private _species: string = 'Default'

    get species() {
        return this._species
    }
    
    set species(value: string) {
        if (value.length > 3) {
            this._species = value
        } else {
            this._species = 'Default'
        }
    }
}

let plant = new Plant()
console.log(plant.species)
plant.species = 'AB'
console.log(plant.species)
plant.species = 'Green Plant'
console.log(plant.species)