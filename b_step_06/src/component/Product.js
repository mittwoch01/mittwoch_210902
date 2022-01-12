// Product.js

// rfc << 단축키
import React, { useState } from 'react';
import axios from 'axios';
import ProductContent from './ProductContent';
import '../style/Product.scss';


export default function Product() {
  // 두개의 인자를 가진 useState.....? 함수를 재실행해라 : useState...?
  // const num = 0, const setNum = (i)=>{num =i};

  const [num, setNum] = useState(0);
  // -------------------------------------
  const [menuData, setMenuData] = useState([]);

  useEffect( ()=> {
    axios.get('./data/menuData.json')
    .then(res => setMenuData(res.data) )
  }, [])

  console.log( menuData );

  let prCon = menuData[num];
  const fnTab = (e,i) => {
    e.preventDefault();
    setNum(i);
    //  const prCon = menuData[num];

  }


  // -------------------------------------
  return (
    <div className='product_area'>
      <div className='btn_part'>
        {/* <button type='button' onClick={(e)=>fnTab(e, 0)}>Coffee</button> 
        <button type='button' onClick={(e)=>fnTab(e, 1)}>Drink</button> */}


        {/* <button type='button' onClick={(e)=> prCon= menuData[setNum(0)]}>Coffee</button> */}
        {/* <button type='button' onClick={(e)=> prCon= menuData[setNum(1)]}>Drink</button> */}
      </div>
      {/* <ProductContent data={prCon}/> */}
    </div>
  )}
