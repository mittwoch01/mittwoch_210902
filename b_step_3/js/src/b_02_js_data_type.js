// b_02_js_data_type.js
// 형타입을 파악하는 함수 :  typeof 변수명(literal)
// 숫자로 보이는 문자 ('1')를 강제로 숫자형타입으로 변환하는 함수 : parseInt(무조건 정수변환 변수), parseFloat(변수), Number(변수)...


// 숫자(number)
var num = 1;
var num2 = num;
    num = 10;
    // num = 10; / num2 = 1; 인 상태
    num2 = num;

console.log( num, typeof(num) );
console.log( num2, typeof(num2) );

// 문자(string)
var str = '123';
var str2 = str; // str2 = 123
    str = '문자'; //str2 = 123

console.log( str , typeof( str ) );
console.log( str2 , typeof( str2 ) );

var str3 = str2 + 567; // 문자 + 숫자 -> 문자의 나열 -> '123' + 567 -> 123567
console.log( str3 ); // '123' + 567 = '123'567
var str4 = parseInt( str2 ) + 567; // parseInt : 문자를 정수로 바꾸기 
console.log( str4 ); // 123 + 567 = 690

console.log( typeof('50.4%') );
console.log( parseInt('50.4% auto') ); // 첫 글자부터 정수숫자로 변환가능한것 까지만 숫자화 처리
console.log( parseFloat('50.4%') ); // 첫 글자부터 실수 숫자모두 변환가능한 부분까지 숫자로 처리
console.log( Number('50.4%') ); // 문자든/숫자든 관계없이 모두 숫자로 변환처리

var nan = NaN; // Not a Number
console.log( nan, typeof(nan) );


// 논리(boolean)
// undefined
// null
// object
// array
// function


// 강제로 정의 내리기 위한 형식들 ~ 
// Number, String, Object, Array, Function 