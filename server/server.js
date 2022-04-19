const express = require("express");
const path = require("path");

const app = express();

const http = require("http").createServer(app);

http.listen(3000, () => {
  console.log("3000 port");
});

app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});
