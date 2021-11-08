
// var dicList = [];
// disList내부에 계산한 값을 히스토리처럼 저장!

var dicList = [];


var fn1 = function(data){
  dicList.push(data); // 배열[]에 담는 기능
  console.log(c); // console창에 결과를 출력
  return data; // 함수실행시 결과 값
};

fn1 ('1,20');
fn1 ('2,21');
fn1 ('3,22');
fn1 ('4,23');
fn1 ('5,24');
console.log( dicList );



