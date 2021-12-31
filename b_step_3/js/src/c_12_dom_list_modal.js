// c_12_dom_list_modal.js



// 시나리오
// 1. 해당하는 li를 여러개 생성

// data
var data = [
  {title:'title_01', content:"lorem text _ 01" , dataLink:'data_01.json'},
  {title:'title_02', content:"lorem text _ 02" , dataLink:'data_02.json'},
  {title:'title_03', content:"lorem text _ 03" , dataLink:'data_03.json'},
  {title:'title_04', content:"lorem text _ 04" , dataLink:'data_04.json'},
  {title:'title_05', content:"lorem text _ 05" , dataLink:'data_05.json'},
  {title:'title_06', content:"lorem text _ 06" , dataLink:'data_06.json'},
  {title:'title_07', content:"lorem text _ 07" , dataLink:'data_07.json'},
  {title:'title_08', content:"lorem text _ 08" , dataLink:'data_08.json'},
  {title:'title_09', content:"lorem text _ 09" , dataLink:'data_09.json'},
  {title:'title_10', content:"lorem text _ 010", dataLink:'data_010.json'},
];


// 변수가 필요하디.
var elConBox = document.querySelector('#contentBox');
var elCardPart  = elConBox.querySelector('.card_part');

var i = 0;
var dataLen = data.length;

// 기능
// 요소생성방법1 (element)
// -------------------------
// var mkLi = document.createElement('li');
// mkLi.innerHTML = '<a href="#">li 내용을 복사해서 사용해 봅시다</a>';
// 요소생성방법2 (text)
// ------------(ㅣㅣ)-------------
// var elLiOrigin = '<li><a href="#">li 내용을 복사해서 사용해 봅시다</a></li>';
// ------------(ㅣㅣ)-------------
// 요소생성방법3 (기존 html문서에서 copy)
var elLiOrigin = elCardPart.children[0]; // 위 요소 상태 그대로 가져오기
elLiOrigin.remove(); // 기존(원본)값 삭제


// 모달요소 기본가져오고 기존값 제거 위와 동일 방법
var elModal = elConBox.querySelector('.card_modal');
elModal.remove();
var elCardModal;
// 함수수행 ======================================================
var fnMakeCard = function(n){
  var cloneEl = elLiOrigin.cloneNode( elLiOrigin ); // 기존 data 복제(복제기능을 반복)

  cloneEl.children[0].innerText = data[n].content;
  cloneEl.children[0].title = data[n].title;
  cloneEl.children[0].setAttribute('data-link', data[n].dataLink);

  elCardPart.append( cloneEl ); // 복제요소를 첨부
}; // fnMakeCard()

var fnRemoveModal = function(e){
  e.preventDefault();
  elCardModal.remove();
}

// li 클릭시 수행 함수
var fnClickLi = function(e){
  e.preventDefault();
    // var dataLink = this.getAttribute('data-link');
    
    // 클릭 시 수행하는 기능
    // 1. .card_modal을 생성
    // 2. .card_modal이 나타나야 한다(.on)
    // 3. .card_modal내부의 닫기 버튼을 클릭시 사라지고 삭제
    // =================================================
    elConBox.append(elModal);
    elCardModal = elConBox.querySelector('.card_modal');
    var elCloseBtn = elCardModal.querySelector('button');
    elCardModal.classList.add('on');
    elCloseBtn.addEventListener('click', fnRemoveModal);
    // =================================================
  
};

// 함수 기본 수행 (for문으로 처리) ======================================================
// var i = 0;
for(;i < dataLen; i++){
  fnMakeCard(i);
}


// 추가변수
var elLi = elCardPart.querySelectorAll('li > a');


// 이벤트
elLi.forEach(function(element, index){
  element.addEventListener( 'click', fnClickLi );    
});
