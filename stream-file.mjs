import fs from "fs";

const readStream = fs.createReadStream("./greet.txt", {
  encoding: "utf-8",
  highWaterMark: 3,
});
const writeStream = fs.createWriteStream("./file2.txt");
readStream.on("data", (chunk) => {
  console.log(" chunk >>>", chunk);
  writeStream.write(chunk);
});
