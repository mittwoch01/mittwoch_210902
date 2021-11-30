// c_07_dom_selector_02.js

console.clear();

var conBox = document.querySelector('#conBox');
var conNav = conBox.querySelector('.con_nav');
var conChildLi = conNav.children; // [li,li,li,li]
console.log( conChildLi);

// HTML Collection 처리된 요소는 배열처럼 보이지만 실제로는 배열이 아닌 유사배열의 형식이라 그 내부로 접근이 불가능하다. 그래서 해당하는 요소를 배열형식으로 변경해야 내부에 접근이 가능하다. 
// 강제로 배열성격을 띄게 만들려면 배열의 기능을 강제로 가져와서 처리

// var convartConLi = Array.prototype.slice.apply(conChildLi);
// console.log( convartConLi );


// var filterCheck = [].filter.call(conChildLi, function(data){
//   return data;
// });
// console.log( filterCheck );

var conLiSam = [].slice.apply( conChildLi );
// console.log( conLiSam );
var conLiFLink = [];
conLiSam.forEach(function(selector){
  conLiFLink.push(selector.chlidren[0]);
});
console.log( conLiFLink );





