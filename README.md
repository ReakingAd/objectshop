# objectshop
get, set a key of a JavaScript Object

# Installation

Using npm:
```
$ npm i --save objectshop
```

In Node.js:
```javascript
var objectshop = require('objectshop');
const obj = {
    a: {
        b: ['b1', 'b2', 'b3']
    }
}
let hasA = objectshop.has(obj, ['a', 'b']) // true
let value = objectshop.get(obj, ['a', 'b', 1]) // b2
let newObj = objectshop.set(obj, ['a', 'b'], 'newStr') // {a: {b: 'newStr'}}
```