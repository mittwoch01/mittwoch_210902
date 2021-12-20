// d_01_esnext_variable.js

// 
// 이를 허용하는 것을 막기 위해 과거 'use strict'; 모드를 강제적용하여 사용
let i = 0;
console.log( i );

// 위에서 발생한 var에 대한 다양한 문제점(호이스팅, 다양한 기본문법에서 변수값 외부확인가능, 함수표현식 )을 해결하기 위해,
// 새로운 변수 설정방법 등장 ( const, let ) - var는 이제 사용하지 않는다.

// const는 변하지 않는 수 - 상수 : 생성과 동시에 값을 작성 / 바꿀 수 없음
// let은 변하는 수 - 변수 : 추후 변경이 가능 

// const의 주 사용처 : function(){}, {}, []

const arr = [];
arr.push(1);
arr.push(4, 'a');
arr.push(9);
console.log( arr );

const option = true;
console.log( option );
option = false;
console.log( option );

// ----------------------------
const fnTest = function(a, b){
  const k = a * b;
  return k;
}

fnTest(4,5);