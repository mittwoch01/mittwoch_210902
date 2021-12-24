// slide_movie.js


// 변수
const elViewBox = document.querySelector('#viewBox');
const elSlideBtn = elViewBox.querySelector('.slide_btn');
const elSlideWrap = elViewBox.querySelector('.view_wrap');
const elModal = elViewBox.querySelector('.modal_area');
const elMovie = elModal.querySelector('.movie');
const elModalClose = elModal.querySelector('.modal_close > button');

let elSlideLi = elSlideWrap.querySelectorAll('li');

let elSlide = [...elSlideLi];
let PERMISSION = true;
elViewBox.style.overflowX = 'hidden';
let dbVideoData = [];
let videoCode = (fileName, type = 'mp4')=> {
  return `<video controls autoplay muted preload>
          <source src="${fileName}" type="video/${type}" / >
          </video>`};

// -----------------------------------------

// elSlide.forEach((el,idx)=>{
//   el.setAttribute('data-num',idx);
// })

const path = "../data/video_modal.json";
fetch(path)
  .then(response => response.json())
  .then((data)=>{
    dbVideoData = [...data];
    elSlide.forEach((el,idx)=>{
      el.setAttribute( 'data-num', dbVideoData[idx].id );
    });
    console.log(dbVideoData);
  });

// -----------------------------------------
const fnSlideMove = (e)=>{
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    let target = e.target.classList.contains('next');
    elSlide = [...elSlideLi];
    (target) ?  
      elSlideWrap.append( elSlide.at(0) ) : 
      elSlideWrap.prepend( elSlide.at(-1) ) ;

    elSlideLi = elSlideWrap.querySelectorAll('li');
    setTimeout(()=>{ PERMISSION=true; },500);
  }
};

elSlideWrap.prepend( elSlide.at(-1) ) ;
elSlideWrap.prepend( elSlide.at(-2) ) ;
elSlideLi = elSlideWrap.querySelectorAll('li');

// 이벤트
elSlideBtn.addEventListener('click', fnSlideMove);

elSlideWrap.addEventListener('click', (e) => {
  e.preventDefault()
  let el = e.target;
  let selectData;
  if(el.tagName.toLowerCase() === 'button' ){
    let num = el.parentNode.getAttribute('data-num'); // 문자이기 때문에 parseInt 하는거다.
    elModal.classList.add('on');
    elModalClose.focus();

    // 필요한 data 찾아오기
    selectData = dbVideoData.filter((data)=> data.id === parseInt(num) );
    console.log(selectData[0].file);
    let src = `../multi/video/${selectData[0].file}.mp4`;
    elMovie.innerHTML = videoCode(src);
    elModal.classList.add('on');
    elModalClose.focus();
  }
});

// 닫기 버튼 누르면 remove 되게 만들기
elModalClose.addEventListener('click', (e)=> {
  e.preventDefault();
  elModal.classList.remove('on');
});




// (e)=> {
  //let target = (name) => e.target.classList.contains(name);// 이벤트발생시킨.원인제공.class이름.있는가(name) //class name의 유무를 판단하는 contains 
//  e.preventDefault();
//  let target = (name) => e.target.classList.contains(name);
//  if(target('next')){ // '.next' 버튼 클릭시 수행하는 기능
//    console.log('next버튼 클릭시')
//    fnSlideMove2();
//  }else{
//    console.log('prev버튼 클릭시')
//    fnSlideMove();
//  }
  // e.target.classList.contains('next');
// });



// -------------------------------------------------------
// 이벤트 위임 : 실제로 클릭해야하는 요소가 아닌 그 부모에서 클릭했을 경우 해당하는 요소가 반응할 수 있도록 인식
// 버블링 : 부모에 전달, 캡처링 : 자식에게 전달

// let elBtnWrap = elViewBox.querySelector('.slide_btn');
// let elNext = elBtn.querySelector('.next');

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


//const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// x console.log( arr[3] );
// console.log( arr.at(-1) ); // 뒤에서 부터 역순으로 불러온다. 배열에서만 가능한다! 유사배열 안됨 ㄴㄴ