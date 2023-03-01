/**
 * 判断类型
 * @param {any} val 值
 * @param {*} type 类型
 * @returns boolean
 */
function isType(val, type) {
  return Object.prototype.toString.call(val).slice(8, -1) === type
}

/**
 * 解析日期
 * @param  {string | number} date
 * @return Date
 */
export function parseDate(...arg) {
  if (arg.length === 1 && isType(arg[0], 'String')) {
    return new Date(arg[0].replace(/-/g, '/'))
  } else {
    return new Date(...arg)
  }
}

/**
 * 转换 Date 类型
 * @param {any} date 值
 * @returns Date
 */
function ensureDate(date) {
  return isType(date, 'Date') ? date : parseDate(date)
}

/**
 * 补零
 * @param {string} val 值
 * @returns string
 */
function padStart(val) {
  return ('00' + val).slice(val.length)
}

/**
 *  格式化日期
 * @param {Date | string} dateOrDatestr 日期或者日期字符串
 * @param {string} format 日期格式 'yyyy-MM-dd hh:mm:ss'
 * @returns string
 */
export function formatDate(dateOrDatestr, format = 'yyyy-MM-dd') {
  if (!dateOrDatestr) return
  const date = ensureDate(dateOrDatestr)
  if (format === 'timestamp') return date.getTime()
  const reg = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  return Object.keys(reg).reduce((r, k) => {
    if (new RegExp(`(${k})`).test(format)) {
      const v = reg[k].toString()
      r = k.includes('y') ?
        r.replace(RegExp.$1, v.slice(4 - RegExp.$1.length)) :
        r.replace(RegExp.$1, RegExp.$1.length === 1 ? v : padStart(v))
    }
    return r
  }, format)
}

/**
 * 获取日期年份
 * @param {any} date 值
 * @returns number
 */
export function getYear(date) {
  return isType(date, 'String') ? parseDate(date).getFullYear() : date.getFullYear()
}

/**
 * 获取日期季度
 * @param {any} date 值
 * @returns number
 */
export function getQuarter(date) {
  const _date = isType(date, 'String') ?
    parseDate(date) :
    date
  return Math.ceil((_date.getMonth() + 1) / 3)
}
