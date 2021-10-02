let oldArrayPrototype = Array.prototype

// arrayPrototype.__proto__ = Array.prototype

let arrayPrototype = Object.create(oldArrayPrototype)

let methods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'reverse',
  'sort',
  'splice',
]

methods.forEach((method) => {
  arrayPrototype[method] = function (...args) {
    console.log('%c 劫持数组的方法 ------> ', 'color:#0f0;', method)
    oldArrayPrototype[method].call(this, ...args)
  }
})

export default arrayPrototype