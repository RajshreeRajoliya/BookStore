const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb://admin:admin123@ac-lzejfgz-shard-00-00.aktvoga.mongodb.net:27017,ac-lzejfgz-shard-00-01.aktvoga.mongodb.net:27017,ac-lzejfgz-shard-00-02.aktvoga.mongodb.net:27017/?ssl=true&replicaSet=atlas-o8lrra-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));