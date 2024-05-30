import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("homepage");
  } else if (req.url === "/slow") {
    for(let i=0;i<9000000000;i++){}
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow page");
  }
});
server.listen(4000, () => {
   console.log("running at port 4000");
});
