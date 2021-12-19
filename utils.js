const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'
const isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'
const isString = obj => Object.prototype.toString.call(obj) === '[object String]'
const isNumber = obj => Object.prototype.toString.call(obj) === '[object Number]'

const deepCopy = src => JSON.parse(JSON.stringify(src))

module.exports = {
    isObject, isArray, isString, isNumber, deepCopy
}