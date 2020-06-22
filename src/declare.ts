/* 
https://ts.xcatliu.com/basics/declaration-files
当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块

需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现5：

*/
// declare var jQuery: (selector: string) => any;
declare function jQuery(selector: string) : any;


declare class Animal {
  constructor(name: string);
  sayHi(): string;
}

export { Animal }

declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
  const version: number;
  class Event {
      blur(eventType: EventType): void
  }
  enum EventType {
      CustomClick
  }
}

interface AjaxSettings {
  method?: 'GET' | 'POST'
  data?: any;
}
declare namespace jQuery {
  function ajax(url: string, settings?: AjaxSettings): void;
}

// user
let settings: AjaxSettings = {
  method: 'POST',
  data: {
      name: 'foo'
  }
};
jQuery.ajax('/api/post_something', settings);

import * as foo from 'foo'

console.log(foo)