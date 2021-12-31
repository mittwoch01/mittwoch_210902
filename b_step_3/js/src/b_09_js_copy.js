// b_09_js_copy.js

var favoritColor = ['emerald green', 'coral', 'hot pink', 'city blue', 'brown gray'];
// var copyColor = favoritColor; // favoritColor의 배열속 문자를 공유

// console.log(favoritColor,copyColor); 

var cloneColor = [];
favoritColor.push('yellow');
// 
// console.log(favoritColor, cloneColor);

// var arr = ['one'];
// var arr2 = [];
// arr2.push(arr[0]);
// arr.push('two');
// 
// console.log(arr, arr2);

// var i = 0;
// var len = favoritColor.length;
// for(;i <= len; i+=1){
//   if(i !== len){
//   cloneColor.push(favoritColor[i]);
// }else{
//   favoritColor.push('sky');
//   cloneColor.push('deep orange');
//   }
// }

// forEach 이용하기
// favoritColor.forEach(function(data,index){
//   cloneColor[index] = data;
// });
// favoritColor.push('sky');
// cloneColor.push('deep orange');
// 
// console.log(favoritColor, cloneColor);

// =============================================

var pc = [
  'dell'+ ':' + '프리시전',
  'hp' + ':' + 'z시리즈',
  'apple' + ':' + 'max book',
  'samsung' + ':' + 'galaxy book'
];
pc.lg = 'gear';
var clonePc = pc;
clonePc = [];

pc.forEach(function(data, index){
  clonePc[index] = data;
});

pc.asus = 'gen book';
clonePc.lenovo = 'think pad';

console.log( pc, clonePc );


// ===========================
var pc = {
  'dell': '프리시전',
  'hp' :'z시리즈',
  'apple' : 'max book',
  'samsung' : 'galaxy book'
};
var copyPc = pc;
pc['lg'] = 'gear';

var clonePc = {};
// pc.forEach(function(data, index){
//   clonePc[index] = data;
// });
// 
// pc.asus = 'gen book';
// clonePc.lenovo = 'think pad';
// 
// console.log( pc, clonePc );


// ====================
// for(var data in pc){
//   // console.log(data);
//   clonePc[data] = pc[data];
// }
// 
// pc['asus'] = 'gen book';
// clonePc['lenovo'] = 'think pad';

console.log(pc);
console.log(clonePc);


