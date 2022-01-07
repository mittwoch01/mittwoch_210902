// s_00_newBox_search_modal.js

const newBox = document.querySelector('#newBox');
const indi = newBox.querySelector('.indicator');
const mobList = indi.querySelector('.mob_list');
const modalArea = indi.querySelector('.mob_search_modal_area');
// open btn
const searchBtn = mobList.querySelector('.mob_button > li')[1];

const searchModal = modalArea.querySelector('.mob_inner');
// closeBtn
const closeBtn = searchModal.querySelector('.search_close_btn');

// 이벤트 처리
searchBtn.addEventListener('click', e => {
  e.preventDefault();
  searchModal.classList.add('on');
});

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  searchModal.classList.add('remove');
});
