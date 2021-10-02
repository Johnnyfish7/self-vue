import {
  observe
} from "./observe/index";

export function initState(vm) {
  const options = vm.$options
  if (options.data) {
    initData(vm)
  }
}


function initData(vm) {
  let data = vm.$options.data
  typeof data === 'function' ? data.call(vm) : data

  observe(data)
  // Object.defineProperty()
}