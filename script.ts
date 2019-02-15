// STRING
let myName = 'Chris'
// myName = 34

// NUMBER
let myAge = 34.3
// myAge = 'Chris'

// BOOLEAN
let lovesFood: boolean = true
// lovesFood = 'Of course'

// ANY (assign types)
let myRealAge
myRealAge = 34
myRealAge = '34'

// ARRAY
let hobbies: any[] = ['Cooking', 'Sports']
hobbies = ['100']

// TUPLE
let address: [string, number] = ['Main Street', 99]

// ENUM
enum Color {
    Gray, // 0
    Green = 100, // 1
    Blue // 2
}
let myColor: Color = Color.Blue
console.log(myColor)