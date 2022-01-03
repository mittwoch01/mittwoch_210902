// ContentBox.js

export default function ContentBox({name}){
  // const myName = 'op';
  // const name = 'op';
  return (
    <article id="contentBox">
      <p>welcome to {name} webpage</p>
      <dl>
        <dt>{name} option</dt>
        <dd>{name} haha</dd>
      </dl>
    </article>
  )
}