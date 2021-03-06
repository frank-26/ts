import {add}  from '@yanli26/ts-package'
import {Greeter}  from '@only/greeter'

console.log('Greeter: ', Greeter('s'));
console.log(add('1',2));

function test(a: string): string {
  console.log(a);
  return a;
}

test('a');

let myFavoriteNumber: string = 'seven';
myFavoriteNumber = '7';

// 任意值的属性和方法:声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
let anyThing: any = 'Tom';

console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

let something; //=== let something:any
something = 'seven';
something = 7;

something.setName('Tom');

function getLength(something: string | number): number {
  return something.length;
}

function getString(something: string | number): string {
  return something.toString();
}

let myFavoriteNumber1: string | number;
myFavoriteNumber1 = 'seven';
console.log(myFavoriteNumber1.length); // 5
myFavoriteNumber1 = 7;
console.log(myFavoriteNumber1.length);

// 对象字面量的惰性初始化

let foox = {
  bar: 123,
  bas: 'Hello World'
};

let foo1111 = {} as any;
foo1111.bar = 123;
foo1111.bas = 'Hello World';

// interface Foo {
//   bar: number;
//   bas: string;
// }

// let fooc = {} as Foo;
// fooc.bar = 123;
// fooc.bas = 'Hello World';

type Foo = {
  readonly bar: number;
  readonly bas: number;
};

// 初始化
const foo: Foo = { bar: 123, bas: 456 };

// 不能被改变
foo.bar = 456; // Error: foo.bar 为仅读属性

interface Foo1 {
  readonly [x: number]: number;
}

// 使用

const foo1: Foo1 = { 0: 123, 2: 345 };
console.log(foo1[0]); // ok（读取）
foo1[0] = 456; // Error: 属性只读

interface Foox {
  readonly bar: number;
}

// let foox: Foox = {
//   bar: 123
// };

function iTakeFoo(foox: Foox) {
  foox.bar = 456; // Error: bar 属性只读
}

iTakeFoo(foox);

let bas = (...args: number[]) => {};
bas();
bas(1, 2, 3);

const colors = {
  red: 'red',
  blue: 'blue'
};

type Colors = keyof typeof colors;

let color: Colors; // color 的类型是 'red' | 'blue'
color = 'red'; // ok
color = 'blue'; // ok
color = 'anythingElse'; // Error

const Aa: {
  x?: {b:string};
  y: number;
} = {
  y: 1
};


console.log(Aa.x.b+Aa.y)