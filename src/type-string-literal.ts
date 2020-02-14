//类型别名与字符串字面量类型都是使用 type 进行定义
type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

type CardinalDirection = 'North' | 'East' | 'South' | 'West';

function move(distance: number, direction: CardinalDirection) {
  // ...
}

move(1, 'North'); // ok
move(1, 'Nurth'); // Error

type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;

// 推断

function iTakeFoo(foo: 'foo') {}
const test = {
  someProp: 'foo'
};

iTakeFoo(test.someProp); // Error: Argument of type string is not assignable to parameter of type 'foo'

function iTakeFoo1(foo: 'foo') {}

const test1 = {
  someProp: 'foo'
  as 'foo'
};

iTakeFoo1(test1.someProp); // ok

function iTakeFoo11(foo: 'foo') {}

// 类型注解
type Test = {
  someProp: 'foo';
};

const test11: Test = {
  // 推断 `someProp` 永远是 'foo'
  someProp: 'foo'
};

iTakeFoo11(test11.someProp); // ok

// 用于创建字符串列表映射至 `K: V` 的函数 非常实用
function strEnum < T extends string > (o: Array < T > ): {
  [K in T]: K
} {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum1<T extends string>(o: Array<T>) {
    return o.reduce((res, item) => {
      res[item] = item;
      return res;
    }, Object.create(null));
  }
  
  function strEnum2(o: Array<string>) {
    return o.reduce((res, item) => {
      res[item] = item;
      return res;
    }, Object.create(null));
  }
  // 创建 K: V
  const Direction = strEnum1(['North', 'South', 'East', 'West']);//  类型自动推导也能做到
  const Direction2 = strEnum2(['North', 123, 'East', 'West']);//  类型自动推导也能做到
  
  // 创建一个类型
  type Direction = keyof typeof Direction;
  
  // 简单的使用
  let sample: Direction;
  
  sample = Direction.North; // Okay
  sample = 'North'; // Okay
  sample = 'AnythingElse'; // ERROR!

  