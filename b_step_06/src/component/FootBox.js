// FootBox.js

export default function (props){
  // FootBox.css -----------------
  const stFoot = {
    width:100+'%', height:'auto', borderTop:'1px solid #fa0'
  }
  const mySet = props.name.toUpperCase();
  // -----------------------------
  return (
    <footer id='footBox' style={stFoot}>
        <h2>company infomation</h2>
        <address>
          회사 주소에 대한 내용 작성
        </address>
        <dl>
          <dt>{mySet} site</dt>
          <dd>
            <ul>
              <li>site_01</li>
              <li>site_02</li>
              <li>site_03</li>
            </ul>
          </dd>
        </dl>
    </footer>
  )
}