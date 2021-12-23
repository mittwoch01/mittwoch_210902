// slide_movie.js


// 변수
const elViewBox = document.querySelector('#viewBox');
const elSlideBtn = elViewBox.querySelector('.slide_btn');
const elSlideWrap = elViewBox.querySelector('.view_wrap');
let elSlideLi = elSlideWrap.querySelectorAll('li');
// const elSlideArr = [].slice.call(elSlideLi);

const fnSlideMove = ()=>{
  let elSlide = [...elSlideLi];// 1,2,3,4,5
  elSlideWrap.prepend( elSlide.at(-1) );// 5,1,2,3,4 // 1,2,3,4,5
  elSlideLi = elSlideWrap.querySelectorAll('li');
};
const fnSlideMove2 = ()=>{
  let elSlide = [...elSlideLi];
  elSlideWrap.append( elSlide.at(0) ); //append : 선택한 요소의 내용의 끝에 콘텐트를 추가합니다.
  elSlideLi = elSlideWrap.querySelectorAll('li');
};
// 감자가 많으면 반만 깎아서 끊여줘 -> 감자하나의 반만 깎아서 전부 끓였다.

// 이벤트

elSlideBtn.addEventListener('click', (e)=> {
  //let target = (name) => e.target.classList.contains(name);// 이벤트발생시킨.원인제공.class이름.있는가(name) //class name의 유무를 판단하는 contains 
  e.preventDefault();
  let target = (name) => e.target.classList.contains(name);
  if(target('next')){ // '.next' 버튼 클릭시 수행하는 기능
    console.log('next버튼 클릭시')
    fnSlideMove2();
  }else{
    console.log('prev버튼 클릭시')
    fnSlideMove();
  }
  // e.target.classList.contains('next');
});



// -------------------------------------------------------
// 이벤트 위임 : 실제로 클릭해야하는 요소가 아닌 그 부모에서 클릭했을 경우 해당하는 요소가 반응할 수 있도록 인식
// 버블링 : 부모에 전달, 캡처링 : 자식에게 전달

let elBtn = elViewBox.querySelector('.slide_btn');
let elNext = elBtn.querySelector('.next');

// ===========================================================
// this
// function(){} 함수일 경우 : 이벤트 주체, 특정한 것을? / ()=>{} 함수일 경우 : 전체문맥, 전체적인것을?
// 화살표 함수 : 생성자 함수를 만들수 없다.


// elNext.addEventListener('click', function(e){
//   console.log( this ); // 화살표 함수와, 일반함수에 따라 역할이 달라진다.
//   console.log( e.currentTarget ); // 이벤트를 동작시키는 요소
//   console.log( e.target ); // 이벤트가 발생되는 요소
// })


// elBtn.addEventListener('click', (e)=>{
//   console.log( this ); 
//   console.log( e.currentTarget );
// })

// ===========================================================
// 버블링
// elNext.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('버튼의 부모에서 명령');
// });
// 
// elBtnWrap.addEventListener('click', function(e){
//   e.stopPropagation();
//   e.preventDefault();
//   console.log('버튼에서 명령');
// });

// ===========================================================
// 캡쳐링 : 이벤트 발생부터 상위로 개념

// for(let elem of document.querySelectorAll('*')) {
//   elem.addEventListener("click", (e )=> console.log(`캡쳐링: ${elem.tagName}`), true);
//   elem.addEventListener('click', e => console.log(`버블링 : ${elem.tagName}`));
// }


const arr = [1,2,3,4,5,6,7,8,9,10];
console.log( arr[9] );