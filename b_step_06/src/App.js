import Header from './component/Header';
import Main from './component/Main';
import ContentBox from './component/ContentBox';
import CardList from './component/CardList';
import FootBox from './component/FootBox';
import './App.css';
import { useState } from 'react';

// let par = '내용변경전';
const dataArr = [
  '1',
  '2',
  '3',
  '4'
];
let i = 0;

const [par, setPar] = useState(dataArr[i]);
const pChange = (e) => {
  e.preventDefault();
  setPar(dataArr[i+=1])
};

// 리액트 문법
// 1. 컴포넌트
// 2. property명 : class > className, for > htmlFor
// 3. js기능을 작성하는 위치 - return 를 제외한 영역, jsx시 { } 영역
// 4. 이벤트 핸들러 onClick, onChange, onFocus
// 

// useState 기능은 처음에는 함수 호출내부에 들어있는 값을 첫 인자 값으로 처리
// 이후 두번째 인자를 수행할 때 함수로 수행 되게하며 그 때 담기는 값을
// 첫 인자의 값으로 대체 및 실제 담긴 변수 명에 해당 값을 변경수행하도록 처리



// 1. 컴포넌트
function App() {
  const myName = 'opi';
  // ---------------------------------------
  return (
    <div className="App">
      <Header url="http://naver.com" />
      <Main />
      <ContentBox name={myName} />
      <CardList />
      <FootBox name={myName}/>  
    </div>
  );
}

export default App;

// 변수  함수
// [A, reA] = useState('t') > A : 't'
