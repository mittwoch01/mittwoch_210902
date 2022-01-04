// Gnb.js

export default function Gnb(){
  const navList = ['about', 'product', 'gallery', 'notice'];
  // ----------------------------------------------------------
  return (
    <nav className="gnb">
      <h2>navigation</h2>
      <ul>
        { navList.map( (li, idx)=> <li key={idx}>{li}</li> ) }
      </ul>
    </nav>
  )
}