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