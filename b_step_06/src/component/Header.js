// Header.js
import Gnb from "./Gnb";
import '../style/Header.scss'

export default function Header({site, url}){
  const h1Style = { color:'#5ae', textTransform: 'uppercase'};

  return (
    <header id="headBox">
        <h1 style={h1Style}>
        <a href = {url} target = '_blank'>{site}</a>
        </h1>
        <Gnb />
    </header>
  )
}

Header.defaultProps = { site : 'op' }


// -----------------------------------
// function Header() {}
// export default Header;

// export default function Header(){}

// const Header = function() {}
// export default Header;