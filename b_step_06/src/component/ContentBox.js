// ContentBox.js
import '../style/ContentBox.scss'

export default function ContentBox({name}){
  // const myName = 'op';
  // const name = 'op';
  return (
    // <article id="contentBox">
    //   <p>welcome to {name} webpage</p>
    //   <dl>
    //     <dt>{name} option</dt>
    //     <dd>{name} haha</dd>
    //   </dl>
    // </article>
    <article id="contentBox">
      <h2>article</h2>
      <div className='card'>
        <div className='img'>이미지 삽입</div>
        <div className='btn'>
          <button type='button'>좋아요</button>
          <span>💗💗</span>
        </div>
      </div>
    </article>
  )
}