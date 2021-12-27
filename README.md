# objectshop
get, set a path key of a JavaScript Object. It always return a new Object when you modify a deep key, which is easily used in React.

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
In React
```javascript
import objectshop from 'objectshop'
const obj1 = {
    a: {
        b: ['b1', 'b2', 'b3']
    }
}
let value = OBJECTSHOP.get(obj1, ['a', 'b', 1]) // b2
let newObj = OBJECTSHOP.set(obj1, ['a', 'b'], 'newStr') // {a: {b: 'newStr}
```
