// import_before.js
const data = ['banana', 'melon'];

const codeFile = ()=>{
  return (`
    <h1>hello</h1>
    <ul>
      ${fnLI(data)}
    </ul>
  `);
};

export default codeFile;