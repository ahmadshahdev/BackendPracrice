const http = require("http");

const today = require("./today")

const RequestListner = function (req, res) {
    res.writeHead(200);
    res.end(`Hellow World today is ${today.getdate()}`);
};

const port = 8080;

const srever = http.createServer(RequestListner);
srever.listen(port);
console.log("server is listining on port" + port);
