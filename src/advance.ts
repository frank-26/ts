// https://levelup.gitconnected.com/advanced-typescript-types-with-examples-1d144e4eda9e
const SERVICES: Record<string, string> = { 
  doorToDoor: "delivery at door",
  airDelivery: "flying in",
  specialDelivery: "special delivery",
  inStore: "in-store pickup",
};

// 链接：https://www.zhihu.com/question/276172039/answer/385498094


type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}

type Partial<T> = {
    [P in keyof T]?: T[P];
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
}

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type Record<K extends string, T> = {
    [P in K]: T;
}

type Diff<T extends string, U extends string> =
    ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];  
type Overlap<T extends string, U extends string> = Diff<T, Diff<T, U>>;
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
type Overwrite<T, U> = Omit<T, Diff<keyof T, Diff<keyof T, keyof U>>> & U;

type Purify<T extends string> = { [P in T]: T; }[T];
type NonNullable<T> = T & {};
type NonNullable<T> = T extends null | undefined ? never : T;

type Required<T> = {
  [P in Purify<keyof T>]: NonNullable<T[P]>;
};

type Omit = Pick<T, Exclude<keyof T, K>>
type TFoo = 1 | null | undefined
// NonNullable 作用是去除 T 中包含的 null 或者 undefined
let fox:NonNullable<TFoo> = 1
fox=null
// Parameters 作用是用来获取一个函数的参数类型，而且返回的是只能包含一组类型的数组。
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type Func11 = (user: string) => void
type Param = Parameters<Func11>

let pp: Param = ['1'] // 正确
pp = ['1', '2'] // 错误，只能包含一个字符串类型值


type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

class Foox {
  constructor(x: string, y: number){
    console.log(x, y)
  }
}

// 在使用 ConstructorParameters 处理之后，获取到的是一个类型数组。而且第一个值必须为 string 类型，第二个值必须为 number 类型。
const foox: ConstructorParameters<typeof Foox> = ['1', 2]


type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

// 定义的类 Fozo 中有一个字符串类型的 x，一个数字类型的 y，一个参数为字符串类型的方法 say
class Fozo {
  public x = '1'
  public y = 2

  public say = (value: string) => {
    console.log(value)
  }
}

// 我们用 InstanceType 获取类 Fozo 的实例类型，用来它约束变量 foo。那么，接下来给foo赋值时就必须完全符合 Foo 的成员类型才可以
const fozo: InstanceType<typeof Fozo> = {
  x: 3,
  y: 2,
  say: (value: string) => {
    console.log(value)
  }
}
// 深度遍历 T，并将其所有属性变成只读类型
type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
// ValueOf与keyof相对应。取出指定类型的所有 value。
type ValueOf<T> = T[keyof T]

// Mutable 用来将 T 的所有属性的 readonly 移除。
type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}
function getState() {
  return {
      foo: 7,
      bar: 'hello'
  };
}

type State1 = ReturnType<typeof getState>;

let nextState: State1 = {
  foo: 'seven',
  bar: 'world'
};

let defaultState = {
  foo: 7,
  bar: 'hello'
};

type PartialState = Partial<typeof defaultState>;

let partialState: PartialState = {
  foo: 8,
  foo:1
};
