const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

let count = 0;

const server = http.createServer(function (req, res) {
  if (req.url === "/favicon.ico") {
    res.statusCode = 204;
    res.end();
  } else {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      Link: "rel='shortcut icon' href='#'",
    });
    res.end("Here's the current value: " + count);
    console.log("Got a request: ", req.url);
    count++;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
