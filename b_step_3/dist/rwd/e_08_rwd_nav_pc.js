// e_08_rwd_nav_pc.js

// 1. navBox 내부의 gnb제목에 마우스를 올릴경우
// 2. 서브 내용이 각각 처리되게 만들기
// 3. gnb 자식이 li를 벗어나면
// 4. 사라지게 만들기

// ---------------------------------------

// 변수
const elNavBox = document.querySelector('#navBox');
const elGnb = elNavBox.querySelector('.gnb');
const elGnbLi = elGnb.children;
const elGnbLiArr = [...elGnbLi];
console.log(elGnbLiArr);

const OPTION_NAME = 'on';


// 이벤트 
elGnbLiArr.forEach((el,idx)=>{
  elGnb.addEventListener('mouseenter', (e) => {
    // console.log(e.target.tagName); // 마우스를 올리면 어떤 요소인지 나타남
    const elTarget = e.target;
    elTarget.classList.add(OPTION_NAME);
  });

  elGnb.addEventListener('mouseleave', (e) => {
    const elTarget = e.target;
    elTarget.classList.remove(OPTION_NAME);
  });

  const elLink = el.querySelector('.gnb_title').children[0];
  elLink.addEventListener('focus', (e)=>{
    const elTarget = e.target.parentNode.parentNode;
m
    for(let i=0; i<elGnbLiArr.length; i++){
      if(i !== idx){
        elGnbLiArr[i].classList.remove(OPTION_NAME);
      }else{
        elGnbLiArr[i].classList.add(OPTION_NAME);
      }
    }
  });
  // .sub_list의 마지막 요소의 a에 focusout 또는 blur 처리시 li에 on제거
});

