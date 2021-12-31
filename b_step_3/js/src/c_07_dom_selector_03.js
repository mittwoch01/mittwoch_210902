// c_07_dom_selector_03.js

console.clear();

var bestBox = document.getElementById('bestBox');
var bestArea = bestBox.getElementsByClassName('best_area')[0];
var bestUl = bestArea.getElementsByTagName('ul')[0];
var bestLi = bestUl.children;

// console.log(bestUl);
/*
var liLen = bestLi.length;
console.log( liLen ); // 4
var liArr = []; // [li,li,li,li]
for(var i=0; i<liLen; i++){ 
  liArr.push(bestLi[i]);
}
console.log(liArr);
*/
var colorList = ['#caa', '#adf', '#fdd', '#eee'];

var liArr = [].slice.call(bestLi);
console.log(liArr);
var setI = 0;

liArr.forEach(function(selector, index){
  var linkEl = selector.children[0];
  linkEl.addEventListener('click', function(e){
    e.preventDefault();
    // setI = index;
    // selector.classList.add('on');
    // console.log( this, index );
    bestUl.style.backgroundColor = colorList[index];
  });
});