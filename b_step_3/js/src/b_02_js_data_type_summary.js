
console.clear();

// 형타입!
// 1. 숫자 -> 값을 더하면 계산이 된다!
// 2. 문자 -> 값을 더하면 연결되어 처리된다! , 내가 작성할때 ''안에 내용을 작성한다.
// 3. 논리 -> 내용을 비교하여 (===, !== ..) 맞으면 true, 아니면 false를 도출
// 4. undefined -> 존재는 하는데 값은 없음!
// 5. null -> pass xxxxx
// --------------------------------------------------
// 6. 객체 > 배열/객체 -> 모르겠고 그냥 배열과/객체로 분리해서 일단 기억
// 6-1. 배열 -> 상세내용없이 오로지 []안에 목록만 나열
// 6-2. 객체 -> 무엇에는 무엇이있다(속성명:값)으로 존재하는 정의된 내용을 {} 내부에 나열 (css 작성내용과 유사)
// 7. 함수 -> 선언식? 표현식? 즉시실행? 사용방법 : function(){}, 이를 호출하기위한 이름이 필요하다.
// 7-1. 함수에 이름을 다는 방법 : 변수명 = function(){} 으로 처리하자
// 7-2. 함수에 있는 return은 최종 결론을 도출한다
// 8. 스코프(범위) : 변수가 사용할 수 있는 범위 - 전역/지역  

// --------------------------------------------------

/*
var body = document.querySelector('body');
(function(int){
  var wrap = document.createElement('div');
  wrap.setAttribute('id','wrap');
  int.append( wrap );
}) (body);
*/


// 22p, 코드에 에러 = f11 개발자환경에서 버그찾기 (디버깅)
// vscode 설치하기 
// 코드입력 주의 사항
// 1. 대소문자 구분해야 한다
// 2. 끝날때 ' ; '를 작성해야 한다
// 3. 문자 '문자' / 숫자 11
// 4. 괄호('', " ")는 짝이 맞아야한다.
// 5. ~ 42p

// --------------------------------------------------

var a = '2021년';
var b = '11월';
var c = '04일';
var dot = '.';
var date;
  //  date = parseInt(a) + dot + parseInt(b) + dot + '0' + parseInt(c);
var iFn = function(i){
  return parseInt(i);
};

  date = iFn(a) + dot + iFn(b) + dot + '0' + iFn(c);

console.log(date); // 2021.11.04


console.clear();
// --------------------------------------------------

// var arr = ['님 힘내세요.','님 오늘도 고생하셨어요!','님 내일도 또 다시!!']

var user = function(a){
  var text = '님 오늘도 고생하셨어요!';
  return a + text;
};
// [Math.floor(Math.random() * a.length)]
console.log( user('op') ); 

// 1. xx님 오늘도 고생하셨어요! 
// 2. xx님 힘내세요. 
// 3. xx님 내일도 또 다시!!

// ---------------------------------------------------
var ran = parseInt(Math.random() * 3); // 0~1까지의 난수

var arrSample = ['님 오늘도 고생하셨어요!', '님 힘내세요.', '님 내일도 또 다시!!'];
console.log( ran, arrSample[0] );

console.clear();


// -------------------------------------
var content = ['오늘도 고생하셨어요!', '힘내세요.', '내일도 또 다시!!'];

var userFn = function(data){
  var random = Math.random() * 3; //0,1,2
  var int = parseInt(random);
  var plusText = data + '님' + ' ' + content[int];
  return plusText;
};


 // js에서 id명을 선택하는 방법
 // 1. document.getElementById(Id 이름);
 // 2. document.querySelector(css와 동일한 선택자);

 // 요소 생성 방법
 // document.createElement('div'); // 생성해서 어딘가 넣을 준비 
 // 선택자.innerHTML = '<div></div>; // 기존 선택자 내부에 존재하는것 삭제
 // 선택자.append(요소) // 선택자 내부 뒤에 요소를 삽입(단, text 형태는 글자로 삽입)

  var userRel = userFn('op');
  console.log( userRel );
  var wrap = document.getElementById('wrap'); //
  var p = document.createElement('p'); // 새로운 p 생성
  p.innerText = userRel;
  wrap.append(p);

  console.clear();

 // ------------------------------------------------------------

var variable = '이것은 변수입니다.';
var indicatorNumber = 0;
// function(){}
// 함수() : 수행하세요 ~
document.write( variable );

