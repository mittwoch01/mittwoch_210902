// b_11_js_method.js

// 배열 메소드는 배열형식을 이용하여 처리하는 다양한 기능을 가진 함수
// 일부는 배열 메소드가 아닌 것도 존재(property, 다른곳에서도 사용가능한 범용방식)

var array = ['maker', 'remote', 'pen']; // array 
console.log( array.length ); // array의 갯수 : 3

var text = 'javascript'; // string
console.log( text.length ); // j a v a s c r i p t  : 10

// var obj = {'maker': 'dog', 'dogdog', 'duck'}; // argument
// console.log( obj.length );

// ----------------------------
// console.clear();
// var array = ['maker', 'remote', 'pen'];

array.push('mouse'); // push in end
array.unshift('monitor'); // push in front
console.log( array );

array.shift(); 
array.pop();
console.log( array );

var joinText = array.join('-'); // 붙이거나
console.log( joinText ); // string

var spliteText = joinText.split(''); // 분리시키거나
console.log(spliteText);

array.forEach(function(d,i){
  console.log( d );
}); // d: data ,i : 번호

spliteText.reverse(); // 배열의 목록을 뒤집기
console.log(spliteText);

spliteText.sort(); // 배열의 목록을 순서대로 재 배치
console.log(spliteText);

// indexOf 내부에 값을 입력하여, 동일한 값이 존재하면, 그중 첫번째가 위치한 것을 파악하여 위치 숫자를 표기
// 존재하지 않는다면 -1;이 출력된다.
var indexCk = array.indexOf('key'); // indexOf (얘도 메소드이다.): 색인기능
console.log(array);
console.log(indexCk);


// 중간에 삽입/ 삭제하는 기능 - [].splice
// var array = ['maker', 'remote', 'pen'];
var replaceArr = array.splice(1,0,'cam','mug','charger'); // 배열의 순서 1번째에 0개를 삭제하고 집어넣어라.
console.log(array);

var array2 = ['desktop', 'tablet', 'smartphone'];
console.log(array, array2);

// array.splice(0,0,array2);
// console.log(array);

var conArray = array.concat(array2); // concat = 두개의 배열을 하나의 배열로 합쳐서 처리한다.
console.log( conArray );


var arrayN = [3,5,3,7,8,3,7,8];
// var sum = 0;
// arrayN.forEach(function(d){ sum += d; });
// console.log( sum );

// console.log( arrayN.reduce(function(a,b){ return a + b });


var ck = arrayN.reduce(function(a,b){ // a는 처음만 0번째 요소를 가져옴, b는 1번째 ~ 마지막까지 가져옴
  var c = a + b;
  console.log(a, b);
  return c;
});

// ----------------------------------
// [].filter(function(){ return }) : 반환된 값을 저장하여 이후 처리

var nList = [1,2,3,4,5,6,7];
var filterList = [];
/*
nList.forEach(function(d,i){
  if(d > 4){
    filterList.push(d)
  }
});
console.log('filterList:', filterList);
*/
// filtera는 체크된 내용중 return값만 별도로 담아서 처리
filterList = nList.filter(function(d,i,k){
  // console.log(d,i,k) : data, index(숫자), array 순서있음!!
  if(d > 4){
    return d;
  }
});
console.log('filterList:', filterList);
