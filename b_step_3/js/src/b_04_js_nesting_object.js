// b_04_js_nesting_object.js

var arr = []; // 참조변수 : 원본에 대한 주소를 담는다.
var ck = (arr.constructor === Array) ? 'array' : 'other' ;
console.log(typeof arr, ck);

arr = ['과일', '고기', '깐풍기', '회', '냉면'];
console.log(arr[2]);

var arr2 = ['포도', '사과', '배', '감', '귤', '자몽'];
var arr3 = ['냉면', '라면', '우동', '회냉면', '쫄면', '밀면', '야끼우동', '국수'];

var arrList = [arr, arr2,'회', arr3];
/* 
[
  ['과일', '고기', '깐풍기', '회', '냉면'], 
  ['포도', '사과', '배', '감', '귤', '자몽'],
  ['냉면', '라면', '우동', '회냉면', '쫄면', '밀면', '야끼우동', '국수']
] 
*/ // 이중배열
var arZ = arrList[0];
var mySelect = arZ[2]; // arrList[0][2];

// console.log(mySelect); 
console.log(arrList[2], arrList[0][3]); // 회 찾기
console.log(arrList[0][4], arrList[3][0]); // 냉면 찾기

var phone = '010-5548-7869';
var addr = '서울시 영등포구 여의도동 kbs홀 본관 402호';
var myArr = phone.split('-'); //split : 분열시키다. 나누다.
var myAddr = addr.split(' ');
console.log(myArr.join('.'), myAddr); // join : 잇다. 합쳐지다.
// console.log(myAddr);

console.clear();

var obj = {}; // 중괄호
var objCk = (obj.constructor === Object) ? '객체' : 'other'; // constructor : 제공자
console.log(typeof obj, objCk);

var objOrigin = new Object(); // 원형의 형태를 복제한다는 의미 : new
console.log(objOrigin);

obj = { meat : "채끝살" , fruit : "샤인머스켓", noodle : "쫄면" }; // 객체는 오

console.log(obj.fruit);
console.log(obj["mobile"]);

var obj2 = { 
  web: "frontEnd", 
  myObj : obj 
};

/*
{
  "web" : "frontEnd",
  "myObj" : { meat : "채끝살", fruit : "머루포도", 국수 : "쫄면", mobile phone : "samsung"}
}
*/
console.log(obj2.myObj.meat);
// ------------------------------- 배열안에 객체 객체 안에 배열 가능
console.clear();

var drink = [ 
  { coffee : ["esspress", "americano", "latte" , "matcha", "choco latte"] },
  { alcole : ["맥주", "소주", "막걸리" , "청주", "데낄라"] },
  { juice : ["오렌지", "포도", "자몽" , "망고"] },
  { tea : ["black first", "green", "red" , "lemon", "elgrey", "papermint"] }, 
  { ade : ["자몽", "키위", "레몬"] }
]; 

console.log(drink[3].tea[5]);

// ==============================================

var data = {};

var mySet = {
  name : function(d){
    return data.user = d;
  },
  old : function(d){
    return data.old = d;
  },
  gender : function(d){
    return data.gender = d;
  }
};

console.log(data);

mySet.name('op');
console.log(data);

mySet.old(25);
console.log(data);

mySet.gender('female');
console.log(data);

// 반복수행(임의변수(property) 안에 객체명) 객체(data)내부에 있는 property
for (sam in data) {
  console.log(sam + ':' + data);
}

var js = 'javascript';
var jsArr = js.split('').reverse().join(''); // 글씨 사이에 띄고 리버스하고 합치기
console.log(jsArr);
