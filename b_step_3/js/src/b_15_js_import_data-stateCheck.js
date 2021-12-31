// b_15_js_import_data-stateCheck.js

// 외부 문서를 불러오기
// 생성자 함수, 생성자 함수를 사용하기 위해선 new를 붙인다.
// 1. 생성자 함수인 XMLHttpRequest(); 를 불러오기
// 2. 불러온 함수를 객체화 var http = ///// < 여기
// 3. 객체 내부의 메소드
// ------------------------------------------------------
// 예외처리 : try{} catch(){} finaly{}
//  4. 상태 메세지 처리 : 연결상태가 어떠한 상태인지 체크 onreadystatechange
// ------------------------------------------------------
// 5. 문서를 찾아 열어주기 : http.open(method(처리방식),url(연동주소),async(비동기처리허용유무))
                                                               // ^ 기본적으로 true로 되어있음.
// 6. 문서 처리 : http.send()
// ------------------------------------------------------
/*
var linkFn = function(url,method, async){
  var http = new XMLHttpRequest();
  var stateMessage;

  http.onreadystatechange = function(){
    console.log( http.status);
    switch (http.readyState){
      case XMLHttpRequest.UNSENT:// 0
        stateMessage = '서버와의 데이터 연결 끊어짐'
        break;
      case XMLHttpRequest.OPENED :// 1
        stateMessage = '서버연결'
        break;
      case XMLHttpRequest.HEADERS_RECEIVED :// 2
        stateMessage = '서버 접근중, 파일검색중'
        break;
      case XMLHttpRequest.LOADING :// 3
        stateMessage = '데이터 불러오는 중'
        break; 
      case XMLHttpRequest.DONE :// 4
        stateMessage = '서버와 연결 대기중'
        break;
    }
    if(http.readyState === 4 && http.status < 300){
      console.log('서버가 이상없이 연결되었음');
    }
    // console.log( stateMessage );
  } 


  var method = method || "GET"; // 앞의 자료가 undefinded면 뒤의 값으로 대체한다.
  var url = url;
  var async = async || true; 

  http.open(method, url, async);
  http.send();
}
// ----------------------------------------------
var method = "GET"; 
var url = '../data/person_card.json';
var async = true; 

linkFn(url);
*/

// set ---------------------------------------------
/*
var xhr = new XMLHttpRequest();
// console.log( xhr.onreadystatechange ); // 준비 상태의 변화를 감지 - readyState의 변화를 인식하는 장치
// console.log( xhr.readyState ); // 준비된 상태 - 변하는 것
xhr.open('GET', '../data/person_card.json', true) // 신청
xhr.send();

setTimeout(function(){
  console.log( xhr.onreadystatechange );
  console.log( xhr.readyState );
  console.log( xhr );
}, 100);
*/
// -----------------------------------------------
// fetch('../data/person_card.json').then( function(data){
//   console.log( data.json() );
// })

var xhr = new XMLHttpRequest();
xhr.open('GET', '../data/person_card.json', true);
xhr.send();
// console.log( xhr.responseText ); 안나옴



 setTimeout(function(){
   var data = JSON.parse(xhr.responseText);
   var dataList = [];
   var SetFn = function(title, url){
     this.title = title;
     this.url = url;
   };

   data.forEach(function(value , index){
     var title = value.title;
     var url = value.url;
     var obj = new SetFn(title, url);
     dataList.push(obj);
   });

   console.log( dataList[0].title );
   console.log( data );

 },1000);







// setTimeout(function(){
//   // console.log( stateMessage );
//   // console.log( http );
//   // console.log( http.status);
//   // console.log(http.responseText);
// }, 100);

