var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Beings = /** @class */ (function () {
    function Beings(name) {
        this.name = name;
    }
    return Beings;
}());
var beings = new Beings(); // Error
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    People.prototype.sayHi = function () { };
    return People;
}(Beings));
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.age = 20;
        this.sex = 'male';
        this.name = name;
    }
    return Animal1;
}());
var aa = new Animal1('Jack');
console.log(aa.name); // Jack
aa.name = 'Tom';
console.log(aa.name); // Tom
console.log(aa.age); // error
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(age) {
        var _this = _super.call(this, age) || this;
        console.log(_this.name);
        console.log(_this.sex);
        console.log(_this.age);
        return _this;
    }
    return Cat;
}(Animal1));
// type
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.sayHi = function (a) {
        return "My name is " + this.name + " " + a;
    };
    Animal2.prototype.sayHello = function () {
        return "My name is " + this.name;
    };
    Animal2.prototype.sayYes = function (a) {
        return "My name is " + a;
    };
    return Animal2;
}());
var aaa = new Animal2('Jack');
var aaaA = aaa.sayHi.bind(window);
aaaA('dsfds');
console.log(aaa.sayHi('x')); // My name is Jack
console.log(aaa.sayHello('x')); // My name is Jack
console.log(aaa.sayYes('x')); // My name is Jack
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.x = 10;
    }
    MyClass.prototype.someCallback = function () {
        console.log(this.x); // Prints 'undefined', not 10
        this.someMethod(); // Throws error "this.method is not a function"
    };
    MyClass.prototype.someMethod = function () { };
    return MyClass;
}());
var obj = new MyClass();
window.setTimeout(obj.someCallback, 10);
var MyClassa = /** @class */ (function () {
    function MyClassa() {
    }
    MyClassa.initalize = function () {
        //
    };
    return MyClassa;
}());
MyClassa.initalize();
var Foos = /** @class */ (function () {
    function Foos() {
    }
    Object.defineProperty(Foos.prototype, "bar", {
        get: function () {
            return 42;
        },
        enumerable: true,
        configurable: true
    });
    return Foos;
}());
var x = new Foos();
// Expected error here
x.bar = 10;
