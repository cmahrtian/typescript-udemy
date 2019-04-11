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

//Static Properties & Methods
class Helpers {
    static PI: number = 3.14
    static calcCircumference(diameter: number): number {
        return this.PI * diameter
    }
}
console.log(2 * Helpers.PI)
console.log(Helpers.calcCircumference(8))

// Abstract Classes
abstract class Project {
    projectName: string = 'Default'
    budget: number

    abstract changeName(name: string): void
    
    calcBudget() {
        return this.budget * 2
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name
    }
}

let newProject = new ITProject()
console.log(newProject)
newProject.changeName('Super IT Project')
console.log(newProject)

// Private Constructors
class OnlyOne {
    private static instance: OnlyOne

    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One')
        }
        return OnlyOne.instance
    }
}

let wrong = new OnlyOne('The Only One')
let right = OnlyOne.getInstance()
console.log(right.name)
right.name = 'Something else'
console.log(right.name)

// Exercise 1 - Class
console.log('EXERCISE 1 - Class')
class Car {
    name: string
    acceleration: number = 0

    constructor(name: string) {
        this.name = name
    }

    honk() {
        console.log('Tooooot!')
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed
    }
}

const car = new Car('BMW')
car.honk()
console.log(car.acceleration)
car.accelerate(20)
console.log(car.acceleration)

// Exercise 2 - Inheritance
console.log('EXERCISE 2 - Inheritance')
class BaseObject {
    width = 0
    length = 0
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length
    }
}

const rectangle = new Rectangle()
rectangle.width = 5
rectangle.length = 10
console.log(rectangle.calcSize())

// Exercise 3 - Getters & Setters
console.log('EXERCISE 3 - Getters & Setters')
class humanBeing {
    private _firstName: string = ''

    get firstName() {
        return this._firstName
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value
        } else {
            this._firstName = ''
        }
    }
}

const human = new humanBeing()
console.log(human.firstName)
human.firstName = 'Ma'
console.log(human.firstName)
human.firstName = 'Chris'
console.log(human.firstName)