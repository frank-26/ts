function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
function getLength2(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
function handler(event) {
    var mouseEvent = event;
}
function handler1(event) {
    var element = event; // Error: 'Event' 和 'HTMLElement' 中的任何一个都不能赋值给另外一个
}
function handler2(event) {
    var element = event; // ok
}
