// b_13_js_constructor

// var user = {};
// user.name = 'op';
// user.age = 20;
// user.email = '';
// console.log( user );



var UserSetting = function(userName, userAge, userEmail){
  this.name = userName;
  this.age = userAge;
  this.email = userEmail;
  this.email2 = '별도의 이메일 체크';
};

// console.log( this.location );
// window.console.log( 'console 결과');
// this.console.log( 'console 결과');

// 인스턴스처리 : 기존에 만든 함수의 기능을 복제 - 객체로 변환 (new 연산자)
var user1 = new UserSetting('op', 25, 'wenigwave1018@gmail.com')
console.log( user1 );

var user2 = new UserSetting('puppy', 10);
console.log( user2.email );

// prototype : 생성자에 담길 내용에 대한 별도의 처리되는 기본 객체
UserSetting.prototype.group = '가족 명단 체크';


console.log( user1.group2 );

UserSetting.prototype.trueCheck = function(){ // prototype은 기능을 추가하는 것?
  return this.age / 2; 
};

console.log(user1.trueCheck());

console.clear();
// this : window
console.log( this );
// this : 객체 이름
var ObjFn = function(a){
  this.alpha = a;
}
var alpha = new ObjFn('abcd');
console.log( alpha.alpha );

// this

