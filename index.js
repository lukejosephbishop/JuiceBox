require('dotenv').config();

// remove this once you confirm it works
console.log(process.env.JWT_SECRET);
// like, seriously. go delete that!

// EVERYTHING ELSE

const { PORT = 3000 } = process.env
const express = require("express");

const server = express();
server.use(express.json()); // NOT bodyParser anymore... use express.json()

const apiRouter = require("./api");
server.use("/api", apiRouter);

const morgan = require("morgan");
server.use(morgan("dev"));

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});


  

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
