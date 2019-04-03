// # 使用字面量类型
// 泛型 Id 类型
type Id<T extends string> = {
  type: T;
  value: string;
};

// 特殊的 Id 类型
type FooId = Id<'foo'>;
type BarId = Id<'bar'>;

// 可选：构造函数
const createFoo = (value: string): FooId => ({ type: 'foo', value });
const createBar = (value: string): BarId => ({ type: 'bar', value });

let foo11 = createFoo('sample');
let bar1 = createBar('sample');

foo11 = bar; // Error
foo11 = foo11; // Okey