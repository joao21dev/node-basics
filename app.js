const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Minha primeira página</title></head>");
    res.write(
      "<body><form action='/message' method='post'><input type'text'><button type='submit'>Send</button</form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Minha primeira página</title></head>");
  res.write("<body><h1>Olá</h1></body>");
  res.write("</html>");
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
