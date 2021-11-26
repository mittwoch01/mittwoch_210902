// c_03_dom_check_restore_01.js
// [1,2,3,4,5]
// window > document > [elements]
// toggle
// getComputedStyle() 내가 만든 style을 가져와서 사용하겠다.
// var conBox = document.querySelectorAll('#contentBox') contentBox에 있는 걸 가져와라 근데 번호매겨야함[0]
// conBox.style.width = '500px' style의 width 500px으로 변화주기
// var conStyle = getComputedStyle(conBox).width;
// console.log( conStyle );

// window는 브라우저 자체로 window객체명은 생략이 가능하다.
console.log( window.document );
window.console.log('!!');
window.document.querySelector('h1');

// nodejs > window 대신 global

// document?
// 우리가 실제로 사용하는 웹 사이트 화면 페이지
// document는 object
// -------------------------------------------------
// document.querySelectorAll('li'); 찾아서 확인
// document.getElementByTagName('li') 찾아서 가져오겠다

var conBox = document.querySelector('#contentBox'); 
var btn = conBox.querySelector('button');
var conArea = conBox.querySelector('.content_area');
// conBox.style.width = '500px'; 
var conStyle = getComputedStyle(conBox).borderWidth;
console.log( conStyle ); // style에 있는 기존 값
console.log( !!conBox.style.width ); // X

// toggle
// var btn = conBox.querySelector('button');
// console.log( btn );
btn.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.toggle('on'); // this.classList.toggle('on')과 같음
  // this : 이벤트 주체, property, window
  conArea.classList.toggle('on');
});

// ------------------------------------------------------