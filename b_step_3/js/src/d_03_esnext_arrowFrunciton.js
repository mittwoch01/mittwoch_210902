"use strict";

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.to-string.js");

// d_03_esnext_arrowFrunciton.js
// 함수표현식
var fnBox = function fnBox() {
  return a * 10;
};

fnBox(5);
console.log(fnBox); // -----------------------

var fnBox2 = function fnBox2(a) {
  return a * 10;
};

console.log(fnBox2); // -----------------------
// 함수 선언식

function fnBox3(a, b) {
  var c = (a + b) * 100 + 'size';
  return c;
}

var rel = fnBox3(5, 10);
console.log(rel);

var fnBox4 = function fnBox4(a, b) {
  var c = (a + b) * 100 + 'size';
  return c;
};

var rel2 = fnBox4(10, 3);
console.log(rel2); // -----------------------

var arrNum = [1, 2, 3, 6, 8, 9, 20, 40, 56, 75, 88];
var minNum = arrNum.filter(function () {
  return 40 >= part && part > 10;
});
console.log(minNum); // -----------------------

var TimeTable = function TimeTable(kor, eng, math) {
  this.korean = kor;
  this.english = eng;
  this.mathmatics = math;
};

TimeTable.prototype.subject = '2021년 학습 과정명';
var data = [];
var st1 = new TimeTable('op', 60, 30, 70);
data.push(st1);
console.log(data);