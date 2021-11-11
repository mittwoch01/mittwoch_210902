// b_05_js_condition.js
// 문법


/*
switch (매개변수) {
  case 조건값1:
    조건값과 매개변수가 일치하면 수행
  break;
  case 조건값2:
    조건값과 매개변수가 일치하면 수행
  break;
  default:
    위 조건들이 일치하지 않으면 수행
}
*/

var rel = true;
var d = [];

switch (rel) {
  case true:
    d.push('true 1');
  // break; 
  // break는 더이상 해당조건을 수행하지 않고, switch 문법을 종료!
  case false:
    d.push('false 1');
  // break;
  default:
    d.push('end');
}
console.log(d);


var num = 4;
var data = []; // 빈 배열에 push로 채워넣는 기능 : 기록이 남게하기 위해서.
var atmFn = function (num) { // 여러번 쓸수 있게 function을 사용
  switch (num) { // 여러개의 값을 쓸수 있다.
    case 1:
      data.push('현금 입금');
      atmFn(2); // 자기자신을 다시 호출 : 재귀함수 // case 2번의 data를 내보내겠다.
      break;
    case 2:
      data.push('통장 확인');
      break;
    case 3:
      data.push('타계좌 송금');
      atmFn(2);
      break;
    case 4:
      data.push('통장 삭제');
      atmFn(2);
      break;
    default:
      data.push('대출(연 60%)');
      atmFn(2);
  }
};
atmFn(1); // 첫번째로 atm을 쓴사람
console.log(data);

// ----------------------------
console.clear();

// a: 편의점에서 물건을 살 경우
// 1. 물건을 고른다.
// 2. 카드를 낸다.
// 3. 카드 결제를 한다.
// 4. 물건과, 카드를 돌려받는다.
// 5. 결제 내역을 확인한다.

// b: 편의점에서 공병을 팔 경우
// 1. 물건을 낸다.
// 2. 카드를 낸다.
// 3. 카드 입금을 받는다.
// 4. 카드를 돌려받는다.
// 5. 결제 내역을 확인한다.

// c: 편의점에서 물건을 환불
// 1. 물건을 건넨다.
// 2. 카드를 낸다.
// 3. 카드 입금을 받는다(취소)
// 4. 카드를 돌려받는다.
// 5. 결제 내역을 확인한다.

// d: 편의점 결제가 안될때
// 1. 물건을 고른다.
// 2. 카드를 낸다.
// 3. 결제 에러발생.
// 4. 카드를 돌려받는다.
// 5. 결제 내역을 확인한다.

// 비슷한 내역은 한번에 처리할수 있도록 만들어준다.


var storeList = []; // 외부에서 처리하는 변수 ~
var i = 0; // 외부에서 처리하는 변수 ~
// -------------
var setFn = function(selector){
  var userStep = [];
  var storeSelectFn = function(selector){ // 함수안에 함수가 들어갔기때문에 외부에서 움직일수 없는 내부의 함수이다.(추상화처리)
    switch (selector) { 
      case 'a' : // 물건을 살 경우  
        storeSelectFn('send'); 
        userStep.push('3. 카드 결제를 한다.');
        storeSelectFn('return');  
        break;
      case 'b' : // 공병을 팔 경우
        storeSelectFn('send');
        userStep.push('3. 카드 입금을 받는다.');
        storeSelectFn('return');
        break;
      case 'c' : // 환불
        storeSelectFn('send');
        userStep.push('3. 카드 입금을 받는다(취소)');
        storeSelectFn('return');
        break;
      case 'd' : // 결제가 안될 때
        storeSelectFn('send');
        userStep.push('3. 결제 에러발생.');
        storeSelectFn('return');
        break;
      case 'send':
        userStep.push('1. 물건을 고른다.', '2. 카드를 낸다.'); //1/
      case 'return':
        userStep.push('4. 카드를(물건이 있다면 물건과 함께) 돌려받는다.'); //2/
        userStep.push('5. 결제 내역을 확인한다.');

        break;  
      default:
        userStep.push('사용기록 없음.');
    }
    return userStep;
  }; // 결과치만 노출되게 하는것을 클로저라고 한다.(1. 개인정보 / 2. 관리자 특유의 공식/ 3. ) 내부만 처리되게 하기위해서. 
  storeSelectFn(selector); 
  // console.log(userStep);
  return userStep; // 최종적으로 내보내는 값.
}; // setfn();
setFn('a');

// ======================================================

  var storeFn = function (selector, user) { 
  var userCheck = {}; // {name: '사용자', content: [] };
  var userStep = []; // 어떠한 값을 나열[]; -> 행동에 대한 순서를 push로 밀어서 나열된 순서 박스
  // ------------------------
  userStep = setFn(selector); // userStep : 함수를 호출한 결과를 배열값으로 도출한다.
  // ------------------------

  i += 1; // 1씩 더해라 -> storeFn을 호출시 값이 1씩 증가
  userCheck.name = user || 'noNameUser_'+ i; // name : 사용자 이름작성 또는 'noNameUser_숫자'(방문자번호)
  userCheck.content = userStep; // 방문자가한 행동순서
  storeList.push(userCheck); // 전체 방문user에 대한 지침
  return userCheck; // 최종적으로 출력한다.
}; // storeFn();

console.log( storeFn( 'a','user1' ) );
console.log( storeFn( 'b','user2' ) );
// console.log( storeFn( 'c','user3' ) );
// console.log( storeFn( 'd','user4' ) );
console.log( storeList );

// 내용로직 - 변수 - 함수 - 결과 도출 순으로 쓰기

console.clear();

var box2 = function(){
  var list = 'def';
  return list;
}

var box1 = function(){
  var list = 'abc';
  // console.log(list);
  var sam = box2();
  console.log(list, sam);
}

box1();