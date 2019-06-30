// 01 keyof
interface Point {
  x: number;
  y: number;
}

// type keys = "x" | "y"
type keys = keyof Point;
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}
// 02 Partial & Pick
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface User {
  id: number;
  age: number;
  name: string;
};

// 相当于: type PartialUser = { id?: number; age?: number; name?: string; }
type PartialUser = Partial<User>

// 相当于: type PickUser = { id: number; age: number; }
type PickUser = Pick<User, "id" | "age">

// 03 Condition Type 类似于 js 中的 ?: 运算符，可以使用它扩展一些基本类型
// T extends U ? X : Y

type isTrue<T> = T extends true ? true : false
// 相当于 type t = false
type t = isTrue<number>

// 相当于 type t = false
type t1 = isTrue<false>

// 04 never & Exclude & Omit:the never type represents the type of values that never occur.
type Exclude<T, U> = T extends U ? never : T;//差集

// 相当于: type A = 'a'
type A = Exclude<'x' | 'a', 'x' | 'y' | 'z'>
// 结合 Exclude 可以推出 Omit 的写法
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface User {
  id: number;
  age: number;
  name: string;
};

// 相当于: type PickUser = { age: number; name: string; }
type OmitUser = Omit<User, "id">//补集

// 05 typeof
const a: number = 3
// 相当于: const b: number = 4
const b: typeof a = 4
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
function isAxiosError (error: any): error is AxiosError {
  return error.isAxiosError
}

if (isAxiosError(err)) {
  code = `Axios-${err.code}`
}
// export function isType(type: any): type is GraphQLType;

// export function isScalarType(type: any): type is GraphQLScalarType;

// export function isObjectType(type: any): type is GraphQLObjectType;

// export function isInterfaceType(type: any): type is GraphQLInterfaceType;

// 08 Dictionary & Many
interface Dictionary<T> {
  [index: string]: T;
};

interface NumericDictionary<T> {
  [index: number]: T;
};

const data:Dictionary<number> = {
  a: 3,
  b: 4
}
const data1:NumericDictionary<number> = {
  1: 3,
  2: 4
}
// 09 使用 const enum 维护常量表

// 使用 object 维护常量
const enum TODO_STATUS {
  TODO = 'TODO',
  DONE = 'DONE',
  DOING = 'DOING'
}
type Keys = "a" | "b"
type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any }


/**
 
 
 // good
 import { withRouter, RouteComponentProps } from 'react-router-dom';
 
 class App extends React.Component<IProps & RouteComponentProps<{}>, AppStates> {}
 export default withRouter(App);
 * 
 * 
 *  */


 //good
const arr = [];
const obj ={a:1,b:2}
for (let key in obj) {
  // if (obj.hasOwnProperty(key)) {
    arr.push(obj[key]);
  // }
}

