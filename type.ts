// 如果 props 所有的属性值都是可选的我们可以借助 Partial 这样实现。

type Partial1<T> = { [P in keyof T]?: T[P] };

// 使用 Required 将所有 props 属性都设为必填项
type Required1<T> = { [P in keyof T]-?: T[P] };

// 条件类型
type IdOrName<T extends number | string> = T extends number ? Id : Name;
declare function createLabel<T extends number | string>(idOrName: T): T extends number ? Id : Name;

type Exclude1<T, U> = T extends U ? never : T;

type T = Exclude<1|2|3|4|5, 3|4>  // T = 1|2|5 

let xx:T = 22
let x:T = 1
// Pick<T,K>

interface Person {
    name: string,
    age: number,
    sex: string,
  }
  let person: Pick<Person, 'name' | 'age'> = {
    name: '小王',
    age: 21,
  }
  
//   Record<K,T>
let person1: Record<'name' | 'age', string> = {
    name: '小王',
    age: 122,
  }

//   Omit<T,K>（没有内置）
interface Person {
    name: string,
    age: number,
    sex: string,
  }
  
  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

  let person3: Omit<Person, 'name'> = {
    age: 1,
    sex: '男'
  }
  
//   NonNullable <T>
type NonNullable1<T> = T extends null | undefined ? never : T;
type T3 = NonNullable<string | string[] | null | undefined>; // string | string[]

// ReturnType<T>
// type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
type T1 = ReturnType<() => string>; // string
type T2 = ReturnType<(s: string) => void>; // void