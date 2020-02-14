function test(a) {
    console.log(a);
    return a;
}
test('a');
var myFavoriteNumber = 'seven';
myFavoriteNumber = '7';
// 任意值的属性和方法:声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
var anyThing = 'Tom';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
var something; //=== let something:any
something = 'seven';
something = 7;
something.setName('Tom');
function getLength(something) {
    return something.length;
}
function getString(something) {
    return something.toString();
}
var myFavoriteNumber1;
myFavoriteNumber1 = 'seven';
console.log(myFavoriteNumber1.length); // 5
myFavoriteNumber1 = 7;
console.log(myFavoriteNumber1.length);
// 对象字面量的惰性初始化
var foox = {
    bar: 123,
    bas: 'Hello World'
};
var foo1111 = {};
foo1111.bar = 123;
foo1111.bas = 'Hello World';
// 初始化
var foo = { bar: 123, bas: 456 };
// 不能被改变
foo.bar = 456; // Error: foo.bar 为仅读属性
// 使用
var foo1 = { 0: 123, 2: 345 };
console.log(foo1[0]); // ok（读取）
foo1[0] = 456; // Error: 属性只读
// let foox: Foox = {
//   bar: 123
// };
function iTakeFoo(foox) {
    foox.bar = 456; // Error: bar 属性只读
}
iTakeFoo(foox);
var bas = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
bas();
bas(1, 2, 3);
var colors = {
    red: 'red',
    blue: 'blue'
};
var color; // color 的类型是 'red' | 'blue'
color = 'red'; // ok
color = 'blue'; // ok
color = 'anythingElse'; // Error
var Aa = {
    y: 1
};
console.log(Aa.x.b + Aa.y);