// var 식 = (n)번째 광고내용이 바뀌는 식;
// 인디케이터를 클릭하면, 클릭한 인디케이터가 '몇번째'인지 파악하여, 변수 indicatorNumber에 순번을 담아 식(몇번째)를 수행하라

var indiFn = function(){ return 10; }; // 일정한 행동패턴을 저장
// document.write( indiFn ); // 문자 'function(){ return 10; }'
document.write( indiFn() ); // 문자 'function(){ return 10; }'

//function(){
//  return 10;
// };

// 1. 변수가 무엇이고 변수르 부르는 방법과 그 결과
var variable = '이것은 변수입니다.';
// 2. 함수는 무엇이고 변수에 함수를 담아 함수를 부는 방법
var indiFn = function(){return 10;};

// 변수는 햄버거를 담는 그릇
// 함수는 햄버거를 만드는 방법
  var buger = '치즈버거';
  var buger2 = function(){return '불고기버거';};


  var mybuger = '핫스파이시버거'; // 얘가 변수.
  console.log( mybuger );

  // ---------------------------------
  var selectBuger = function(재료){  // 얘가 함수.
    var primary = 재료;
    var makeBuger = '참깨빵 위에 ' + '순 쇠고기 패티두장 ' + primary + '양상추 ' + '치즈, ' + '피클 ' + '양파까지';
    return primary + '버거';
  };

  console.log( selectBuger('1955') );

  // 

  var a = 10;
  console.log( a ); // 10

  var ar = [5,8,'what','a'];
  console.log( ar[2] ); // what

  var fnCall = function(){ // function은 실행할 준비를 해라.
    console.log('game Go!');
  };  // 함수를 담은 변수 = 함수

  fnCall(); // fnCall를 실행 해라.

  var fnCall2 = function(){
    return 'this is Game!';  // 
  };

  // ; 작성위치 : 변수내용 끝, 기능 끝, ()이후 쓸게없다면;

  console.log( fnCall2() );

  // console.log() : (글자 가상화) 실제 구현x - 단순 led표시기에 표시되는 형태(console창에) - 상상
  // return : (글자가 실제로 구현되는것) 실제 구현o - 기능자체가 돌아가는거  - 실물
  // console.log()로 결과를 확인하고, 차후에 console.log에 들어가는것을 return에 담는다.

  console.clear();
  // ---------------------------------------------------------
  // sum(a, b); // 덧셈 : a + b = 값  v
  // mul(a, b); // 곱셈 : a * b = 값  v
  // divide(a, b); // 나눗셈 : a / b = 값
  // minus(a ,b); // 뺄셈 : a - b = 값 -> 정수값만 도출  v
  // svg(a, b); // 평균 : a * b / 2 = 값
  // remainder(a, b); // 나머지 값 : a % b = 값
  // + - * / %

  //+
  var sum = function(a, b){   // (양식)
    var c = a + b;
    var rel = a + '+' + b + '=' + c;
    return rel; // (순서)
    // return `${a} + ${b} = ${c}`;
  };
  console.log( sum( 1,3 ) ); // (호출)

  //-
  var minus = function(a, b){
    var c = a - b;
    var rel3 = a + '-' + b + '=' + c;
    return rel3;
  };
  console.log( minus(6,4) );

  //*
  var mul = function(a, b){
    var c = a * b;
    var rel2 = a + 'x' + b + '=' + c; // 문자 + 숫자 = 문자;;;;;;;; NaN = 숫자인데 표기할수 없어 문자가 아니야 숫자야
    dic.push (rel2); // 배열에 값을 추가해라
    return rel2; // 값을 반환해라
  };
  console.log( mul(1,3), typeof(mul(1,3)) );

  ///
  var divide = function(a, b){
    var c = parseInt(a / b); // parseInt(), Math.floor()
    var rel = a + '/' + b + '=' + c + ' (정수형 몫 값만 계산)';
    var c2 = a % b;
    // var rel2 = a + '%' + b + '=' + c;
    return rel + '나머지 값: ' + c2;
  };
  var d = divide(7,5);
  console.log(d);

  // svg
  var svg = function(a,b){
    var c = a * b /2;
    var rel5 = a + 'x' + b + '/' + 2 + '=' + c;
    return rel5;
  };
  var s = svg(5,6);
  console.log(s);
  // -----------------------------------------------

  // var dic = []; // -> 각각 다 집어 넣어라!
  
  var arr = [];
  sum(3, 4);  
  mul(3, 3);  
  divide(3, 3); 
  minus(3 ,3); 
  svg(3, 3); 
  remainder(3, 3);
  console.log( dic );

  

  