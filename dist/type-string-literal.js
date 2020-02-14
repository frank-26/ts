function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
function move(distance, direction) {
    // ...
}
move(1, 'North'); // ok
move(1, 'Nurth'); // Error
// 推断
function iTakeFoo(foo) { }
var test = {
    someProp: 'foo'
};
iTakeFoo(test.someProp); // Error: Argument of type string is not assignable to parameter of type 'foo'
function iTakeFoo1(foo) { }
var test1 = {
    someProp: 'foo',
    as: as, 'foo': 
};
iTakeFoo1(test1.someProp); // ok
function iTakeFoo11(foo) { }
var test11 = {
    // 推断 `someProp` 永远是 'foo'
    someProp: 'foo'
};
iTakeFoo11(test11.someProp); // ok
// 用于创建字符串列表映射至 `K: V` 的函数 非常实用
function strEnum(o) {
    return o.reduce(function (res, key) {
        res[key] = key;
        return res;
    }, Object.create(null));
}
// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum1(o) {
    return o.reduce(function (res, item) {
        res[item] = item;
        return res;
    }, Object.create(null));
}
function strEnum2(o) {
    return o.reduce(function (res, item) {
        res[item] = item;
        return res;
    }, Object.create(null));
}
// 创建 K: V
var Direction = strEnum1(['North', 'South', 'East', 'West']); //  类型自动推导也能做到
var Direction2 = strEnum2(['North', 123, 'East', 'West']); //  类型自动推导也能做到
// 简单的使用
var sample;
sample = Direction.North; // Okay
sample = 'North'; // Okay
sample = 'AnythingElse'; // ERROR!
