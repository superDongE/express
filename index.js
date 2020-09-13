const http = require("http"); // 내장모듈

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("asdads fuck");
    response.end();
  })
  .listen(3000);
