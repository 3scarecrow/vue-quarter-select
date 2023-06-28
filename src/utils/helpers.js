export function isType(val, type) {
  return Object.prototype.toString.call(val).slice(8, -1) === type
}

export function isString(val) {
  return isType(val, 'String')
}

export function isArray(val) {
  return isType(val, 'Array')
}

export function isFunction(val) {
  return isType(val, 'Function')
}

export function isDate(val) {
  return isType(val, 'Date')
}

export function isUndefined(val) {
  return isType(val, 'Undefined')
}

export function pick(obj, keys) {
  return keys.reduce((r, k) => {
    return (obj[k] && (r[k] = obj[k]), r)
  }, {})
}

export function omit(obj, keys) {
  return Object.keys(obj).reduce((r, k) => {
    !keys.includes(k) && (r[k] = obj[k])
    return r
  }, {})
}

export function camelize(str) {
  return str.replace(/-(\w)/g, (_, w) => w ? w.toUpperCase() : w)
}

export function kebabCase(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

// 创建新对象，对象的 key 由 iteratee 返回值组成
export function mapKey(object, iteratee) {
  object = Object(object)
  const result = {}
  Object.keys(object).forEach((key) => {
    const value = object[key]
    result[iteratee(value, key, object)] = value
  })
  return result
}
