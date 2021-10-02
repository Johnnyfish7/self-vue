(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.vue = factory());
})(this, (function () { 'use strict';

  console.log('hello');
  var index = {
    a: 1,
    b: 2
  };

  return index;

}));
//# sourceMappingURL=vue.js.map
