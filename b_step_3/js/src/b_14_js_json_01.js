// b_14_js_json_01.js

var originData = [
  { "id": 1, "title": "Design Engineer", "url": "http://naver.com" }, 
  { "id": 2, "title": "VP Accounting", "url": "http://auda.org.au"}, 
  { "id": 3, "title": "Senior Quality Engineer", "url": "https://theatlantic.com"}, 
  { "id": 4, "title": "Software Test Engineer IV", "url": "https://ycombinator.com"}, 
  { "id": 5, "title": "Senior Cost Accountant", "url": "https://ustream.tv"}, 
  { "id": 6, "title": "Web Developer III", "url": "https://themeforest.net"}, 
  { "id": 7, "title": "Geologist I", "url": "https://unblog.fr"}, 
  { "id": 8, "title": "Account Coordinator", "url": "https://mlb.com"}, 
  { "id": 9, "title": "Quality Control Specialist", "url": "https://4shared.com"}, 
  { "id": 10, "title": "Statistician IV", "url": "https://guard n.co.uk"}
];

// js로 html의 값을 변경하는 방법 = js로 html을 만드는 방법!!!!!!

// originData copy
var textData = JSON.stringify( originData );
var dataList = JSON.parse( textData );

// .navigation을 선택
// document.getElementsByClassName('navigation')[0]; 
// 이미 클래스라는 이름을 선택한다고 선언하였으니 해당하는 이름만 넣어주면 된다. / 복수(s)라서 번호를 꼭 부여해야한다.

var navi = document.querySelector('.navigation'); // 클래스네비게이션을 선택한것 class(.)이거 넣어야한다. / 단수이다.
// navi.style.width = '100%';
// navi.style.height = '50px';
// navi.style.backgroundColor = '#dcd';
navi.style = "width:100%; height:50px; background-color:#dcd" ;

// 생성 > document.creatElement('ul');
// var makeUl = document.createElement('ul'); // innerHTML 방식이 아닌 내부에 추가로 삽입할 때 요소로 삽입처리
// var makeUl2 = '<ul class="list"></ul>'; // innerHTML을 사용시 직접 내용을 작성
// navi.innerHTML = makeUl2;
var makeUl = document.createElement('ul');
makeUl.classList.add('list'); // class이름을 list로 하겠다.
navi.append(makeUl); // .append() : 내용 끝에 콘텐츠를 추가한다.

// ul.list 선택 : querySelector('.list')
// 내부에 담을 li 생성 : createElement('li') 
// li 내부에 유일요소인 a 생성 : createElement('a') > '<a></a>'
// li를 .list에 담기 : (.list).append(li)
// a에 href = 속성처리, text글자 삽입
// console.log( dataList[0].tilte, dataList[0].link );

var UlList = document.querySelector('.list');

// step1 : li 요소 하나만 생성하여 삽입하기

/*
var makeLi = document.createElement('li');
// 0번째 있는 애들부터 넣어줄거야
var title = dataList[0].title;
var link = dataList[0].url;

var makeA = '<a class="link"></a>';
makeLi.innerHTML = makeA;
var findA = makeLi.querySelector('a');
findA.href = link;
findA.innerText = title;
UlList.append(makeLi);
*/

// step2 : li 요소를 ul에 각각 여러개 삽입 // 여러개 생성/삽입 / for(){} 
// var UlList = document.querySelector('.list');

/*
var i = 0;
var len = dataList.length; // 10
var makeLi, makeA,findA, title, link; // es6는 내부가능. 
// for문 안에서는 변수를 할당할수 없기 때문에 밖으로 꺼내준다. 그리고 for문 안에서의 이름은 재 설정해준 이름이라고 생각하면 된다.

for(;i<len;i+=1){
  makeLi = document.createElement('li');
  makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');

  title = dataList[0].title;
  link = dataList[0].url;  
  findA.href = link;
  findA.innerText = title;
  UlList.append(makeLi); // UlList.내부의 뒤에 삽입하겠다(생성된 li)
}
*/

// step3 : .forEach()

/*
dataList.forEach(function(data, index){ // index는 죽었다. 안나옴.
  // console.log( data.title, data.url, index );
  var makeLi = document.createElement('li');
  var makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  findA.href = data.url;
  findA.innerText = data.title;
  UlList.append(makeLi);

});
*/

// for문과 forEach의 차이는 전체를 순환한다는 차이점이 있음
// for는 순서가 중요.
// forEach는 각각의 값 자체를 본다.

// --------------------------------------------------
// 함수화 처리
// forEach
/*
var loopFn1 = function(content){
  var makeLi = document.createElement('li');
  var makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  findA.href = content.url;
  findA.innerText = content.title;
  UlList.append(makeLi);
};

dataList.forEach( loopFn1 );
*/
// --------------------------------------------------
// for문을 함수화 처리

var i = 0;
var len = dataList.length; 

.forEach(function(data){
  var makeLi = document.createElement('li');
  var makeA = '<a class="link">sample text</a>';
  var makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');

  var title = dataList[0].title;
  var link = dataList[0].url;  
  findA.href = link;
  findA.innerText = title;
  UlList.append(makeLi); 
}









// -------------------------------------------

// var li = [];

// for(var i = 0 ; i < 10 ; i++){
//   document.write(i, li);
// }