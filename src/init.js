export default function initMixin(Vue) {
  Vue.prototype._init() = function (options) {
    console.log('%c _init ------> ', 'color:#0f0;')
    this.$options = options
  }
}