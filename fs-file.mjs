import { log } from "console";
import fs from "fs";

console.log("<<<First>>>");
const file = fs.readFileSync("./file.txt", "utf-8");
console.log(file);
console.log("<<<Second>>>");
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    log("err>>>", err);
  } else {
    log(data);
  }
});
console.log("<<<Third>>>");

log("<<<Writing a file>>>");
fs.writeFileSync("./greet.txt", "I am writing to a file programmatically");
fs.writeFile(
  "./greet.txt",
  "\nI am updating to a file programmatically as both use same file literally overwrite it adding flag-a will append rather overwrite",
  { flag: "a" },
  (err) => {
    if (err) log("writing error>>>", err);
    else log("File written successfully");
  }
);
