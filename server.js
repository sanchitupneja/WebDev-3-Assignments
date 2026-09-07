const http = require("http");
const log = require("./modules/logger");

const PORT = 3000;

const server = http.createServer(function (req, res) {
  log("Request received: " + req.url);

  if (req.url === "/") {
    res.end("Welcome to Node Server");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.end("Contact Page");
  } else {
    res.writeHead(404);
    res.end("404 Error Message");
  }
});

server.listen(PORT, function () {
  log("Server running at http://localhost:" + PORT + "/");
});