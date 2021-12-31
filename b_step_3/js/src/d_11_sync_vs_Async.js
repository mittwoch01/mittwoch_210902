// d_11_sync_vs_Async.js

let num = 0;

/*

*/
const fnAge = (age) => {
  return new Promise ( (resolve, reject)=>{
    setTimeout(()=>{
      if(age>20){
        resolve('성인입니다.')
      }else {
        reject('미성년자입니다.')
      }
    },1000)
  });
}

fnAge(22)
  .then(console.log)
  .catch(console.log)
  .finally(()=> {
    console.log('promise의 개념이해')
  });