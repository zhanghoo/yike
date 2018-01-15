/**
 * 比较两个数大小(用于数组对象属性值对比)
 * @params order,排序. asc,升序;!asc,降序.
 *         ...propertyName, 需要累乘,加,减,除之后的数组或者单个数字.(暂时封装累乘)
 * @return 两个值相减之后的结果
 */
export function hCompare (order, ...propertyName) {
  return (obj1, obj2) => {
    let val1 = obj1[propertyName[0]]
    let val2 = obj2[propertyName[0]]
    if (propertyName.length >= 2) {
      val1 = propertyName.reduce((total, current) => {
        return obj1[total] * obj1[current]
      })
      val2 = propertyName.reduce((total, current) => {
        return obj2[total] * obj2[current]
      })
    }
    return order === 'asc' ? (val1 - val2) : (val2 - val1)
  }
}

/**
 * 数组对象属性值排序
 * @params obj,数组对象
 *         order,排序
 *         ...propertyName, 属性值
 * @return 无返回, obj是引用形值
 */
export function hPropertyNameSort (obj, order, ...propertyName) {
  obj.sort(hCompare(order, ...propertyName))
}

/**
 * 判断两个对象是否键值对应相等
 * (少了一个字面量对象和对象的长度不相等的判断)
 * @params 两个obj
 * @return boolean
 */
export function hIsEqual (a, b) {
  // a和b本身相等, 即指向的是同一个引用
  if (a === b) {
    // 判断是否为0或-0
    return a !== 0 || 1 / a === 1 / b
  }
  // 判断是否为null和undefined
  if (a === null || b === null) {
    return a === b
  }
  // 判断a和b的数据类型
  const datatypeA = toString.call(a)
  const datatypeB = toString.call(b)
  // 数据类型不相等, 返回false
  if (datatypeA !== datatypeB) {
    return false
  }
  // 数据类型相等, 根据不同数据类型进行判断
  switch (datatypeA) {
    case '[object RegExp]':
    case '[object String]':
      // 进行字符串转换比较
      return `${a}` === `${b}`
    case '[object Number]':
      // 进行数据转换比较, 判断是否为 NaN
      if (+a !== +a) {
        return +b !== +b
      }
      // 判断是否为0或-0
      return +a === 0 ? 1 / +a === 1 / b : +a === +b
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b
  }
  // 如果是对象类型
  if (datatypeA === '[object Object]') {
    // 获取a和b的属性长度
    const propsA = Object.getOwnPropertyNames(a)
    const propsB = Object.getOwnPropertyNames(b)
    if (propsA.length !== propsB.length) {
      return false
    }
    for (let i = 0; i < propsA.length; i++) {
      var propertyName = propsA[i]
      if (a[propertyName] !== b[propertyName]) {
        return false
      }
    }
    return true
  }
  // 如果是数组类型
  if (datatypeA === '[object Array]') {
    if (a.toString() === b.toString()) {
      return true
    }
    return false
  }
}
