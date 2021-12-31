// e_06_responsive.js

// ==========================
/**
 * header 불러오기
 */

{
  const path = '../temp/'; // 원본의 경로를 지정하는 게 path이기 때문에 수정해준다.
  const headerData = 'rwd_header.html'; 

  const elbody = document.querySelector('body');
  const elHeadBox = document.querySelector('#headBox'); 
  const fnScript = ()=>{
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src','../dist/rwd/rwd_import_nav.js'); // 불러오고 사용할 기능
    elbody.append(mkScript);
  }

  fetch(path+headerData) // data 불러오는 기능 fetch / path + headerData : '../temp/rwd_header.html';
    .then( response => response.text() )
    .then( (element) =>{
      elHeadBox.innerHTML = element;
    })
    .then(()=>{
      fnScript();
    })
}