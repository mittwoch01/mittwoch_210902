// s_00_newBox_language_modal.js

const langNewBox = document.querySelector('#newBox');
const langIndi = newBox.querySelector('.indicator');
const langList = langIndi.querySelector('.mob_list');
const langModalArea = langIndi.querySelector('.mob_language_modal_area');

// open btn 
const langLi = langList.querySelector('.mob_button > .five');

const langModal = langIndi.querySelector('.mob_language_inner');

// close btn
// const langCloseBtn = langModal.querySelector('.langCloseBtn');

// 이벤트 처리
langLi.addEventListener('click', e => {
  e.preventDefault();
  langModalArea.classList.add('on');
});

// 삼항연산자(true, false)를 이용해서
// 변수설정 contains 해놓은 다음 
// classList contains(string) 

// 이벤트 처리 다른 방법
