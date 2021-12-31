// d_05_promise.js

/*
const fnOne = function(data){
  const rel2 = data * data;
  return rel3;
}

const fnTwo = function(data, fn){
  const rel2 = data / 2;
  return fn(rel2);
}

const fnThree = function(data, fn){
  const rel1 = data * 5;
  return fn(rel1, fnOne);
}

let valueResult = fnThree(4, fnTwo);
console.log( valueResult );

// button.addEventListener('click', function(){})

// 실행 컨텍스트 : 브라우저에서 실행되는 순서를 파악하고 처리하는 형태
// 스택 : 수행하는 순서에서 처리되는 모양
// 힙  : 스택과는 별도로 관리하는 것 
*/

/*
const fn2One = data => data**2; // data * data 의 es6버전 문법임. // = function(data){ return data * data }

// data 25 > 25**2 625

const fn2Two = (data) => { // data 50
  const rel = data / 2; // rel 25
  return fn2One(rel); // fn2One 25
}

const fn2Three = (data) => { // data 10
  const rel = data * 5; // rel 50
  return fn2Two(rel); // fn2Two 50
}

let valueResult2 = fn2Three(10); 
console.log( valueResult2 ); // 625
*/

// promise 
// 1. pending : 진행전 / 진행중
// 2. fulfilled : 성공
// 3. reject : 실패 / 오류



const fnDataValue = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve('데이터 수행 성공');
  }, 500);  
});

fnDataValue
  .then((resolve) => { return 'success'; })
  .catch(function(error){ return 'fail'; }) // 예외처리 / 단순히 값을 가져온다(?) > .catch
  .then(function(data){return data + '하였습니다.'; })
  .then(data => console.log(data));

  // ----------------------------------------
/*
const fndata = function(method , url, async) {   
  return new Promise(function(resolve, reject){
    const http =new XMLHttpRequest();
    http.open(method , url, async);
    http.onreadystatechange = function(){
      if(false){
        resolve('success');
      }else{
        reject('falil');
      }
    }
    http.send();
  })
};
fndata('get', 'url', true).then( (resonse)=>{} );
*/

// Promise 미리 만들어진 생성자 함수
// XMLHttpRequest 미리 만들어진 생성자 함수
// Array, Object, Function ...

const dataCalc = (ins) => {
  const dataResult =  new Promise(function(resolve,reject){
    const convertNum = parseInt(ins); //들어오는 수치를 강제로 숫자처리
    const permission = isNaN(convertNum); // 숫자를 NaN인지 아닌지 파악(NaN이면 true도출)
    (!permission) ?  resolve(ins) :  reject('숫자가 아니니 숫자로 작성해주세요.');
  });
  return dataResult;
};

const fnNum = function(n){
  dataCalc(n)
  .then(function(response){  return response  * 5;  })
  .then(function(response){  return response / 2;  })
  .then(function(response){  return response ** 2;  })
  .then(function( response ){ console.log( response ); })
  .catch(function(error){ console.log( error ); });
};

// -----------------------------------------
const input = document.querySelector('#num');
const btn = document.querySelector('button');

// 버튼 클릭시 input의 값을 파악하여 무언가 연산!!
btn.addEventListener('click', function(e){
  e.preventDefault();
  const _n = input.value;
  fnNum(_n);
});