var suma = function (x, y) {
    return x + y;
};
var mySum = function (x, y) {
    return x + y;
};
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
var mySum1 = function (x, y) {
    return x + y;
};
var myfun = function (t) { return t; };
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tomaa = buildName('Tom');
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
push({}, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function foo(bar, bas) {
    // ..
}
foo(123);
foo(123, 'hello');
function foo1(bar, bas) {
    if (bas === void 0) { bas = 'hello'; }
    console.log(bar, bas);
}
foo1(123); // 123, hello
foo1(123, 'world'); // 123, world
var simple = function (foo) { return foo.toString(); };
var bar = new Foo(); // bar 被推断为 string 类型
// 使用类型注解的箭头函数
function twoParams(a, b) {
    return a + b;
}
var curryOne = function (x) {
    if (x === void 0) { x = 1; }
    return twoParams(123, x);
};
curryOne(456); // ok
curryOne('456'); // Error
// 为什么一个返回值不是 void 的函数，可以赋值给一个返回值为 void 的函数？
function doSomething() {
    return 42;
}
function callMeMaybe(callback) {
    callback();
}
// Expected an error because 'doSomething' returns number, but 'callMeMaybe'
// expects void-returning function
callMeMaybe(doSomething);
// 一个返回值类型为 void 的函数，它会说：“无论你的返回值是否存在，我都不会检查它”。
var items = [1, 2];
callMeMaybe(function () { return items.push(3); });
var qip = qipa(); //
var test = function () { return 'aa'; };
var simple1 = function (foo) { return foo.toString(); }; //(foo: number) => string
var simple2 = function (foo) { return foo.toString(); };
var barrr = new Foolish(); // bar 被推断为 string 类型
