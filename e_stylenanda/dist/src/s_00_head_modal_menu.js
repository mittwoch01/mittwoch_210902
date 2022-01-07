// s_00_head_modal_menu.js

const headBox = document.querySelector('#headBox');
const headArea = headBox.querySelector('.head_area');
const navArea = headArea.querySelector('.navi_area');
// mobile_Btn
const mobileBtn = navArea.querySelector('.nav_btn > button');

const mobileModal = headArea.querySelector('.navi_inner');
// close_Btn
const closeBtn = mobileModal.querySelector('.close_btn');


// 이벤트 처리
mobileBtn.addEventListener('click', e => {
  e.preventDefault();
  mobileModal.classList.add('on');
}); 

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  mobileModal.classList.remove('on');
});


