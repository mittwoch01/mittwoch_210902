// b_02_js_variable.js
/*
- js는 ;의 의미가 해당 기능/내용의 종료를 의미
- js는 (),{},[] ... 각종 괄호의 기능이
- 또한 ''(엔터옆), ""(엔터옆) 이러한 기능이 수시로 열고/딛기 기능이 복잡하게 얽혀있다. 
  < xxx ``(일단안씀 : 숫자1옆에) xxx >

- ㅁㅇㄹ (){
  ㅁㅇㄹ(){
      ㅁㅇㄹ()ㅇㄹ()
    }
  }

*/

// var 뒤에 camelCase로 씀
var num = 0;
var n; // n 지정안함
    n = 10; // n에 다시할당
var a = 1; 
var b = 1;
var c,d;
    c = 1, d = 1;
var nText = 'num: ';
console.log(num, n, a, b, c, d);
// 결과 num: 0 (:구분용 , 보기편하게 하는 용)
// 문자는 black, 숫자는 blue
console.log(nText, num); 

// var는 변수명으로 사용하면 안된다. (var var = 0; <-이러면 안됨.)

// 예약어는 아니지만 후보 : name
// 예약어 : 변수명으로 사용할 수 없는 용어
/* 
abstract
arguments 
boolean 
break 
byte
case  
catch 
char  
class*  
const
continue  
debugger  
default 
delete  
do
double  
else  
enum* 
eval 
export*
extends*  
false 
final 
finally 
float
for 
function  
goto  
if  
implements
import* 
in  
instanceof  
int 
interface
let 
long  
native  
new 
null
package 
private 
protected 
public  
return
short 
static  
super*  
switch  
synchronized
this  
throw 
throws  
transient 
true
try 
typeof  
var 
void  
volatile
while 
with  
yield

// *는 ES6에서 추가된 예약어
* 위 예약어 및 키워드 외에도 매우 많으므로 변수명을 설정하는 가장 쉬운방법은
* 1. 의미없는 변수는 사용하지 말것 (단, 숫자나 단순 값을 가져오기 위한 상황 제외)
* 2. 각 변수를 'camelCase 방식' 으로 사용할 것
* 3. js에서는 대시라인방식(-), 언더스코어(_) 방식의 이름을 권장하지 않음.
*
* - ;사용위치
* 1. 변수를 할당 또는 변경 ' ; '
* 2. ...기능 ' (); '
*/  


