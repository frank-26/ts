// 如果 props 所有的属性值都是可选的我们可以借助 Partial 这样实现。
var xx = 22;
var x = 1;
var person = {
    name: '小王',
    age: 21
};
//   Record<K,T>
var person1 = {
    name: '小王',
    age: 122
};
var person3 = {
    age: 1,
    sex: '男'
};
f('orange'); // It works! Returns a 'number | string'.
f('apple'); // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'.
f('red'); // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'
var catOrDogArray = [];
catOrDogArray.forEach(function (animal) {
    //                ~~~~~~ error!
    // Parameter 'animal' implicitly has an 'any' type.
});
catOrDogArray.forEach(function (animal) {
    if (animal.kind === 'dog') {
        animal.dogProp;
        // ...
    }
    else if (animal.kind === 'cat') {
        animal.catProp;
        // ...
    }
});
var testtt = {
    a: 1,
    b: '2'
};
for (var i in testtt) {
    console.log(i);
}
var testt = {
    a: 1,
    b: '2'
};
for (var i in testt) {
    console.log(i);
}
var person111 = {
    age: 1
};
var person112 = {
    agea: 1
};
var person113 = {
    age: 1
};
var p = person;
// type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
// type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
// interface Person {ethnicity: string;}
// interface Pet {breed: string;}
// function getOrigin(value: XOR<Person, Pet>) { /* ... */}
// getOrigin({}); //Error
// getOrigin({ethnicity: 'abc'}); //OK
// getOrigin({breed: 'def'}); //OK
// getOrigin({ethnicity: 'abc', breed: 'def'});//Error
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
function pluck1(o, names) {
    return names.map(function (n) { return o[n]; });
}
function getOrigin(value) { }
getOrigin({}); //Error 
getOrigin({ ethnicity: 'abc' }); //OK 
getOrigin({ breed: 'def' }); //OK 
var both = { ethnicity: 'abc', breed: 'def' };
getOrigin(both); //Error 
var xxxxxx = { b: 1 };
var eFoobar;
(function (eFoobar) {
    eFoobar["foo"] = "foo";
    eFoobar["bar"] = "bar";
})(eFoobar || (eFoobar = {}));
