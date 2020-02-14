"use strict";
exports.__esModule = true;
var TypedEvent = /** @class */ (function () {
    function TypedEvent() {
        var _this = this;
        this.listeners = [];
        this.listenersOncer = [];
        this.on = function (listener) {
            _this.listeners.push(listener);
            return {
                dispose: function () { return _this.off(listener); }
            };
        };
        this.once = function (listener) {
            _this.listenersOncer.push(listener);
        };
        this.off = function (listener) {
            var callbackIndex = _this.listeners.indexOf(listener);
            if (callbackIndex > -1)
                _this.listeners.splice(callbackIndex, 1);
        };
        this.emit = function (event) {
            _this.listeners.forEach(function (listener) { return listener(event); });
            _this.listenersOncer.forEach(function (listener) { return listener(event); });
            _this.listenersOncer = [];
        };
        this.pipe = function (te) {
            return _this.on(function (e) { return te.emit(e); });
        };
    }
    return TypedEvent;
}());
exports.TypedEvent = TypedEvent;
var onFoo = new TypedEvent();
var onBar = new TypedEvent();
onFoo.on(function (foo) { return console.log(foo); });
onBar.on(function (bar) { return bar; });
onFoo.emit({ type: 'foo' });
onBar.emit('bar');
// ClipboardEvent<T = Element> // 剪贴板事件对象
// DragEvent<T = Element> // 拖拽事件对象
// ChangeEvent<T = Element> // Change 事件对象
// KeyboardEvent<T = Element> // 键盘事件对象
// MouseEvent<T = Element> // 鼠标事件对象
// TouchEvent<T = Element> // 触摸事件对象
// WheelEvent<T = Element> // 滚轮事件对象
// AnimationEvent<T = Element> // 动画事件对象
// TransitionEvent<T = Element> // 过渡事件对象
