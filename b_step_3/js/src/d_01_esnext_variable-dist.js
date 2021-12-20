"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var i = 0;
console.log(i);
var arr = [];
arr.push(1), arr.push(4, "a"), arr.push(9), console.log(arr);
var option = !0;
console.log(option), (!1, _readOnlyError("option")), console.log(option);

var fnTest = function fnTest(o, n) {
  return o * n;
};

fnTest(4, 5);