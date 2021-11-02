const fs = require("fs");
const http = require("http");

const file = fs.readFileSync("./index.html", "utf8");
const PORT = process.env.PORT || 7000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(file);
  response.end();
});

server.listen(7000);
console.log(`Server is running on port ${PORT}`);
