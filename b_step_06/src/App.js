import Header from './component/Header';
import ContentBox from './component/ContentBox';
import FootBox from './component/FootBox';
import './App.css';


function App() {
  const myName = 'opi';
  // ---------------------------------------
  return (
    <div className="App">
      <Header url="http://naver.com" />
      <ContentBox name={myName} />
      <FootBox name={myName}/>
    </div>
  );
}

export default App;
