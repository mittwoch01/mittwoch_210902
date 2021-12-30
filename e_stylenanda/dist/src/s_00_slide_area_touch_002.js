// s_00_slide_area_touch_002.js

// ===========================
/** newBox 시나리오
 * 자동으로 슬라이딩 되는 광고 슬라이드 제작
 */
// ===========================

(()=>{
  // 가본 변수 =================================================
  // const path = "s_00_newBox.html"; // 
  
  const elNewBox = document.querySelector('#newBox');
  
  const elViewArea = docuement.querySelector('.view_area');
  const elViewInnerUl = document.querySelector('.view_inner_wrap');//ul
  
  // 현재의 선택자 li는 복제전 요소
  const elViewLi = elViewInnerUl.querySelectorAll('li');//[li, li, li]
  const elViewCvt = [].slice.call(elViewLi);
  // slice : 기존요소 삭제 또는 '교체'
  
  // 추가설정 변수 ==============================================
  let SLIDE_COUNT = 0; // 슬라이드 위치를 파악하는 변수
  let TIME_OPTION = 500; // 슬라이드 이동시간을 처리하는 변수
  let PERMISSION = true; // 슬라이드 수행에 따른 권한 처리 변수
  const slideLen = elViewLi.length; // 슬라이드 복제전 갯수 파악 변수
  
  // 기능처리 
  const indiPart = elNewBox.querySelector('.indi_list');
  const indiLi = indiPart.querySelectorAll('li');
  
  // 마지막 요소 복제하여 앞에 붙이기(해당 광고 5번째) > li 6개로 변경
  const elViewLast = elViewCvt.at(-1); // li의 마지막 요소를 선택
  const cloneSlide = elViewLast.cloneNode(true); // li의 마지막 요소를 복제(내부요소까지 복제)
  elViewInnerUl.prepend(cloneSlide); // prepend 복제요소를 앞에 추가
  
  // --------------------------------------------------------
  const ulStyle = elViewInnerUl.style;
  const elViewInnerRe = elViewInnerUl.querySelectorAll('li');
  const elViewInnerReCvt = [].slice.call(elViewInnerRe);
  
  // forEach 반복
  elViewInnerRe.forEach( (li)=> {
    li.style.width = 100 / (slideLen + 1) + '%';
  });
  
  elViewArea.style.overflowX = 'hidden'; // ? o
  
  ulStyle.width = ( (slideLen + 1) * 100 ) + '%';
  ulStyle.marginLeft = '-100%';
  ulStyle.transition = `left ${TIME_OPTION}ms linear`;
  ulStyle.position = 'relative';
  ulStyle.left = 0;
  
  // -------------------------------------------------------
  // const fnDelay = async (ms = 0) => {
  //   return await new Promise(resolve=>{
  //     setTimeout( ()=> { resolve() }, ms)
  //   });
  // };
  
  // indicator수행 함수 (수행중)
  const fnIndiRotate = ()=>{
    indiLi.forEach((el, index)=>{
      (index !== SLIDE_COUNT) ? el.classList.remove('on') : el.classList.add('on');
    });
  };
  
  // 다음버튼 클릭시 수행하는 함수
  const fnAniSlide = async () =>{
  if(SLIDE_COUNT >= slideLen){
  SLIDE_COUNT = 0;
  ulStyle.transition = null; //ani 삭제
  ulStyle.left = 100 +'%'; // 복제로이동
  }
  await fnDelay();
  ulStyle.transition = `left ${TIME_OPTION}ms linear`;// ani첨부(있으면 덮어씌우기)
  ulStyle.left = ( -100 * SLIDE_COUNT ) +'%';
  await fnDelay(TIME_OPTION + 200);
  fnIndiRotate();
  fnNowCount();
  PERMISSION = true;
  };
  
  // 일정시간마다 광고슬라이드 이동수행 (다음버튼 클릭과 동일한 기능)
  let slideGo;
    
  const fnSlideMove = ()=> {
    slideGo = setInterval( ()=>{
     
        SLIDE_COUNT += 1;
        fnAniSlide();
     
    }, TIME_OPTION * 6 );
  };
  
  const fnSlidePause = () =>{
    clearInterval(slideGo);
  }
  
  // =================================================================
  // 기본함수 수행
  fnNowCount();
  fnSlideMove(); 
  
  // 다음버튼 클릭
  slideNext.addEventListener('click', (e)=>{
    e.preventDefault();
    if(PERMISSION){
      PERMISSION = false;
      SLIDE_COUNT += 1;
      fnAniSlide();
    }// if
  }); // slideNext.click
  
  // 이전버튼 클릭
  slidePrev.addEventListener('click', (e) => {
    e.preventDefault();
    if(PERMISSION === true){
      PERMISSION = false;
      SLIDE_COUNT -= 1;
      console.log( SLIDE_COUNT );      
      aniPrevSlide();
    }// if
  }); // slidePrev 클릭
  
  // indicator li 클릭
  indiLi.forEach((el, idx)=>{
    el.children[0].addEventListener('click', (e)=>{
      e.preventDefault();
      if(PERMISSION){
        PERMISSION = false;
        SLIDE_COUNT = idx;
        fnIndiRotate();
        fnNowCount();
        ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';
        setTimeout( ()=>{
            PERMISSION = true;
          }, TIME_OPTION+200);
        }
    });
  });
  
  // 광고영역에 마우스 올리면, 광고슬라이드 일시정지
  elViewBox.addEventListener('mouseenter', (e) => { // mouseenter, mouseover
    fnSlidePause();
  });
  // 광고영역에 마우스 벗어나면, 광고슬라이드 다시 재생
  elViewBox.addEventListener('mouseleave', (e)=>{ // mouseleave, mouseout
    fnSlideMove();
  });
  
  // =====================================================
  });