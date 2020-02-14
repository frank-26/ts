// infer 表示在 extends 条件语句中待推断的类型变量。

type ParamType<T> = T extends (param: infer P) => any ? P : T;
// 如果 T 能赋值给 (param: infer P) => any，则结果是 (param: infer P) => any 类型中的参数类型推断 P，否则返回为 T

interface User {
    name: string;
    age: number;
  }
  
  type Func = (user: User) => void;
  
  type Param = ParamType<Func>; // Param = User
  type AA = ParamType<string>; // string
// 内置类型
type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
type Func1 = () => User;
type Test = ReturnType<Func1>; // Test = User

// 获取参数类型
type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any
  ? P
  : never;

// 获取实例类型
type InstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : any;

class TestClass {
  constructor(public name: string, public age: number) {}
}

type Params = ConstructorParameters<typeof TestClass>; // [string, number]

type Instance = InstanceType<typeof TestClass>; // TestClass