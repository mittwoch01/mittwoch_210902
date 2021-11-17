// b_12_js_function.js

// 내장함수 : js에서 미리 만들어져있는 함수 
var massage = "별도의 메세지창을 띄워확인";
// alert(massage);


var userOld = '나이를 입력하세요.';
// var propResult = prompt(userOld); 
// if(propResult < 20){
//   location = "http://naver.com";
// }else{
//   document.write('어서오세요')
// }

// 위와 같음 (삼항연산자로 표현하기.)
// var userOld = '나이를 입력하세요.';
// var propResult = prompt(userOld); 
// (propResult < 20) ? location = "http://naver.com" : document.write('어서오세요');

var adultCheck = '당신은 성인이신가요?';
// var confirmCheck = confirm(adultCheck);
// (confirmCheck) ? document.write('성인이시군요') : document.write('미성년자임을 확인했습니다');

// ------------------------------------------------------
// var console = {
//   log:function(){},
//   warn:function(){},
//   error:function(){},
//   info:function(){},
//   dir:function(){},
//   table:function(){},
//   time:function(){},
//   timeEnd:function(){},
//   group:function(){},
//   groupEnd:function(){}
// }

var arr = ['one', 'two', 'three', 'four', 'five']; 
var obj = {'a': 'one', 'b': 'two', 'c': 'three'};
console.log(arr);
console.table(arr); // 표로 보여준다.
console.table(obj);

console.time();
console.log(arr);
console.timeEnd();

console.clear();

// -----------------------------------------------
// Math round (half up), ceil (up), floor (down)

var random = Math.ceil(Math.random() * 10); // 1 ~ 10 사이의 난수
console.log( random );

// 함수 : parseInt(정수), parseFloat(소수점 포함형태) : 변환이 가능한 부분까지만 순차적으로 숫자로 변환된다.
// 숫자, 문자 모두 parseInt와 parseFloat을 쓰면 숫자로 변환되는건가요??
// -----------------------------------------------
var num = 20.456789;
var num2 = '50.9876543';
var unit = '30px';

console.log( parseFloat( num2 ) );
// -----------------------------------------------
// eval(string) don't try 
// 강제로 문자형식을 숫자로 치환하여 임의 계산까지 완수하는 형태
// typescript가 나온 현시점에서는 사용에 문제가 있음.
var sum = eval(`5 + 5`); // 백틱가능
console.log( sum );

console.clear();

// var n = '7'/ 7; // + 만이 NaN 으로 나온다...? '7'숫자가 들어간 문자는 숫자로 치환이 되어서 계산이 된다...?

// js에서 문자형태의 숫자는 기본 연산이 된다.(단, +형태는 연결로 처리)
var n1 = '7';
var n2 = '5';
var n = n2 - n1; // NaN or 암묵적변환에 의한 결과
var nRel = isNaN(n); // var nRel : boolean(t/f)
console.log( n, nRel );

// -----------------------------------------------
// URI : Uniform Resource Identifier - 인터넷 식별자(UTF-8형식)
// encodeURI() -> 인터넷에서 식별가능한 형태로 변환하는 함수
// 변환불가능한 텍스트 : A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
var space = ' ';
var encodeS = encodeURI(space); // %20
console.log( space, encodeS );

// encodeURIComponent() -> 문자형식을 모두 변환해주는 기능
// 변환 불가능한 텍스트 : A-Z a-z 0-9 - _ . ! ~ * ' ( ) 
var url = 'http://naver.com';
var encode = encodeURIComponent(url);
console.log(encode);

// -----------------------------------------------
// setInterval() -> 일정시간마다 수행
// clearInterval() -> setInterval을 강제로 완전히 삭제
// setTimeout() -> 일정시간 뒤에 수행

// console.clear();
// 
// console.log('글자 등장.');
//   setTimeout(function(){
//   console.log('3초 뒤에 등장.');
// }, 3000);

// ----------------------------
// var i = 0;
// var setI = setInterval(function(){ // 무한대로 수행하는 기능이다.
//              console.log('i:', i);
//              // if(i >= 20) ? i = 0 : i++;
//              i++;
//               if(i > 20) {
//                 clearInterval(setI);
//               } 
//            }, 5000);
// 
// console.clear();

// ----------------------------
// 생성자함수, instance
// 생성자함수 - 객체의 생성시에만 호출되어 메모리 생성과 동시에 객체의 데이터를 초기화하는 역할, new라는 단어를 붙여서 객체화 시킴
// instance - 추상화 개념 또는 클래스 객체, 컴퓨터 프로세스 등과 같은 템플릿이 실제 구현된 것

// Date(); 이거 함수임. 날짜와 관련된 기능임.
var date = new Date(); // new가 붙으면, 함수형태를 객체로 변환하여 사용할 수 있음 

date.setFullYear(2019);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log( year, month, day );
// ----------------------------
// 원시함수 - 
// console.log(Array);
// console.log(Object);
// console.log(Function);
// console.log();
// console.log();

var array = [];
var array2 = new Array();
// 둘이 같음


console.clear();
// 원시함수 : 애초에 만들어진 기본개념을 담은 함수. 직접사용 불가한 함수를 객체로 변환해 사용해. (첫글자 대문자)
// Number(), String(), Boolean(), Date(), Function(), Object(), Array()......

// 내장함수 : 기본형태로 사용할 수 있도록 만들어진 함수
// paresInt(), parseFloat()

// 생성자함수 : 원함수 사용이 불가능한 함수를 객체로 변환하여 사용할 수 있도록 하는 근본이 되는 함수(첫글자 대문자)

// instance : 함수가 객체로 변환되는 것. 생성자함수에 의해 생성된 객체

// 처음부터 생성된 함수는 변경이 불가 : 원시함수/내장함수
// 변경/생성할 수 있는 함수 : 생성자 함수
// 유사배열이 존재하는 이유 : li들의 요소를 단순 나열하여 배열로 처리, {객체}로 모은형식



// 이게모야~~~~~~
var fn = function(){};
var Fn2 = function(){
  this.name = a;
  this.age = b;
};
// Fn2.prototype.middle = 'lee'

var afn = new Fn2('op', 25); // var afn = { name : 'op' , age : 25 };
console.log( afn.name );