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

var b = a+' '; // '10' 문자
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

(a > 2)?(a = 10):(a = 20); // a의 값이 1이니까 거짓! 그래서 거짓일때 a = 20이 도출
console.log(a === 20);

//---------------------------------------
var arr = [1,2,3,4,5,6,7,8,9,0]; // 순서가 있는 값
var obj = {'a':1, 'b':2, 'c':3}; // 순서가 없다. 정의를 내릴 때 쓴다. {객체객체객체}
console.log(arr[4], obj.b, obj['b']);

// --------------------------------------
var fn = function(e){
  return e + b;
};
var fnCon = fn(arr[3]);
console.log(fnCon);

//---------------------------------------
// if(){}else{}
// switch(){}
// for(){} , for-in , .forEach
// function(){}

// switch(){}
var switchN = 6;
var data;
switch(switchN){
  case 1:
    data = '마우스 왼쪽버튼을 클릭하였습니다.'
    break;
  case 2:
    data = '마우스 오른쪽버튼을 클릭하였습니다.'
    break;
  case 3:
    data = '마우스 휠을 클릭하였습니다.'
    break;
  case 4:
    data = '마우스 측면버튼을 클릭하였습니다.'
    break;
  default:
    data = '마우스 기타 다른버튼을 클릭하였습니다.'
    break;
}

console.log(data);

var arr2 = [1,2,3,4,5,6,7,8,43,2,4,6,66];
// for(최초; 비교; 증감){}
for(var j=0; j<10; j++){
  console.log('j:', j, '-', arr2[j]);
}

// [배열의 이름].forEach(function(각 요소 하나씩, 순서){})
arr2.forEach(function(arg, idx){
  console.log(idx,':', arg, arr2[idx]);
});

// for(임의변수k in 객체){}
console.log(obj);
for(var k in obj){
  console.log(obj[k]);
}
// ---------------------------

var an = [1,3,4];
var na = [1,3,4];
console.log(an === na); // false
var n = 5;
var u = 5;
console.log( n === u); // true

for(var l = 0; l<3; l+=1){
  console.log( an[l] === na[l] );
}

var nna = na;
console.log(nna === na);








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


