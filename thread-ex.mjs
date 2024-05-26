/* const log = require("node:console");
const crypto = require("node:crypto"); */

import crypto from "node:crypto";

//Synchronous
/* const start = Date.now();
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
log("Hash >>> ",Date.now()-start) */

//Asynchronous
const MAX_CALL = 8;
const start = Date.now();
//Increasing the thread pool size
for (let i = 0; i < MAX_CALL; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash ${i + 1} >>> `, Date.now() - start);
  });
}
