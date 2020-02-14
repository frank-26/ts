function get(o, name) {
    return o[name];
}
;
;
// 05 typeof
var a = 3;
// 相当于: const b: number = 4
var b = 4;
// 在一个典型的服务端项目中，我们经常需要把一些工具塞到 context 中，如config，logger，db models, utils 等，此时就使用到 typeof
// import logger from './logger'
// import utils from './utils'
// interface Context extends KoaContect {
//   logger: typeof logger,
//   utils: typeof utils
// }
// app.use((ctx: Context) => {
//   ctx.logger.info('hello, world')
//   // 会报错，因为 logger.ts 中没有暴露此方法，可以最大限度的避免拼写错误
//   ctx.loger.info('hello, world')
// })
// 06 is
function isAxiosError(error) {
    return error.isAxiosError;
}
if (isAxiosError(err)) {
    code = "Axios-" + err.code;
}
;
;
var data = {
    a: 3,
    b: 4
};
var data1 = {
    1: 3,
    2: 4
};
/**
 
 
 // good
 import { withRouter, RouteComponentProps } from 'react-router-dom';
 
 class App extends React.Component<IProps & RouteComponentProps<{}>, AppStates> {}
 export default withRouter(App);
 *
 *
 *  */
//good
var arr = [];
var obj = { a: 1, b: 2 };
for (var key in obj) {
    // if (obj.hasOwnProperty(key)) {
    arr.push(obj[key]);
    // }
}
