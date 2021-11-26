// c_04_dom_blind_btn_02.js

// javascript를 이용하여, 
// 버튼 클릭시 높이 값이 0이 되도록 처리
// 높이가 0이면, display:none;

// ------------------------------------------------
var jsBtn = document.querySelector('.btn');
var jsCloseBtn = jsBtn.querySelector('.close');
var jsOpenBtn = jsBtn.querySelector('.open');
var jsOpenBtn2 = jsBtn.querySelector('.open2');
var jsContentArea = document.querySelector('.content_area');
// ------------------------------------------------
var conH = getComputedStyle(jsContentArea).height;
var conHResult = parseInt(conH);
var timed = 500;
// function ---------------------------------------
var slideUpFn = function(height){
  var setH = height;
  slideH = setInterval(function(){
    setH -= 1
    if(setH >= 0) {
      jsContentArea.style.height = setH + 'px' 
    } else { 
      clearInterval(slideH);
      jsContentArea.style.display = 'none';
    }
  }, timed / 100);
};

// jsCloseBtn click event
jsCloseBtn.addEventListener('click', function(e){
  e.preventDefault();

  slideUpFn(conHResult);
});