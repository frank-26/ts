interface Person {
  name: string;
  age ? : number;
  [propName: string]: any;
}
const people:Record<string,any> = {
  name: 1,
  age: 10
}

interface iPeople {
  title: string;
  name: string;
}

const people1: Partial<iPeople> = {
  title: 'Delete inactive users',
};

interface iPeople1 {
  title?: string;
  name?: string;
}

const people11: iPeople1 = { title: 'ts' }; // OK

const people222: Required<iPeople1> = { title: 'ts' }; // Error: property 'name' missing

// 赋值的时候，变量的形状必须和接口的形状保持一致。
let tom: Person = {
  name: 'Tom',
  age: 25
};
let tom1: Person = {
  name: 'Tom',
  age: '1'
};
let tom2: Person = {
  name: 'Tom',
  age: 23,
  sex: 'male'
};
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集 ??
interface Person1 {
  name: string;
  age ? : number;
  [propName: string]: string;
}
let tom3: Person1 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

type typea = Person1["name"];

const typea1:typea = 1
const typea2:typea = '1'

// readonly
interface Person2 extends Person1,Person{
  // [propName: string]: any;
}

let tom4: Person2 = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

tom.id = 1213;

interface Person3 {
  readonly id: number;
  name: string;
  age ? : number;
  [propName: string]: any;
}

let tom5: Person3 = {
  name: 'Tom',
  gender: 'male'
};

tom.id = 89757;

interface xxx {
  foo: number;
  [x: string]: any
}

let xx:xxx = {
  foo: 1,
  baz: 2
}; // ok, 'baz' 属性匹配于索引签名

// in oparator
interface A {
  x: number;
}

interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ('x' in q) {
    // q: A
  } else {
    // q: B
  }
}

interface A11 {
  a: string;
  b: string;
}

interface AB11 extends A11 {
  b: number;
}

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

type AB = Override<A, { b: number }>