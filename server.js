//import packages
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/html-routes.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
