// 如果 props 所有的属性值都是可选的我们可以借助 Partial 这样实现。

type Partial1<T> = { [P in keyof T]?: T[P] };

// 使用 Required 将所有 props 属性都设为必填项
type Required1<T> = { [P in keyof T]-?: T[P] };

// 条件类型
type IdOrName<T extends number | string> = T extends number ? Id : Name;
declare function createLabel<T extends number | string>(
  idOrName: T
): T extends number ? Id : Name;

type Exclude1<T, U> = T extends U ? never : T;

type T = Exclude<1 | 2 | 3 | 4 | 5, 3 | 4>; // T = 1|2|5

let xx: T = 22;
let x: T = 1;
// Pick<T,K>

interface Person {
  name: string;
  age: number;
  sex: string;
}
let person: Pick<Person, 'name' | 'age'> = {
  name: '小王',
  age: 21
};

//   Record<K,T>
let person1: Record<'name' | 'age', string> = {
  name: '小王',
  age: 122
};

//   Omit<T,K>（没有内置）
interface Person {
  name: string;
  age: number;
  sex: string;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

let person3: Omit<Person, 'name'> = {
  age: 1,
  sex: '男'
};

//   NonNullable <T>
type NonNullable1<T> = T extends null | undefined ? never : T;
type T3 = NonNullable<string | string[] | null | undefined>; // string | string[]

// ReturnType<T>
// type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
type T1 = ReturnType<() => string>; // string
type T2 = ReturnType<(s: string) => void>; // void

type Fruit = 'apple' | 'orange';
type Color = 'red' | 'orange';

type FruitEater = (fruit: Fruit) => number; // eats and ranks the fruit
type ColorConsumer = (color: Color) => string; // consumes and describes the colors

declare let f: FruitEater | ColorConsumer;

f('orange'); // It works! Returns a 'number | string'.

f('apple'); // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'.

f('red'); // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'

interface Dog {
  kind: 'dog';
  dogProp: any;
}
interface Cat {
  kind: 'cat';
  catProp: any;
}

const catOrDogArray: Dog[] | Cat[] = [];

catOrDogArray.forEach(animal => {
  //                ~~~~~~ error!
  // Parameter 'animal' implicitly has an 'any' type.
});

catOrDogArray.forEach((animal: Dog | Cat) => {
  if (animal.kind === 'dog') {
    animal.dogProp;
    // ...
  } else if (animal.kind === 'cat') {
    animal.catProp;
    // ...
  }
});

type Nullable<T> = { [P in keyof T]: T[P] | null };

const testtt: { a: number; b: string } = {
  a: 1,
  b: '2'
};
for (let i in testtt) {
  console.log(i);
}
const testt: Nullable<{ a: number; b: string }> = {
  a: 1,
  b: '2'
};
for (let i in testt) {
  console.log(i);
}

interface Person {
  name: string;
  age: number;
}
type PartialPerson = { [P in keyof Person]?: Person[P] };
let person111: PartialPerson = {
  age: 1
};
let person112: PartialPerson = {
  agea: 1
};
type PartialPerson1 = Partial<Person>
let person113: PartialPerson = {
  age: 1
};

let p = person;

// type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
// type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

// interface Person {ethnicity: string;}
// interface Pet {breed: string;}

// function getOrigin(value: XOR<Person, Pet>) { /* ... */}
// getOrigin({}); //Error
// getOrigin({ethnicity: 'abc'}); //OK
// getOrigin({breed: 'def'}); //OK
// getOrigin({ethnicity: 'abc', breed: 'def'});//Error

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}
function pluck1(o, names) {
  return names.map(n => o[n]);
}

type Not<T> = { 
  [P in keyof T]?: number; 
}; 
interface Person {ethnicity: string;} 
interface Pet {breed: string;} 
function getOrigin(value: Person & Not<Pet>): void; 
function getOrigin(value: Pet & Not<Person>): void; 
function getOrigin(value: Person | Pet) { } 

getOrigin({}); //Error 
getOrigin({ethnicity: 'abc'}); //OK 
getOrigin({breed: 'def'}); //OK 

var both = {ethnicity: 'abc', breed: 'def'}; 
getOrigin(both);//Error 


let xxxxxx:Not<{a:number,b:number}> = {b:1}

enum eFoobar {
  foo = 'foo',
  bar = 'bar',
}

type tFooBar = { // this is `iAbilityModifiers` from the error
  [fb in keyof eFoobar]: number;
};

const me: Person = { name: 'gzx', age: 16 ,sex:'male',ethnicity:''};
type P = typeof me;  // { name: string, age: number | undefined }
const you: typeof me = { name: 'mabaoguo', age: 69 }  // 可以通过编译
