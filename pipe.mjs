import fs from "fs";
import zlib from "zlib";

const readStream = fs.createReadStream("./greet.txt", {
  encoding: "utf-8",
  highWaterMark: 3,
});
const gzip = zlib.createGzip()

const writeStream = fs.createWriteStream("./pipe-file.txt");
readStream.pipe(writeStream);

readStream.pipe(gzip).pipe(fs.WriteStream("./file-zip.gz"))
