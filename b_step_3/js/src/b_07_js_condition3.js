// b_07_js_condition.js

var rel = true;
if (rel) {
  // 참인 경우 수행
  console.log('값은 참 입니다.');
} else {
  // 참이 아닌 경우 수행
  console.log('정답은 거짓입니다');
}

var count = 10;
if (count <= 5) {
  console.log('숫자는 5이하 입니다.');
} else if(count > 10){
  console.log('숫자는 10보다 크다.');
} else {
  console.log('5보다크고 10보다 작거나 같은 수');
}

// -----------------------------------------
var count2 = '?';
if(count2 >= 10){
  console.log('10보다 큰수');
} else if(count > 20) {
  console.lot('20보다 큰수');
} else {
  console.log('다른 수');
}

// -----------------------------------------
// 문제 : 100이하의 숫자를 입력하면
// 결과는 3자리 (001~100)의 형태로 결과를 도출하시오.

var n = 80;
if (n < 10){
  n = '00' + n;
} else if (n < 100){
  n = '0' + n;
}
console.log(n);

console.log(n,'확인', '-----------------');
var nn = n.padStart(5, '0');
var cut = nn.slice(-3);
var num2;
console.log(num2);

console.clear();

// 중첩함수
var a = function(n){
  var b = function(i){

    var c = function(j){
      var r = j + j;
      return r;
    } // c

    var r2 = c(i) / 2;
    return r2;
  } // b

  var r3 = b(n) + 5;
  return r3;
};

console.log(a(4));
// a호출 -> b호출 -> c호출 -> c해결 -> b해결 -> a해결 -> 결과도출
// 함수를 작성하는 기법 -
// 1. 하나의 기능은 하나의 함수
// 2. 해당하는 함수가 내부처리/외부에 별도 도출구분 
// - 여러개의 함수에서 하나의 기능을 자주 사용하면 : 외부함수
// - 하나의 함수에서 하나만 호출 : 내부/외부
// - 함수의 결과를 오로지 한군데에서만 호출하여야 한다. : 내부함수
// - 외부함수의 핵심은 별도의 수행가능여부 


//( (n + n) / 2 ) + 5

// 클로저
var aFn = function(n){

  return (function(i){ㄴ

    return (function(j){
      var r = j + j;
      return r;
    }) (i) / 2;  // c

  })(n) + 5 // b  

};

console.log(aFn(4));