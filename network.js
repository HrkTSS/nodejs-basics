const https = require("https");

const MAX_CALL = 20;
const start = Date.now();
for (let i = 0; i < MAX_CALL; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request >>> ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}