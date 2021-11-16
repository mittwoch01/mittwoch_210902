// b_10_js_remind_01-1.js

var i = 0;

// 작업중간, 연산과정상
console.log('결과물은 개발자모드에서만 확인가능');

// 내용을 작업하고나서 끝에는 ;을 붙여라.
// ;을 붙이는 정확한 위치
// 1. 변수 선언/수정 끝 (함수도 포함이다. 함수앞에붙는 변수때문에 쓰는거다.)
// 2. 함수를 호출시 끝에
// 3. 식의종료 -> () ? : ;

// while(){}
// if(){}else{}  - 중괄호{}뒤에 ;이 들어갈일은 없다.
// [].forEach();  - 메소드는 내장함수이기때문에 붙는다.
// ();  - 붙음

// --------------------------------------------
// 형타입
// 1. 숫자
// 2. 문자
// 3. boolen : true/false - if(!ture){}else{} - 조건문
// 4. undefined / null
// 5. 객체([array],{object})
// 6. 함수

var a = 10;
console.log(a);
console.log(a+5); // 15
console.log(a+'5'); // 105
console.log(a+'a') // 10a
console.log(parseInt(a+'a')); // 10 : parseInt는 정수만을 도출한다.

var b = a+' ';
var c = a.toString();
console.log(b+1,c+1); // 문자, 문자

// var ar = ['a','b'];
// console.log(ar);


// 자기자신에게 추가연산
// +=, -=, /=, *=, %=(나누고 남은 나머지값)

// a += 5; // 10+5 15
// a = a + 5; // 10 + 5

a = parseInt(a %= 3); // 10/3일 경우 몫은 3 나머지는 1
console.log(a);

(a > 2)?(a = 10):(a = 20);
console.log(a);








//========================================
// 5- var a = [];
// 5- var b = {};
// 5- console.log(a.constructor);


// 1,2 - var a ='3'; // 문자
// 1,2 - var b = 3+3; // 숫자
// 1,2 - var c = typeof(3); // number
// 1,2 - var d = '3'+3 // 문자+숫자=문자

// 6 - var funFn1 = function(){
// 6 -   return 1;
// 6 - } // 함수표현식
// 6 - function funFn2(){
// 6 -   return 1;
// 6 - } // 함수선언식
// 6 - 
// 6 - funFn1();
// 6 - funFn2();


