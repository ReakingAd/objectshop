const { deepCopy } = require('./utils')

/**
 * @desc 返回类型
    objectshop.type({}) // object
    objectshop.type([]) // array
    objectshop.type('') // string
    objectshop.type(1) // number
    objectshop.type(NaN) // number
    objectshop.type(true) // boolean
    objectshop.type(undefined) // undefined
    objectshop.type(null) // null
    objectshop.type(function(){}) // function
    objectshop.type(new Date()) // date
 * @param {any} src 
 */
function type(src){
    const rType = /(\[object\s)([a-zA-Z]*?)(\]$)/;
    const typeDesc = Object.prototype.toString.call(src);
    const matchRes = typeDesc.match(rType)

    return matchRes[2].toLowerCase()
}

const isObject = src => type(src) === 'object'; 
const isArray = src => type(src) === 'array';
const isString = src => type(src) === 'string'; 
const isNumber = src => type(src) === 'number';
const isUndefined = src => type(src) === 'undefined';

const _hasDirect = (src, key) => {
    if(!isObject(src) && !isArray(src)){
        return false;
    }
    return src.hasOwnProperty(key);
}

const has = (src, path) => {
    if(!isObject(src) && !isArray(src)){
        console.warn('wrong src, only object, array available')
        return false;
    }
    if(isString(path) || isNumber(path))
        return _hasDirect(src, path)
    let pathPoint = 0, 
        len = path.length, 
        srcPoint = deepCopy(src), 
        res = true;

    while(pathPoint < len){
        let key = path[pathPoint]
        if(!_hasDirect(srcPoint, key)){
            res = false;
            break;
        }
        srcPoint = srcPoint[key]
        pathPoint++;
    }
    
    return res;
}

function get(src, path){
    if(!isObject(src) && !isArray(src)){
        return undefined;
    }
    if(!isString(path) && !isNumber(path) && !isArray(path)){
        return undefined;
    }

    if(isString(path) || isNumber(path)) return src[path];

    if(isArray(path) && path.length === 0) return undefined;

    let point = 0, len = path.length, dest = deepCopy(src);
    while(point < len){
        let key = path[point];
        if(!_hasDirect(dest, key)){
            dest = undefined;
            break;
        }
        dest = dest[key]
        point++;
    }

    return dest
}

function _setDirect(src, keyname, newValue){
    if(!isObject(src) && !isArray(src)){
        console.warn('wrong path, only string, number, array available')
        return src
    }
    
    let dest = deepCopy(src);
    dest[keyname] = newValue;
    
    return dest;
}

const set = (src, path, newValue) => {
    if(!isObject(src) && !isArray(src)){
        console.warn('wrong path, only string, number, array available')
        return src
    }
    if(!isString(path) && !isNumber(path) && !isArray(path)){
        console.warn('wrong path, only string, number, array available')
        return src;
    }
    
    if(isString(path) || isNumber(path)) return _setDirect(src, path, newValue)

    let len = path.length;

    if(len === 0) return src;

    if(len === 1) return _setDirect(src, path[0], newValue)

    let layer, key = path[0], childKey = path[1]
    if(has(src, key)){
        layer = src[key]
    }
    else {
        layer = isString(childKey) ? {} : []
    }
    let dest = _setDirect(src, key, set(layer, path.slice(1), newValue))
    
    return dest
}

const OBJECTSHOP = {
    has, get, set, type
}
module.exports = OBJECTSHOP