// Product.js

// rfc << 단축키
import React, { useState } from 'react';
import ProductContent from './ProductContent';
import '../style/Product.scss';


export default function Product() {
  // 두개의 인자를 가진 useState.....? 함수를 재실행해라 : useState...?
  // const num = 0, const setNum = (i)=>{num =i};
  const [num, setNum] = useState(0);
  // -------------------------------------
  const menuData = [
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
    },
    {
      "pageTitle" : "drink",
      "pageContent" : "drink 내용에 따른 설명",
      "products" : [
        { "product" : "orange", "narr" : "orange 설명" },
        { "product" : "americano", "narr" : "americano 설명" },
        { "product" : "latte", "narr" : "latte 설명" },
        { "product" : "cafemocca", "narr" : "cafemocca 설명" }
      ]
    }
  ];

  let prCon = menuData[num];
  const fnTab = (e,i) => {
    e.preventDefault();
    setNum(i);
    prCon = menuData[num];
  }
  // -------------------------------------
  return (
    <div className='product_area'>
      <div className='btn_part'>
        <button type='button' onClick={(e)=>fnTab(e, 0)}>Coffee</button>
        <button type='button' onClick={(e)=>fnTab(e, 1)}>Drink</button>
        {/* <button type='button' onClick={(e)=> prCon= menuData[setNum(0)]}>Coffee</button> */}
        {/* <button type='button' onClick={(e)=> prCon= menuData[setNum(1)]}>Drink</button> */}
      </div>
      <ProductContent data={prCon}/>
    </div>
  )}
