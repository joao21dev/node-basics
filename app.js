const http = require("http");

const server = http.createServer((req, res) => {
  console.log("🚀 ~ file: app.js:4 ~ http.createServer ~ req:", req);
});

const port = 3000;

server.listen(port, () => {
  console.log(`server listening at port ${port}`);
  process.exit();
});
