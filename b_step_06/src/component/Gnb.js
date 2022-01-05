// Gnb.js

export default function navBox(){
  const navList = ['about', 'product', 'gallery', 'notice'];
  // ----------------------------------------------------------
  return (
    <nav id="navBox">
      <h2>navigation</h2>
      <ul>
        { navList.map( (li, idx)=> <li key={idx}>{li}</li> ) }
      </ul>
    </nav>
  )
}