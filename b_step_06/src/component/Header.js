// Header.js
import Gnb from "./Gnb";
import '../style/Header.scss'
import React from "react";
import { Link } from 'react-router-dom';

export default function Header(props){

  return (
    <header id="headBox">
        <h1><Link to="/">{props.heading}</Link></h1>
        <Gnb />
    </header>
  )
}


// -----------------------------------
// function Header() {}
// export default Header;

// export default function Header(){}

// const Header = function() {}
// export default Header;