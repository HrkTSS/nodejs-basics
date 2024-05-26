const { log } = require("console");
const fs = require("fs");

fs.readFile(__filename, () => {
    log("read file 1");
});
setTimeout(() => log("timer 1"), 0);
