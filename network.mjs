import { log } from "console";
import https from "https";

const MAX_CALL = 4;
const start = Date.now();
for (let i = 0; i < MAX_CALL; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        log(`Request >>> ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
