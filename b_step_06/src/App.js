import React from 'react';
import Header from './component/Header';
import FootBox from './component/FootBox';
import RouterPage from './router/RouterPage';

import './App.css';

function App() {
  const title = 'op';
  // ---------------------------------------
  return (
    <div className="App"> 
    {/* 감싸주는 태그가 있어줘야한다 완전히 없으면 안됨 큰일남/ fragment를 써도 됨 */}
      <Header heading={title} />
      <RouterPage />
      <FootBox heading={title} />
    </div>
  );
}

export default App;

// react-router-dom을 사용하기 위해
// 1. router 기능이 연계되는 범위를 <BrowserRouter>로 감싸주어야한다.
// 2. router를 사용하기 위해 a 요소 대신 Link 또는 NavLink요소
// 3. href 대신 to속성을 사용한다.


// =======================================
// 변수  함수
// [A, reA] = useState('t') > A : 't'

// ========================
// js 동작

  // const [변수명, 변수값변경함수] =  useState(최초의변수값)
  // 변수값변경함수(()=>변수명변경값)


  
  // let par = '내용변경전';

  // 함수형 : 리액트 문법
  // 1. 컴포넌트
  // 2. property명 : class -> className, for -> htmlFor
  // 3. js기능을 작성하는 위치 - return부를 제외한 영역, jsx시 { } 영역
  // 4. 이벤트핸들러 onClick, onChange, onFocus
  // 5. react Hook : 필요기능을 요구시 뽑아오는 것
  //  5-1. useState : 변수의 값이 변경될때 그것을 재처리하기위한 기능
  //  5-2. useEffect : 변화할때마다 그 변화를 체크, 필요데이터를 불러와서 확인.


// useState기능은 처음에는 함수호출내부에 들어있는값을 첫인자값으로 처리
// 이후 두번째인자를 수행할때 함수로 수행되게하며 그때 담기는 값을
// 첫인자의 값으로 대체 및 실제 담긴 변수명에 해당값을 변경수행하도록 처리

  // let i=0;
  // const fn = ()=>{
  //   i += 10;
  //   console.log(i)
  //   const nums = document.querySelectorAll('.num');
  //   [].slice.call(nums).forEach( el=> el.innerText = i);
  // }
  // const [변수명, 변수값변경함수] =  useState(최초의변수값)
  // 변수값변경함수(()=>변수명변경값)
