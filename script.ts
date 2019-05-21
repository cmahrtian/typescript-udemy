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