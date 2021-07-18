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

`
Partial<Type>
Readonly<Type>
Record<Keys,Type>
Pick<Type, Keys>
Omit<Type, Keys>
Exclude<Type, ExcludedUnion>
Extract<Type, Union>
NonNullable<Type>
Parameters<Type>
ConstructorParameters<Type>
ReturnType<Type>
InstanceType<Type>
Required<Type>
ThisParameterType<Type>
OmitThisParameter<Type>
ThisType<Type>
`