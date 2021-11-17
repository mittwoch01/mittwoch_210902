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
var n1 = "7";
var n2 = '5';
var n = n2 - n1; // NaN
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