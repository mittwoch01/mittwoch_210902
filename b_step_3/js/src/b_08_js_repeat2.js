// b_08_js_repeat2.js

// for(in){} ---------------------------------

// for( 임의 변수 in {객체}){} 

/*
var arr = ['딸기', '바나나', '키위', '수박', '포도'];
for(var sam in arr){
  console.log(arr[sam]);
}
*/
var obj = {
  '딸기'  : 'red',
  '바나나' : 'yellow',
  '키위'  : 'brown',
  '수박'  : 'green',
  '포도'  : 'purple'
};
for (var sample in obj){
  console.log(sample + ':' + obj[sample]);
}
console.log(sample);

// for:범용처리 단 객체는 불가능, for-in: 객체를 순환하기 위해 사용하는

// forEach ----------------------------------------
// 배열.forEach()

var arr = ['딸기', '바나나', '키위', '수박', '포도'];
/*
var i = 0;
var arrLen = arr.length; // length: 갯수
for(;i<arrLen;i+=1){
  console.log(arr[i]);
}
*/

arr.forEach( function(data, index){ // forEach는 들어오는 인자의 첫번째는 값, 두번째는 순서 (그게뭐든)
  console.log( index, data); // index:순서, data:값
} );

var ul = document.querySelector('ul');
var li = ul.children;

console.log(arr); // 진짜 배열
console.log(li); // 유사 배열 (짭 배열) -> 재배치를 해줘야 함

// for은 기본 문법, forEach() 매서드





// 이벤트 메소드의 특징
// 선택자.이벤트(기능,function(){})