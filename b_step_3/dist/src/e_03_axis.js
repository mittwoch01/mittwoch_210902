// e_03_axis.js

/**
 * 마우스를 움직였을 때 해당위치의 좌표를 파악해본다.
 */

const elWrap = document.querySelector('#wrap');
const elBox = document.querySelector('.box');

// 이벤트 -------------------------------------
elBox.addEventListener('mouseenter', (e)=> {
  console.log('clientX', e.clientX );
  console.log('layerX', e.layerX );
  console.log('movementX', e.movementX );
  console.log('offsetX', e.offsetX );
  console.log('pageX', e.pageX );
  console.log('screenX', e.screenX );


  // clientX | y -> 브라우저 기준 
  // layerX | y -> 브라우저 기준 
  // movementX | y
  // offsetX | y
  // pageX | y -> 브라우저 기준
  // screebX | y -> 모니터화면의 좌표 / -로 나오는 이유는 사용자기준 왼쪽 서브모니터에서 찍었기 때문
  // X | y
});