var Controller = /** @class */ (function () {
    function Controller() {
        this.state = {
            memory: {
                testa: true,
                testb: ''
            }
        };
    }
    Controller.prototype.get = function (key) {
        return this.state.memory[key];
    };
    Controller.prototype.set = function (key, value) {
        this.state.memory[key] = value;
        return value;
    };
    return Controller;
}());
