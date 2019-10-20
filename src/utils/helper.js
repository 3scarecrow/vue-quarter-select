/**
 * 日期格式化
 * @param dateOrDatestr
 * @param fmt 'yyyy-MM-dd hh:mm:ss'
 * @returns {*}
 */

export function formatDate(dateOrDatestr, fmt = 'yyyy-MM-dd') {
  if (!dateOrDatestr) {
    return
  }
  let date
  if (!(dateOrDatestr instanceof Date)) {
    date = strToDate(dateOrDatestr)
  } else {
    date = dateOrDatestr
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }

  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }

  return fmt
}

/**
 * 字符串转换为时间
 * @param  {String} src 字符串
 */
function strToDate(src) {
  if (typeof src === 'number') {
    return autoParseDate(src)
  }
  return src ? autoParseDate(src.replace(/-/g, '/')) : new Date()
}

export function setTimeOut(num) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve()
    }, num || 0)
  })
}

// 测试是否是pc的chrome浏览器
export const isChrome = (() => {
  let u = navigator.userAgent
  if (
    u.match(/Chrome/i) &&
    u.match(/Windows/i) &&
    !u.match(/Mobile/i) &&
    !u.match(/Wechat/i)
  ) {
    return true
  }
  return false
})()
// 拓展Date对象
export const autoParseDate = (...agu) => {
  if (agu.length === 1 && typeof agu[0] === 'string') {
    let agu1 = agu[0].replace(/-/g, '/')
    return new Date(agu1)
  } else {
    return new Date(...agu)
  }
}

/**
 * 获取本时间段相关信息
 * @param inDate  初始化的时间，获取本周如 '2018/03/28'，获取本月份 '2018/03',获取本年第一季度 '2018/01'，获取本年 '2018'
 * @param type type 可选类型为 'week' , 'month' , 'quarter' ,'week'
 * @returns {*}
 */
export function getTimeInfo({
  inDate = '',
  type
} = {}) {
  if (typeof inDate === 'string') {
    inDate = inDate.replace(/-/g, '/')
  }

  switch (type) {
    case 'quarter': {
      if (!inDate) {
        const today = new Date()
        inDate = `${today.getFullYear()}/${today.getMonth() / 3 + 1}`
      }
      let [year, quarter] = [
        parseInt(inDate.split('/')[0]),
        parseInt(inDate.split('/')[1])
      ]
      let monthFirstDate = autoParseDate(year, (quarter - 1) * 3, 1)
      let monthLaseDate = autoParseDate(year, (quarter - 1) * 3 + 3, 0)
      return {
        name: `${monthFirstDate.getFullYear()}年${parseInt(
          (monthFirstDate.getMonth() + 3) / 3
        )}季`,
        beginDate: formatDate(monthFirstDate, 'yyyy/MM/dd'),
        endDate: formatDate(monthLaseDate, 'yyyy/MM/dd'),
        type: 'quarter'
      }
    }
  }
}

/**
 * 获取本时间段，以及上下年份，季度，月，周
 * @param initTime 初始化的时间，如果不填，则默认取当前，可填参数获取本周如 '2018/03/28'，获取本月份 '2018/03',获取本年第二季度 '2018/02' 或者 '2018/04/01'，获取本年 '2018'
 * @param type 可选类型为'date', 'week' , 'month' , 'quarter' ,'week'
 * @returns {{pre: {name, beginDate, endDate, type}, theTime: {name, beginDate, endDate, type}, next: {name, beginDate, endDate, type}}}
 */
export function getNearTime({
  initTime,
  type
} = {}) {
  switch (type) {
    case 'quarter': {
      if (typeof initTime === 'string') {
        initTime = (initTime + '').replace(/-/g, '/')
      }
      if (!initTime) {
        const today = new Date()
        initTime = `${today.getFullYear()}/${today.getMonth() / 3 + 1}`
      }
      let year
      let quarter
      if (initTime.split('/').length >= 3) {
        [year, quarter] = [
          parseInt(initTime.split('/')[0]),
          parseInt(parseInt(initTime.split('/')[1]) / 3) + 1
        ]
      } else {
        [year, quarter] = [
          parseInt(initTime.split('/')[0]),
          parseInt(initTime.split('/')[1])
        ]
      }
      let theTime = `${year}/${quarter}`
      let pre = `${quarter === 1 ? year - 1 : year}/${
        quarter === 1 ? 4 : quarter - 1
      }`
      let next = `${quarter === 4 ? year + 1 : year}/${
        quarter === 4 ? 1 : quarter + 1
      }`
      return {
        pre: getTimeInfo({
          inDate: pre,
          type: 'quarter'
        }),
        theTime: getTimeInfo({
          inDate: theTime,
          type: 'quarter'
        }),
        next: getTimeInfo({
          inDate: next,
          type: 'quarter'
        })
      }
    }
  }
}
