// d_05_promise_ex_01.js

// 시나리오 :
// 국어/영어/수학 값을 모두 합펴서 겨로가도출
// 1. 점수입력후 버튼클릭
// 2. 해당하는 값 모두 합
// 3. 합 + 5
// 4. 결과 * 5
// 5. 최종점수 도출 ( .result > span 도출 )
// * 값 입력이 안 되어있다면 입력 요구
// * 0~5점 이하의 결과로 도출
// ======================================
// 변수
const testBox = document.querySelector('#testBox')
const elKorean = document.querySelector('#korean');
const elEnglish = document.querySelector('#english');
const elMath = document.querySelector('#math');
const btn = testBox.querySelector('button');
const result = testBox.querySelector('.result > span');
// -------------------------------------- 

const fnRel = function(score){
  const _n = parseInt(score);
  const sendData = new Promise(function(resolve, reject){
    const nanCheck = isNaN(_n) === false; 
    const numArea = _n >= 0 && _n <= 5;
    (nanCheck && numArea)? resolve(_n) : reject('숫자를 다시한번 정확하게 입력해주세요.');
  });
  return sendData; 
};

const fnSubject = function(n){
  fnRel(n)
    .then(function(response){
      rel = response ;
    })
    .catch(function(error){
      return error;
    })
};


// --------------------------------------
// event
btn.addEventListener('click', function(e){
  e.preventDefault();
  const [kr, en, mt] = [ elKorean.value, elEnglish.value, elMath.value ];
  console.log(fnSubject( kr ));
});

// promise 어떠한 값을 순차적으로 진행 할 수 있도록 만드는 기능
// 즉, 비동기처리시 콜백함수의 기능을 사용하지 않고 수행할 수 있도록 만드는 역할

// promise는 
// 1. 생성자 함수이며, 받아들이는 값은 1:resolve(성공), 2:reject(실패)
// 2. 생성자 함수에 의한 결과를 다음 작업을 수행하도록 하는 메소드( 붙이고.then() )
// 3. then에 들어가는 인자는 성공의 결과로서 이전에 처리된 기능의 결과물을 담는다.
// 4. 이후에도 then에 관련내용을 수행하고 다시 그 다음 수행을 하려면
// 5. 뒤에 .then을 이어 붙여서 사용하게 만들면 된다.
// 6. 만약 promise 함수에서 reject를 도출시켰다면 .then()이 아닌 .catch() 메소드를 진행
// 7. catch메소드에서는 error인 결과물을 수행하게 만들어 처리하게 된다.
// 8. 성공여부를 떠나서 무조건적인 결과를 수행해야 하는 상황인 경우에는 .finaly() 메소드를 수행
