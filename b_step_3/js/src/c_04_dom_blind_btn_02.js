// c_04_dom_blind_btn_02.js

// javascript를 이용하여, 
// 버튼 클릭시 높이 값이 0이 되도록 처리
// 높이가 0이면, display:none;

// ------------------------------------------------
var jsBtn = document.querySelector('.btn');
var jsCloseBtn = jsBtn.querySelector('.close');
var jsOpenBtn = jsBtn.querySelector('.open');
var jsOpenBtn2 = jsBtn.querySelector('.open2');
var jstoggleBtn = jsOpenBtn2;
var jsContentArea = document.querySelector('.content_area');
// ------------------------------------------------
var conH = getComputedStyle(jsContentArea).height;
var conHResult = parseInt(conH);
var timed = 500;
var slideH;
var permission = true;
// 처음부터 보이지 않게 하기 위한 처리(css에서 값을 가져오지 못하기에, js를 통해 값을 가져와서 파악 후 display처리)
// jsContentArea.style.display = 'none';

// function 1 : 슬라이드 기능으로 사라지는 기능 ---------------------------------------
var slideUpFn = function(height){
  var jsDisplayState = getComputedStyle(jsContentArea).display === 'block'; //상태체크
  if(permission && jsDisplayState){
    permission = false;
    var setH = height;
  // console.log( setH );
  slideH = setInterval(function(){
    setH -= 1;
    if(setH >= 0) {
      jsContentArea.style.height = setH + 'px';
    }else{
      clearInterval(slideH);
      jsContentArea.style = null;
      jsContentArea.style.display = 'none';
      permission = true;
    }
  }, timed/1000);
  }
};

// function 2 : 슬라이드 기능으로 나타나는 기능 ----------------------------------------
// method 안에는 반드시 function(){} 이 들어가줘야 이놈들이 수행한다.
// setInterval
// clearInterval
// setTimeout

// 함수샘플 : setInterval / setTimeout 슬라이드 기능으로 나타나는 기능 테스트 ------------------------
var countFn = function(n){
    // setTimeout : 일정시간 뒤에 한번만 수행
    // setInterval : 일정시간마다 수행 - clearInterval : 끊어내기 ( 바늘과 실)
    var red, green, blue;
    setTimeout( function(){
      red = (Math.floor(Math.random() * 256)).toString(16);
      green = (Math.floor(Math.random() * 256)).toString(16);
      blue = (Math.floor(Math.random() * 256)).toString(16);
  
      if( red.length   !== 2)  { red   = '0' + red;   }
      if( green.length !== 2)  { green = '0' + green; }
      if( blue.length  !== 2) { blue   = '0' + blue;  }
      console.log( red+green+blue );  
      var randomColor = '#'+red+green+blue;
  
      // var ram = Math.floor( Math.random()*12 )
      // console.log( arr[ram] );
      jsContentArea.style.backgroundColor = randomColor;
    },500);
  };

    //var ram = Math.floor( Math.random()*12 )
    // console.log( arr[ram] );

    // setInterval(function(){
    //   console.log( n += 1)
    // }, timed);

// function 2 : open 버튼 클릭시 사라진 내용을 나타나게 만들기 ------------------------
// jsContentArea 상태가 'none'일 때, 'block'으로 처리한다.
// 동시에 기본 높이 값을 확인한 후(conH, conHResult에서 이미 파악 완료) > 높이 0 부터 기본 높이까지 1씩 추가해서 수행하게 한다.
// 필요한 높이만큼 수행되었다면, 더 이상 처리 할 내용이 없으니, style 기능을 제거 (null)
// 단, 기능이 수행되는 중간에 다른 기능을 첨부하지 못하게 제어( permission )

var slideDownFn = function(baseHeight){
  var originH = baseHeight;
  var setH = 0;
  var jsDisplayState = getComputedStyle(jsContentArea).display === 'none'; //상태체크
  if(permission && jsDisplayState){
    permission = false;
    jsContentArea.style.display = 'block';
    jsContentArea.style.height = setH; 

    slideH = setInterval(function(){
      if(setH < originH){
        setH += 1;
        jsContentArea.style.height = setH + 'px'; 
        console.log('높이값변경중:', setH);
      }else{
        // jsContentArea.style = null;
        permission = true;
        console.log('높이값 처리 완료');
        clearInterval(slideH);        
      }
    }, timed/1000); 
  } 
}; // slideDownFn(baseHeight)

// opacity:0; display:none;
// display:block; opacity:100%:

jsContentArea.classList.add('on');

// jstoggleBtn 클릭 이벤트 : jsOpenBtn 기능과 jsCloseBtn 기증을 모두 처리
jstoggleBtn.addEventListener('click', function(event){
  event.preventDefault();
  /*
  var onState = jsContentArea.classList.contains('on');
  if(onState) {
    // console.log('현재 내용이 보이는 상태입니다.');
    slideUpFn(conHResult);
    jsContentArea.classList.remove('on');
  } else {
    // console.log('현재 내용이 보이지 않습니다.');
    slideDownFn(conHResult);
    jsContentArea.classList.add('on');
  }
  */
  var viewState = getComputedStyle(jsContentArea).display === 'block';
  (viewState) ? slideUpFn(conHResult) : slideDownFn(conHResult) ;
});



// jsCloseBtn click event -------------------------------------------
jsCloseBtn.addEventListener('click', function(e){
  e.preventDefault();
  slideUpFn(conHResult);
});

// jsOpenBtn click event
jsOpenBtn.addEventListener('click', function(e){
  e.preventDefault();
  // countFn(0);
  slideDownFn(conHResult);
});