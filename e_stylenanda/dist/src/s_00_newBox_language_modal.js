// s_00_newBox_language_modal.js

const langNewBox = document.querySelector('#newBox');
const langIndi = newBox.querySelector('.indicator');
const langList = langIndi.querySelector('.mob_list');
const langModalArea = langIndi.querySelector('.mob_language_modal_area');

// open btn 
const langLi = langList.querySelector('.mob_button > .five');

const langModal = langIndi.querySelector('.mob_language_inner');

// close btn
const langCloseBtn = langModal.querySelector('.langCloseBtn');

// 이벤트 처리
langLi.addEventListener('click', e => {
  e.preventDefault();
  langModalArea.classList.add('on');
});

langCloseBtn.addEventListener('click', e =>  {
  e.preventDefault();
  langModalArea.classList.remove('on');
});

// 이벤트 처리 다른 방법
