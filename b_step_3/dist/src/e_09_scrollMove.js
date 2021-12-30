// e_09_scrollMove.js

const elheadBox = document.querySelector('#headBox');
const elScrollToBtn = document.querySelector('.scroll_down_btn');

const OPTION_FIX = 'fix';
const WIN_HEIGHT = window.innerHeight;

const offsetCheck = elheadBox.offsetTop;
// console.log( offsetCheck );
// -----------------------------------------------------------------
window.addEventListener('scroll', e=>{
  const target = parseInt(e.currentTarget.scrollY);
  console.log('scroll:'+target, 'offset:'+offsetCheck );
  const headClass = elheadBox.classList;
  //스크롤 값이 현재 오프셋보다 커지면, .fix추가
  (target >= offsetCheck)? headClass.add(OPTION_FIX) : headClass.remove(OPTION_FIX);
});

/**
 * scrollTop : 스크롤의
 * scrollY : 스크롤의 움직임의 위치 값
 * offsetTop : 선택자의 상단에서부터 떨어져있는 위치(스크롤바 기준 0부터)
 */