// Card.js
import "../style/Card.scss";

export default function (){

  // --------------------------------------------------
  const cardListData = 
    {
      "pageTitle" : "coffee",
      "pageContent" : "coffee 내용에 따른 설명",
      "products" : [
        { "product" : "esspresso", "narr" : "esspresso 설명" },
        { "product" : "americano", "narr" : "americano 설명" },
        { "product" : "latte", "narr" : "latte 설명" },
        { "product" : "cafemocca", "narr" : "cafemocca 설명" },
        { "product" : "apogato", "narr" : "apogato 설명" }
      ]
    };
  // ------------------------------------------------

  return(
    <div className="card">
      <div className="img">이미지 삽입</div>
      <dl>
        <dt>title</dt>
        <dd>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.di
        </dd>
      </dl>
      <div className="btn">
        <button type="button">담기</button>
      </div>
    </div>
  )
} 