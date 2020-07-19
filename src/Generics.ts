// 指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

function createArray(length: number, value: string): Array<string> {
  let result = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
createArray(3, 3); //

function createArray1<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray1<string>(3, 'x'); // ['x', 'x', 'x']
createArray1<number>(3, 3); // [3, 3, 3]
createArray1(3, []); //

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

// 泛型约束

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。
loggingIdentity('sss')
loggingIdentity(111)


interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
let createArray2: CreateArrayFunc;
createArray2 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray2(3, 'x'); // ['x', 'x', 'x']

// 可以把泛型参数提前到接口名上
interface CreateArrayFunc1<T> {
  (length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc1<any>;
createArray3 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray3(3, 'x'); // ['x', 'x', 'x']

// 泛型类

class GenericNumber<T=string> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
myGenericNumber.add(1,'2')

// 创建一个泛型类
class Queue<T> {
  private data :T[] = [];
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
}

// 简单的使用
const queue = new Queue<number>();
queue.push(0);
queue.push('1'); // Error：不能推入一个 `string`，只有 number 类型被允许

const queueStr = new Queue<string>()

queueStr.push('a');
queueStr.push(11);


function reverse<T>(items: T[]): T[] {
  const toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}

const sample = [1, 2, 3];
let reversed = reverse(sample);

reversed[0] = '1'; // Error
reversed = ['1', '2']; // Error

reversed[0] = 111; // ok
reversed = [1, 2]; // ok

class Utility {
  reverse<T>(items: T[]): T[] {
    const toreturn = [];
    for (let i = items.length; i >= 0; i--) {
      toreturn.push(items[i]);
    }
    return toreturn;
  }
}

const getJSON = <T>(config: { url: string; headers?: { [key: string]: string } }): Promise<T> => {
  const fetchConfig = {
    method: 'GET',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(config.headers || {})
  };
  return fetch(config.url, fetchConfig).then<T>(response => response.json());
};
// module
let an = new Animal('1')

// 泛型的实例化类型
class Fooo<T> {
  foo: T;
}

const FooNumber = Fooo as { new (): Fooo<number> }; // ref 1

let fon = new FooNumber()
fon.foo = '1'

// TypeScript 使用了一种结构类型的系统。当判断 Something<number> 和 Something<string> 兼容性的时候，我们会检查每一个成员的每一个属性，
// 如果类型的每个成员都是兼容的，那么这个类型也是兼容的。因为 Something<T> 没有在任何成员中使用 T，所以 T 是什么类型并不重要。
// 通常，你绝不应该有未使用类型的参数。该类型会有无法预料的兼容性（如上所示），同时在函数调用中也无法获取正确的泛型类型接口
interface Something<T> {
  name: string;
}
let xx: Something<number>;
let y: Something<string>;
// Expected error: Can't convert Something<number> to Something<string>!
xx = y; // ???

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
// 泛型支持递归
type ListNode<T> = {
  data: T;
  next: ListNode<T> | null;
};

type DeepPartial<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

// 现在window 上所有属性都变成了可选啦
type PartialedWindow = DeepPartial<Window>; 

interface Seal {
  name: string;
  url: string;
}
interface API {
  "/user": { name: string; age: number; phone: string };
  "/seals": { seal: Seal[] };
}
const api = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then((res) => res.json());
};
api()// tips...