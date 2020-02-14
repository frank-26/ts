// https://zhuanlan.zhihu.com/p/40311981

interface Foo {
  name: string;
  age: number
}
type T = keyof Foo // -> "name" | "age"

type Keys = "a" | "b"
type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any }

type Partial1<T> = { [P in keyof T]?: T[P] };


type Required1<T> = { [P in keyof T]-?: T[P] };

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

type Readonly<T> = { readonly [P in keyof T]: T[P] };

