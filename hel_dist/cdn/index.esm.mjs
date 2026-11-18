import { exposeLib } from 'hel-lib-proxy';

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
var dtlib = exposeLib(LIB_NAME);
var TierRanking = dtlib.TierRanking;

export { TierRanking, dtlib as default, dtlib };
