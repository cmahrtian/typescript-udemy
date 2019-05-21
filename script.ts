function logged(constructorFn: Function) {
    console.log(constructorFn)
}

@logged
class Person {
    constructor() {
        console.log('Hi!')
    }
}

// Factory
function logging(value: Boolean) {
    return value ? logged : null
}

@logging(true)
class Car {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this)
    }
}

@printable
class Plant {
    name = 'Green Plant'
}
const plant = new Plant();
(<any>plant).print()