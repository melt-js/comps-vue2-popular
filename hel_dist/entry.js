(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
  typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["comps-vue2-popular"] = {}, global.HelLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

  /*
  |--------------------------------------------------------------------------
  |
  | 对应 package.json/appGroupName
  |
  |--------------------------------------------------------------------------
  */

  const LIB_NAME = 'comps-vue2-popular';

  /*
  |--------------------------------------------------------------------------
  |
  | 组件类型导出文件，同时也作为 rollup 的打包入口文件，rollup 打包后是一个
  | 仅包含 hel-lib-proxy 的轻量代理文件，不包含组件实现
  |
  |--------------------------------------------------------------------------
  */
  /**
   * 将提供给用户的lib暴露出去（同时也暴露了类型）
   */
  var dtlib = helLibProxy.exposeLib(LIB_NAME);
  var TierRanking = dtlib.TierRanking;

  exports.TierRanking = TierRanking;
  exports["default"] = dtlib;
  exports.dtlib = dtlib;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
