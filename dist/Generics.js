// 指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
createArray(3, 3); //
function createArray1(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray1(3, 'x'); // ['x', 'x', 'x']
createArray1(3, 3); // [3, 3, 3]
createArray1(3, []); //
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// 泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。
loggingIdentity('sss');
loggingIdentity(111);
var createArray2;
createArray2 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray2(3, 'x'); // ['x', 'x', 'x']
var createArray3;
createArray3 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray3(3, 'x'); // ['x', 'x', 'x']
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
myGenericNumber.add(1, '2');
// 创建一个泛型类
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); };
        this.pop = function () { return _this.data.shift(); };
    }
    return Queue;
}());
// 简单的使用
var queue = new Queue();
queue.push(0);
queue.push('1'); // Error：不能推入一个 `string`，只有 number 类型被允许
var queueStr = new Queue();
queueStr.push('a');
queueStr.push(11);
function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var sample = [1, 2, 3];
var reversed = reverse(sample);
reversed[0] = '1'; // Error
reversed = ['1', '2']; // Error
reversed[0] = 111; // ok
reversed = [1, 2]; // ok
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.reverse = function (items) {
        var toreturn = [];
        for (var i = items.length; i >= 0; i--) {
            toreturn.push(items[i]);
        }
        return toreturn;
    };
    return Utility;
}());
var getJSON = function (config) {
    var fetchConfig = __assign({ method: 'GET', Accept: 'application/json', 'Content-Type': 'application/json' }, (config.headers || {}));
    return fetch(config.url, fetchConfig).then(function (response) { return response.json(); });
};
// module
var an = new Animal('1');
// 泛型的实例化类型
var Fooo = /** @class */ (function () {
    function Fooo() {
    }
    return Fooo;
}());
var FooNumber = Fooo; // ref 1
var fon = new FooNumber();
fon.foo = '1';
var xx;
var y;
// Expected error: Can't convert Something<number> to Something<string>!
xx = y; // ???
