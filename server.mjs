import http from "http";
import fs from "fs";

const response = {
  name: "Hari",
  age: 22,
};
const server = http.createServer((req, res) => {
  // const html = fs.readFileSync("./index.html", "utf-8");
  // res.end(html);
  // fs.createReadStream("./index.html").pipe(res);
  /*   const name = "Papu"
  let html = fs.readFileSync("./index.html","utf-8")
  html = html.replace("{{name}}",name)
  res.end(html) */
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Homepage");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ name: "Hari", age: 21 }));
  } else {
    res.writeHead(400);
    return res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running at port 3000");
});
