// d_12_rwd_matchMedia.js

// matchMedia를 이용하여 해당규격에 일치하는지(matches) 판단
// window.matchMedia('css크기를 그대로 옮겨놓은 형태').matches

const wrap = document.querySelector('#wrap');
const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
mobile.remove();
pc.remove();

// 
// const size = 'screen and (max-width:678px)';
// 
// const mediaQuery = window.matchMedia(size);// @media screen = matchMedia(es6가 아님)
// // console.log( mediaQuery.matches );
// 
// // 지정규격과 체크해서 맞으면 true 아니면 false
// const fnCKMedia = ()=>{
//   if(mediaQuery.matches){
//     console.log('768보다 작은 크기');
//     wrap.append(mobile);
//     pc.remove();
//   }else{
//     console.log('768보다 큰 크기');
//     wrap.append(pc);
//     mobile.remove();
//   }
// };
// fnCKMedia();

//----------------------------------
// 사이즈만 변경하는데도 인식을 한다고?

// mediaQuery.addEventListener('change',(e)=>{ // 지정한 mediaQuery 기준으로 값이 변하면 변수 fnCKMedia에 따라 출력값이 바뀐다.
//   fnCKMedia();
// });

// window.addEventListener('change',(e)=>{ // window는 firefox chrome etc.. 이런거
//   fnCKMedia();
// });
// 이전버전에서느 무조건 브라우저의 크기가 변화할때마다(resize) 매번 확인해서 그 규격에 맞게 설정

const dataDevice = [ // 두개가 넘어갈경우 곤란해진다. 그래서 배열로 이름을 지정해서 사용해준다?
  { type : 'mobile', size : 320 }, // 320 미만
  { type : 'tablet', size : 768 }, // 320 - 768
  { type : 'laptop', size : 1024}, // 769 - 1023
  { type : 'pc', size : 1440 } // 1024 -
];

// 규격 하나씩 작성
// const mobile = window.matchMedia('screen and (max-width:320px)');
// const tablet = window.matchMedia('screen and (min-width:321px) and (max-width:767px)');
// const laptop = window.matchMedia('screen and (min-width:768px) and (max-width:1023px');
// const pc = window.matchMedia('screen and (min-width:1024px)');

// 규격을 조금 더 확장 가능하도록 처리
const mediaArray = [];
for(let i=0; i<dataDevice.length; i+=1){
  let matchCode;
  if(i === 0){
    matchCode = window.matchMedia(`screen and (max-width:${dataDevice[i].size}px)`);
  }else if( i === dataDevice.length - 1){
    matchCode = window.matchMedia(`screen and (min-width:${dataDevice[i-1].size + 1}px)`);
  }else{
    matchCode = window.matchMedia(`screen and (min-width:${dataDevice[i-1].size + 1}px) and (max-width:${dataDevice[i].size}px)`);
  }
  mediaArray.push(matchCode);
}

console.log( mediaArray );

// const mobile = window.matchMedia('screen and (max-width:320px)');
// const tablet = window.matchMedia('screen and (min-width:321px) and (max-width:767px)');
// const laptop = window.matchMedia('screen and (min-width:768px) and (max-width:1023px');
// const pc = window.matchMedia('screen and (min-width:1024px)');

// const mediaArray = [mobile, tablet, laptop, pc];

// mobile.addEventListener('change',(e)=>{
//   if(e.matches) {console.log('현재 mobile 규격에서 무언가 변화했습니다.');}
// });
// tablet.addEventListener('change',(e)=>{
//   if(e.matches) {console.log('현재 tablet 규격에서 무언가 변화했습니다.');}
// });
// laptop.addEventListener('change',(e)=>{
//   if(e.matches) {console.log('현재 laptop 규격에서 무언가 변화했습니다.');}
// });
// pc.addEventListener('change',(e)=>{
//   if(e.matches) {console.log('현재 pc 규격에서 무언가 변화했습니다.');}
// });

const fnInsertCode = (type)=>{
  switch(type){
    case 'mobile':
    case 'tablet':
    wrap.append(mobile);
    pc.remove();
    break;
    case 'laptop':
    case 'pc':
    wrap.append(pc);
    mobile.remove();
    break;
  }
}

// 디바이스 환경 체크하기
const fnCKDevice = (device, index)=> {
  if(device.matches){
    let type = dataDevice[index].type;
    fnInsertCode(type);
  }

}

// 변경전 확인하기
mediaArray.forEach((type,index) => { 
  // if(e.matches){ console.log(dataDevice[index].type)}
  fnCKDevice(type, index);
});

// 변경하면서 확인하기
mediaArray.forEach((type,index) => { // mediaArray 배열에 있는 타입과 색인
  type.addEventListener('change', (e)=>{ // 내가 가로 크기를 바꿀 떄 마다
    fnCKDevice[index].type }) // if(만약) 실행했을 때 스크린을 실행 했을 떄 dataDevice에 있는 색인과 타입들이 바뀜 > 콘솔로그에서 보여줌
});
