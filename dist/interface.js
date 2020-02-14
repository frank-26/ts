var people = {
    name: 1,
    age: 10
};
var people1 = {
    title: 'Delete inactive users'
};
var people11 = { title: 'ts' }; // OK
var people222 = { title: 'ts' }; // Error: property 'name' missing
// 赋值的时候，变量的形状必须和接口的形状保持一致。
var tom = {
    name: 'Tom',
    age: 25
};
var tom1 = {
    name: 'Tom',
    age: '1'
};
var tom2 = {
    name: 'Tom',
    age: 23,
    sex: 'male'
};
var tom3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
var typea1 = 1;
var typea2 = '1';
var tom4 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
tom.id = 1213;
var tom5 = {
    name: 'Tom',
    gender: 'male'
};
tom.id = 89757;
var xx = {
    foo: 1,
    baz: 2
}; // ok, 'baz' 属性匹配于索引签名
function doStuff(q) {
    if ('x' in q) {
        // q: A
    }
    else {
        // q: B
    }
}
