// b_02_js_data_type.js
// 형타입을 파악하는 함수 :  typeof(변수명 = literal)
// 숫자로 보이는 문자 ('1')를 강제로 숫자형타입으로 변환하는 함수 : parseInt(무조건 정수변환 변수), parseFloat(변수), Number(변수)...


// 숫자(number) -----------------------------------------------------
var num = 1;
var num2 = num;
    num = 10;
    // num = 10; / num2 = 1; 인 상태
    num2 = num;

console.log( num, typeof(num) ); // 위에서 작업한 결과를 보여주는 것
console.log( num2, typeof(num2) );

// 문자(string) -----------------------------------------------------
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


// 논리(boolean) ; true 와 false 단 두개!! ---------------------------------------
// 논리형은 결과를 true/false로 확인하여 처리하지만, 그 결과를 확인하는 검증이 매우 많다.
// ! -> 반대 , === -> 형타입까지 일치하는가? ...

var bool = !!!false; // 중복처리가능 !!!!!!!!
console.log(bool, typeof(bool) );

console.log('비교: ', 1 === '1');

// var n = 5.54;
console.log(!!n); // 존재하는 값에 !를 붙이면 값이 없다는 의미로 해석된다 -> false가 되지만 본 의도는 값이 있는지 없는지에 대한 판단용도를 사용 / !!n 두번사용하여 값이 있다고 표시한다.
console.log(!!0);


// undefined ----------------------------------

var und = undefined;
console.log(und, typeof(und) );
    und = 'undefined'
console.log(und, typeof(und) );
    und = undefined + 'result' ; // 문자 + 숫자 = 문자 / 모든것에 문자를 더하면 전체가 문자로 바뀜
console.log(und, typeof(und) );


// null ---------------------------------------
var nul = null;
console.log(nul, typeof(nul) );
// nul은 undefined와 null은 값이 없다는 의미의 특수한 형타입으로 있던 자료구조였으나,
// 현재는 단순히 값이 누락시킨다 라는 의미로만 존재.


// object / function 형타입은 단순 한가지의 개념을 가지고 있는 것이 아니고, 여러 형타입을 담은 복합성이 특징임
// 그래서 object / function 형타입으로 사용할 변수처라는 참조변수 개념으로 처리
// 일반변수 = 단순 값을 가지는 변수 / 참조변수 = 값을 가지는 변수가 아닌 어느 공간(주소)을 공유하는 변수 []

// 일반변수-사과 - 1일 1개인 경우는 내가 가지고 있으면 되지만, 
// 참조변수-사과창고 - 양이 늘어나면 별도의 공간이 필요하다. 공간을 공유한다.
// js는 0부터 시작된다.

// object -------------------------------------
// 1.array ---------------------------
var arr = ['키보드','마우스','태블릿','모니터','노트북','웹캠'];
console.log( arr, typeof(arr) ); 
console.log( arr[3] );

arr[5] = '마이크';
arr[9] = '웹캠';
console.log( arr[5], arr[9] );
console.log( arr[9], arr );

console.clear();

var arr2 = arr;
console.log( arr2 );
arr[9] = '빼빼로';
console.log( arr );
console.log( arr2 );

console.clear();

var arT = new Array() // 지어진 공간에 값을 채워넣어라 ~ / 가방이 필요하면 기본형태가 있는 원본 가방을 하나 더 만들어진 것을 구매하여 가방을 하나 얻은 것?
console.log( arT );
arT[0] = '물';
arT[1] = '약';
console.log( arT );
// new Array()를 이용하여 배열을 생성하는 방식은 권장하지 않는다. -> 바로 [] 작성후 바로 수정

var arA = []; // []안에 빈 배열로도 쓸 수 있다.
arA[0] = '물';
arA[1] = '약';
console.log( arA );

arA.push('커피'); // push = 뒤에 밀어넣기.
arA.push('밀크티'); 
arA.push('키위주스');
arA.unshift(11); // unshift = 앞에 밀어넣기.
arA.unshift('11');
console.log( arA );

arA.pop(); // pop = 끝부터 있는 것을 터트린다.
arA.pop();
arA.shift(); // shift = 맨앞부터 있는 것을 터트린다.
console.log( arA );

// 2. object -------------------------------------
var obj = {};


console.log( obj, typeof(obj) );
console.log( obj.constructor === Object );

obj.apple = 'iphone';
obj.samsung = 'galaxy';
obj.google = 'pixel';
obj.농심 = '너구리';
obj['오뚜기'] = '진라면';
obj['한국야구르트'] = '건국우유';

console.log( obj );
console.log( obj.google ); // obj = 값을 확인하는 기능.

var obj2 = {};
obj2[0] = '마이크';
obj2[1] = 'pen';
obj2[2] = '텀블러';
console.log( obj2 );


console.clear();

// function ----------------------------------- fn = f
var fn = function(a){   
  // a는 매개변수(parameter), 인수/인자(argument)
  // return 마지막에 작성하는 것으로, 최종결론을 위해서는 return을 사용해야한다.
  return 1 + a;   // 역할부여
};

console.log( fn(5) ); // 숫자 5를 담은 수행결과







// 강제로 정의 내리기 위한 형식들 ~ 
// Number, String, Object, Array, Function 