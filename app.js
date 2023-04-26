const http = require("http");

const server = http.createServer((req, res) => {
  res.write(JSON.stringify("Testeee"));
});

const port = 3000;

server.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
