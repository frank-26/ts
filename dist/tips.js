// 可选：构造函数
var createFoo = function (value) { return ({ type: 'foo', value: value }); };
var createBar = function (value) { return ({ type: 'bar', value: value }); };
var foo11 = createFoo('sample');
var bar1 = createBar('sample');
foo11 = bar; // Error
foo11 = foo11; // Okey
var textEl = document.querySelector('input');
console.log(textEl.value);
console.log(textEl.value);
var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent(bs) {
        this.bs = bs;
    }
    SearchPageComponent.prototype.getFirstMovie = function () {
        // 🛑 types are not assignable
        this.movie = this.bs.items[0];
        // 👍 so you have to manually assert type:
        this.movie = this.bs.items[0];
    };
    SearchPageComponent.prototype.getSecondMovie = function () {
        this.movie = this.bs.items[1];
    };
    return SearchPageComponent;
}());
