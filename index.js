const http = require("http");

const RequestListner = function (req, res) {
	res.writeHead(200);
	res.end("Hello World");
};

const port = 8080;

const srever = http.createServer(RequestListner);
srever.listen(port);
console.log("server is listining on port" + port);
