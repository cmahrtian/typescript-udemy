// Simple Generic
function echo(data: any) {
    return data
}

console.log(echo('Chris').length)
console.log(echo(27))
console.log(echo({name: 'Chris', age: 34}).length)