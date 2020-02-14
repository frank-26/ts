"use strict";
exports.__esModule = true;
// user
var settings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/post_something', settings);
var foo = require("foo");
console.log(foo);
