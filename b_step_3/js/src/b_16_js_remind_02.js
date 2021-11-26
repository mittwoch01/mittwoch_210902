// b_16_js_remind_02.js

var i;
var arr;
var arr2;

// 일반변수, 참조변수

// 일반변수는 값 그 자체를 가리키는 것
var i = 0;
var n = i;
    i = 10;
    n = i;
    i = 'text';
console.log( i, n );

// 참조변수는 값이 아닌 주소를 가리키는 것 - [],{}
arr = ['하나', '둘'];
arr2 = arr;
      arr[0] = '셋';
      arr[1] = '넷';
console.log( arr.arr2 );

// 위와 동일한 참조변수 인것 같지만,
// 실제로는 새로운 참조변수를 생성한다.
arrOrigin = [1,2,3];
arrClone = arrOrigin;
    arrOrigin = ['하나','둘','셋'];
console.log( arrOrigin, arrClone);
// -----------------------------------

// Hoist현상은,
// 1. 변수 이름이 상단으로 올라가서 존재하는 것처럼 처리
// 2. 기명함수(함수선언식)으로 된 것은 변수선언보다 우선순위로 끌러올려지는 처리

function fnTest(data){
  return data.reduce(function(a,b){
    return a + b;
  });
};
console.log( fnTest(arrClone));
// -------------------------------------------

console.clear();

var arrNumber = [90,5,30,60,450,250,3,60,8];
// 문제1 : 위 배열에 들어가는 값중 가장 작은 수를 구하는 방법 2가지 이상을 찾아내시오. : 최솟값 3
// 문제2 : 위 배열에 들어가는 값중 가장 큰 수를 구하는 방법 2가지 이상을 찾아내시오. : 최댓값 450
// 문제3 : 위 배열에 들어가는 값 대신 정수형의 1-3자리까지 랜덤 숫자 10개를 담아 문제 1번의 값처럼 도출 : Math.random()

// 1-max. var maxNumber = Math.max.apply(null, arrNumber);
// 1-min. var minNumber = Math.min.apply(null, arrNumber);

// 2-max. var maxNumber = Math.min(90,5,30,60,450,250,3,60,8);
// 2-min. var minNumber = Math.max(90,5,30,60,450,250,3,60,8);

// var arrNumber = [90,5,30,60,450,250,3,60,8];
// function minNum(arrNumber){
//   var min = arrNumber[0];
//   for(var i = 0; i < arrNumber.length ; i++){
//     if(arrNumber[i] < min){
//       min = arrNumber[i]
//     }
//   } return min;
// }
// 
// minNum(arrNumber);

// ---------------min(최솟값 구하기)------------------------
// 1-1. Array.prototype.min();
// Array.prototype.call(null , 1,2,3,4,5),
// Array.prototype.apply(null,[1,2,3,4,5]) // null : 비어있는값을 넣고 적용하겠다.
var minResult = Math.min[(1,2,10)]; 
// console.log( minResult );

// 1-2. sort는 완전한 정렬은 아니다. 그래서 좀 뭘좀 만들어줘야 한다. 목록을 순서대로 정렬해서 맨 앞의 값을 가지고 오기.
// var arrR2 = [1,45,88,7,3,2,2222,4678].sort(function(a,b){
//   return a - b;
// });
// console.log( arrR2 );
var arrNumber2 = [90,5,30,60,450,250,3,60,8];
var sortMin = arrNumber2.sort(function(a,b){ return a - b; });
console.log( sortMin[0] );





// ---------------max(최댓값 구하기)------------------------
// 2-1. Array.prototype.max();
// Array.prototype.call(null , 1,2,3,4,5),
// Array.prototype.apply(null,[1,2,3,4,5]) // null : 비어있는값을 넣고 적용하겠다.
var maxResult = Math.max[(1,2,10)]; 
// console.log( maxResult );

// 2-2. 참조변수라 깊은복사(가져다가 다시써야함. arr2처럼)하고 사용하는걸 권장. [].sort();
var arrNumber3 = [90,5,30,60,450,250,3,60,8];
var sortMax = arrNumber3.sort(function(a,b){ return b - a; });

console.log( sortMax[0] );

var last = sortMin.length - 1;
    console.log( sortMin[last] );



// --------------random----------------------------

var arrRan = [];
var random; // = Math.floor(Math.random() * 1000);
var i=0;
for(;i<10;i++){
  random = Math.floor(Math.random() * 1000);
  arrRan.push( random );
}

// console.log(minNumber);
// console.log(maxNumber);


// ------------------------------------

// 2 * 1 = 2;
// 2 * 2 = 4;
//
//
//
// 9 * 9 = 81;
console.clear();


/*
for(i=2; i<10; i++){
  // console.log('-i:', i );
  for(n=1; n<10; n++){
    // console.log('n:', n );
    console.log(i + 'x' + n + '=' + (i*n) );
  }
}
*/


// for(i=2; i<10; i++){
//   console.log( i+ '단 -----------');
//   loop1(i);
// }
// -----------------------------------------------

// var a = 500;
// 500 > 250 0.1초 마다 1씩 빠지는 숫자를 카운팅 하세요.(광고 만들때 사용!!)

// 1. 0.1초 100
// 주기적인 실행을 위한 메소드
// setInterval : 일정시간마다 처리
// clearInterval : setInterval을 강제로 끊어내기
// setTimeout : 정해진 시간 뒤에 수행 1회성

var startNum = 500;
var timed = 10;
var endNum = 250;

var intervalFn;
// --------------------
var btn = document.querySelector('.btn');
var pSpan = document.querySelector('p>span');
pSpan.innerText = 'text작성';
var goCheck = true;
//---------------------

/*
var countFn =function(start){
  if(goCheck){
    goCheck = false;

    intervalFn = setInterval(function(){    // 함수안에 함수를 호출한다 = 콜백함수.
      pSpan.innerText = start;
      start -= 1;
      if(start <= endNum){
        pSpan.innerText = endNum + '처리 완';
        clearInterval(intervalFn);
        goCheck = true;
      }
    }, timed);
  }
};


btn.addEventListener('click', function(e){
  e.preventDefault();
  countFn(startNum);
});
*/
//----------------------------------
var intervalCountFn = function(startNum){ // interval : 일정한 시간마다.
  var countNum = startNum; // startNum : 500 = countNum
    setTimeout(function(){ 
      pSpan.innerText = countNum; // do text in (var)pSpan
      countNum -= 1; // countNum - 1
      if(countNum >= endNum){ //if countNum were taller than endNum
        intervalCountFn(countNum);
      }else{ // else if endNum were taller than countNum 
        pSpan.innerText = countNum + '숫자 달성';
        goCheck = true;
      }
    }, timed); // timed is 0.01s(10)
};

btn.addEventListener('click', function(e){
  e.preventDefault();
  intervalCountFn(startNum);
});
