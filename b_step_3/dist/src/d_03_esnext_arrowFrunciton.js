// d_03_esnext_arrowFrunciton.js

// 함수표현식
const fnBox = function(){
  return a * 10;
};
fnBox(5);
console.log( fnBox );

// -----------------------
const fnBox2 = a => a * 10;
console.log( fnBox2 );
// -----------------------

// 함수 선언식
function fnBox3 (a,b) {
  const c = ( a + b ) * 100 + 'size';
  return c;
}

let rel = fnBox3( 5, 10 );
console.log( rel );

const fnBox4 = ( a, b ) => {
  const c = ( a + b ) * 100 + 'size';
  return c;
}
let rel2 = fnBox4( 10, 3 );
console.log( rel2 );

// -----------------------

const arrNum = [1,2,3,6,8,9,20,40,56,75,88];
const minNum = arrNum.filter(function(){
  return 40 >= part && part > 10;
});
console.log( minNum );

// -----------------------
const TimeTable = function(kor, eng, math){
  this.korean = kor;
  this.english = eng;
  this.mathmatics = math;
};

TimeTable.prototype.subject = '2021년 학습 과정명';

const data = [];

const st1 = new TimeTable('op', 60, 30, 70);
data.push(st1);
console.log( data );