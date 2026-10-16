const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");
const { pipeline ,Transform ,Duplex} = require("stream");

const app = express();
app.use(status());

app.get("/", (req, res) => {
  const stream = fs.createReadStream("./file.txt", "utf-8");
  stream.on("data", (chunk) => {
    res.write(chunk);
  });
  stream.on("end", () => {
    res.end();
  });
});

app.get("/stream-test", (req, res) => {
  const stream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 16,
  });
  stream.pipe(res);
});

app.get("/write-test", (req, res) => {
  const stream = fs.createWriteStream("./output.txt", {
    highWaterMark: 16,
  });

  stream.on("finish", () => {
    res.send("Data written to file");
  });

  let i = 0;

  function writeData() {
    let can_write = true;

    while (i < 1000 && can_write) {
      can_write = stream.write(
        `Chunk ${i}: Lorem ipsum dolor sit amet consectetur adipisicing elit.\n`,
      );
      i++;
    }

    if (i < 1000) {
      stream.once("drain", () => {
        console.log("drain event emitted");
        writeData();
      });
    } else {
      stream.end();
    }
  }

  writeData();
});

app.get("/copy", (req, res) => {
  const readStream = fs.createReadStream("./file.txt");
  const writeStream = fs.createWriteStream("./output.txt");
  const upperCase = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().toUpperCase());
    },
  });
  pipeline(readStream, upperCase, writeStream, (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).send("File Processing Error Failed");
      }
      return;
    }
    res.send("File copied successfully");
  });
});

app.get("/duplex", (req, res) => {
    const myStream = new Duplex({
        read() {
            this.push("Hello from readable side!\n");
            this.push(null);
        },

        write(chunk, encoding, callback) {
            console.log("Received:", chunk.toString());
            callback();
        }
    });

    myStream.on("data", (chunk) => {
        console.log("Read:", chunk.toString());
    });

    myStream.write("Hello from writable side!");
    myStream.end();

    res.send("Duplex stream tested. Check terminal.");
});
app.listen(4000, () => console.log("app started"));
