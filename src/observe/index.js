import arrayPrototype from "./array";

class Observer {
  constructor(data) {
    this.walk()


    if (Array.isArray(data)) {
      // 需要重写部分数组方法
      data.__proto__ = arrayPrototype
      // 数组里面是对象类型
      this.observeArray(data)
    } else {
      this.walk(data)
    }
  }

  observeArray(data) {
    data.forEach(item => observe(item))
  }

  walk(data) {
    // 循环对象 尽量不用 for in(会遍历原型链)

    // 如果是数组的话浪费性能
    // 改写数组方法 劫持方法
    // push pop shift unshift reverse sort splice
    // 修改数组的索引和长度是无法更新视图的

    let keys = Object.keys(data)
    keys.forEach(key => {
      defineReactive(data, key, data[key])
    });
  }

}


function defineReactive(data, key, value) {
  observe(value) //如果当前value 是对象的话 仍然需要递归代理属性

  Object.defineProperty(data, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value)  return

      observe(value)
      value = newValue
    }
  })
}

export function observe(data) {
  if (typeof data !== 'object' || data === null) {
    return
  }
  return new Observer(data)
}