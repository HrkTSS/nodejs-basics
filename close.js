const { log } = require("console");
const fs = require("fs");
const { setTimeout } = require("timers/promises");

const readStream = fs.createReadStream(__filename);
readStream.close();

readStream.on("close", () => {
  log("<<<close event>>>");
});
setImmediate(() => log(" calling immediate"));
setTimeout(() => log(" calling timeout"),1000);
Promise.resolve().then(() => log("Promise resolved"));
process.nextTick(() => log("Next tick"));
