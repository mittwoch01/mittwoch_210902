// s_00_slide_area_touch.js

// s_00_slide_area_touch.js

// s_00_stylenanda_main.html 문서에 
// #newBox 영역 담기
// ------------------------------------------------
// 불러올 data

(()=>{
  // 외부 파일 설정
  const newBox = `/temp/s_00_newBox.html`;
  const scriptData = `/dist/src/s_00_slide_area_touch_002.js`;
  

  // 선택요소
  // const body = document.querySelector('body');
  // const elWrap = document.querySelector('#wrap');
  const elnewBox = document.querySelector('#newBox');


  // 코드삽입함수
  const fnMakeEl = (selectEl, insertEl)=>{
    selectEl.innerHTML = insertEl;
    elWrap.append(selectEl);
  };

  const fnScript = (codeUrl)=>{
    const script = document.createElement('script');
    script.src = codeUrl; //
    body.append(script);
  };

  // -------------------------------------------------
  fetch(newBox)
  .then( response => response.text() )
  .then(()=>{  
    fetch(viewBox)
      .then(response => response.text())
      .then(textElement => {
        fnMakeEl(elnewBox, textElement);
        fnScript(scriptData);
      });

  });


});