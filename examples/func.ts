const suma = function (x: number, y: number): number {
  return x + y;
}

let mySum = function (x: number, y: number): number {
  return x + y;
};
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let mySum1: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tomaa = buildName('Tom');

function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
push({}, 1, 2, 3);


// override
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

function foo(bar: number, bas?: string): void {
  // ..
}

foo(123);
foo(123, 'hello');

function foo1(bar: number, bas: string = 'hello') {
  console.log(bar, bas);
}

foo1(123); // 123, hello
foo1(123, 'world'); // 123, world

const simple: (foo: number) => string = foo => foo.toString();

interface CallMeWithNewToGetString {
  new (): string;
}

// 使用
declare const Foo: CallMeWithNewToGetString;
const bar = new Foo(); // bar 被推断为 string 类型

// 使用类型注解的箭头函数
function twoParams(a: number, b: number) {
  return a + b;
}

let curryOne = (x: number = 1) => twoParams(123, x);
curryOne(456); // ok
curryOne('456'); // Error

// 为什么一个返回值不是 void 的函数，可以赋值给一个返回值为 void 的函数？
function doSomething(): number {
  return 42;
}

function callMeMaybe(callback: () => void) {
  callback();
}

// Expected an error because 'doSomething' returns number, but 'callMeMaybe'
// expects void-returning function
callMeMaybe(doSomething);
// 一个返回值类型为 void 的函数，它会说：“无论你的返回值是否存在，我都不会检查它”。
let items = [1, 2];
callMeMaybe(() => items.push(3));

interface ReturnString {
  (): string;
}

declare const qipa: ReturnString;

const qip = qipa(); //

let test: ReturnString = () => 'aa'

const simple1 = foo => foo.toString();//(foo: number) => string
const simple2: (foo: number) => string = foo => foo.toString();

// 可实例化
interface CallMeWithNewToGetString {
  new (): string;
  // new ():  {
  //   defalut1:
  // }
}

// 使用
declare const Foolish: CallMeWithNewToGetString;
const barrr = new Foolish(); // bar 被推断为 string 类型

