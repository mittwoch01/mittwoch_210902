// d_12_rwd.js

// @media 화면타입 and (max-width:768px){}

const elMobile = document.querySelector('.mobile');
const elPc = document.querySelector('.pc');
// elMobile.style.display = 'none';
// elPc.style.display = 'none';

// ---------------------------------------
const tab = 768; // 768을 기준으로 놓고 볼때 / 모든브라우저 사용가능
const tabDevice = '(max-width:768px)'; // 최대 가로크기를 768로 지정한다. / 구형브라우저 적용안됨

let winWidth = window.innerWidth; // 브라우저의 가로크기 변수지정
console.log( winWidth );

const fnRwd = (deviceType)=>{
  if(deviceType < tab){ // dT가 tab보다 작을 떄,
    elMobile.style.display = 'block'; // 모바일 스타일이 보여진다.
    elPc.style.display = 'none'; // pc는 안보여진다.
  }else{ // 또는 (deviceType > tab )
    elMobile.style.display = 'none'; // 모바일 스타일이 안보여진다.
    elPc.style.display = 'block'; // pc크기니까 보여진다.
  }
};
fnRwd(winWidth);
// 여기까지만 하면 새로고침을 해야 크기가 바뀐 것을 인식하고 바뀐다.

window.addEventListener('resize' , e =>{ // 브라우저의 크기를 변화시켰을 때, 
  const winReWidth = window.innerWidth; // 새로운 가로크기를 '다시(Re)'파악해야합니다.
  console.log( winReWidth); 
  fnRwd(winReWidth); // 데이터(다시파악된 가로크기)만 바뀔 뿐 위의 함수를 그대로 실행하게끔 한다.
});