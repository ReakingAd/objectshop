const objectshop = require('./index')

// const src = {
//     a: {
//         b: 'ccc'
//     }
// }
// const src = [
//     {a: 'aaa'},
//     {b: [1,2,3]}
// ]
const src = 'poiu'
// const src = [
//     [1,2,3], [4,5,6]
// ]

console.log(src)
let result = objectshop.deepCopy(src)
console.log(result)
console.log('==========')
// result[0][1] = 999
// result[0]['a'] = 'ppppppppp'
result = 'aaaa'
console.log(src)
console.log(result)