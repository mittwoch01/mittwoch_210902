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

// Math 함수
var n = 5.54;
console.log('올림처리', Math.ceil(n) );
console.log('내림처리', Math.floor(n) );
console.log('반올림처리', Math.round(n) );
console.log('0~1까지의 난수', parseInt(Math.random() * 64) ); // loto game
console.log('절댓값', Math.abs(-n) ); 


// 논리(boolean) ; true 와 false 단 두개!!
// 논리형은 결과를 true/false로 확인하여 처리하지만, 그 결과를 확인하는 검증이 매우 많다.
// ! -> 반대 , === -> 형타입까지 일치하는가? ...

var bool = !!!false; // 중복처리가능 !!!!!!!!
console.log(bool, typeof(bool) );

console.log('비교: ', 1 === '1');

// var n = 5.54;
console.log(!!n); // 존재하는 값에 !를 붙이면 값이 없다는 의미로 해석된다 -> false가 되지만 본 의도는 값이 있는지 없는지에 대한 판단용도를 사용 / !!n 두번사용하여 값이 있다고 표시한다.
console.log(!!0);




// undefined
// null
// object
// array
// function


// 강제로 정의 내리기 위한 형식들 ~ 
// Number, String, Object, Array, Function 