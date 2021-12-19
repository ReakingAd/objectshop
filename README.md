# objectshop
get, set a key of a JavaScript Object

# Installation

Using npm:
```
$ npm i --save objectshop
```

In Node.js:
```javascript
var OBJECTSHOP = require('objectshop');
const obj1 = {
    a: {
        b: ['b1', 'b2', 'b3']
    }
}
let value = OBJECTSHOP.get(obj1, ['a', 'b', 1]) // b2
let newObj = OBJECTSHOP.set(obj1, ['a', 'b'], 'newStr') // {a: {b: 'newStr}}
```