/**
 * 1. deepCopy
 * 2. 测试
 */
const {isObject, isArray, isString, isNumber, deepCopy} = require('./utils')

function get(obj, path){
    if(!isObject(obj) && !isArray(obj)){
        console.warn('Please check param type, Object or Array needed')
        return obj
    }
    if(isString(path) || isNumber(path)) return obj[path]
    if(path instanceof Array){
        let result = deepCopy(obj)
        let _path = [...path]
        let pathPassed = []
        while(_path.length > 0){
            let key = _path.shift();
            result = result[key]
            pathPassed = [...pathPassed, key]
            if(typeof result === 'undefined' && _path.length > 0){
                console.warn(`Please check path: ${pathPassed.join(' -> ')}`)
                break;
            }
        }
        return result
    }
}

function setDirect(obj, keyname, newValue){
    let _obj = deepCopy(obj)
    if(isObject(_obj)) return {..._obj, [keyname]: newValue}
    if(isArray(_obj)){
        _obj[keyname] = newValue
        return _obj
    }
}

function set(obj, path, newValue){
    console.log('path', path)
    if(!isObject(obj) && !isArray(obj)){
        console.warn('Please check param type, Object or Array needed')
        return obj
    }
    if(typeof path === 'string' || typeof path === 'number'){
        return setDirect(obj, path, newValue)
    }
    let _obj = deepCopy(obj)
    let _path = [...path]
    if(_path.length === 1){
        let key = _path.shift();
        return setDirect(_obj, key, newValue)
    }
    else{
        let key = _path.shift();
        return setDirect(_obj, key, set(_obj[key], _path, newValue))
    }
}

const OBJECTSHOP = {get, set}
module.exports = OBJECTSHOP