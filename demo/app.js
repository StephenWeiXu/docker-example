const http = require("http");

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("<h1>This is just a demo</h1>");
}).listen(3000);
  
