//import packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 8080;

//const Exercise = require("./models/exercise");

const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nina", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}, ()=>
console.log('connected to DB'));

// Requiring our routes
require("./routes/html-routes.js");
require("./routes/api-routes.js");


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
