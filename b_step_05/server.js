const http = require('http'); // var http = require('http'); / package.json을 기준으로 무언가를 불러와달라 요청하는 것.( 현재는 아무것도 존재하지 않음. )/ 웹 서버를 구동하게 만드는 기능을 요청.

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => { // (a)=>{} === function(a){}
  console.log(`Server running at http://${hostname}:${port}/`);
});