const OBJECTSHOP = require('./index.js')

let obj = {
    a: {
        b1: '1',
        b2: [1,2,[3]]
    }
}
// console.log(obj)
let obj2 = {
    a: 'aaaa'
}
let obj3 = [
    {
        a:1, 
        b: {
            c: 'c'
        }
    },
    'bbbb'
]
let obj4 = 4
let path = ['1', 'b']
let result = OBJECTSHOP.get(obj3, [1, 'b', 'c'])
// let result = OBJECTSHOP.set(obj, ['a', 'b1'], {d:'ddd'})
console.log(result)
// console.log(JSON.stringify(result))
// let result = OBJECTSHOP.set(obj, 1, 99)
// console.log(path)