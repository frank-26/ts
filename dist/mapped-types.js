var state = {
    text: "hello world",
    counter: 42
};
state.text = "update"; // Expected error: state is readonly
var stateUpdate1 = {
    counter: 70
};
var stateUpdate2 = {
    text: "update",
    flag: true
};
