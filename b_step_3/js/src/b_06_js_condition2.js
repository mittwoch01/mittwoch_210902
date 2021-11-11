// b_06_js_condition2.js

// 기능설명
// input에 글자를 입력할 때 어떠한 글자를 입력했는지 체크

// 변수
var inputBox = document.querySelector('#inputBox');
var par = document.querySelector('p');
var narr;
// 함수설정

// 이벤트

var keyFn = function(data){
  switch(data){
    case '1':
      narr = '숫자 1을 입력했습니다.';
      console.log('숫자를 입력했습니다.');
      break;
    case 'enter':
      narr = '띄어쓰기를 입력했습니다.';
    console.log('띄어쓰기를 입력했습니다.');
      break;
      default:
      narr = '다른 글자를 입력';
      console.log('다른 글자를 입력');
  }
}; // keyFn();

// event
// inputBox에 이벤트 발생(글입력하면 다음을 수행)/ 이벤트 특성 : 소문자
inputBox.addEventListener('keyup', function(event){ 
  keyFn(event.key);
  par.innerText = narr;
});

// 선택자.이벤트발생(이벤트조건, 함수(이벤트처리되는형태){ } );

// -------------------------------------------------
// 변수
var selectFood = document.querySelector('#selectFood'); // document.getElementById('selectFood');
var btn1 = document.querySelector('.btn1'); //document.getElementsByClassName('.btn1')[0];
var food = document.querySelector('.food'); // document.getElementsByClassName('.food')[0];
// documents.getAttribute('class','food');

// 함수
var switchTest2 = function(food){
  var selectFood;
  switch(food) {
    case 'noodle':
      selectFood = '면류를 좋아하시는군요! 냉면을 추천드립니다!';
      break;
    case 'meat':
      selectFood = '고기는 역시 소고기!';
      break;
    case 'rice':
      selectFood = '한국 쌀이 맛 좋아요!';
      break;
    default:
      selectFood = '입에들어가면 다 맛있죠!';
  }
  return selectFood;
};

// event
// btn1d을 이벤트발생('클릭', 수행 => selectFood의 값을 가져와서 결과를 food에 도출시켜라 ~)
btn1.addEventListener('click', function(e){
  e.preventDefault(); // 기본기능 삭제
  console.log(selectFood.value);
  var rel = selectFood.value;
  var returnValue = switchTest2(rel);
  food.innerText = returnValue;

});