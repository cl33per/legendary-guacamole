const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./config/passport")(passport);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  } else {
  app.use(express.static("public"));
}

// Add routes, both API and view
app.use(routes);

//Added to resolve a depercation issue
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/familyties")
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(cors());

// Passport middleware
app.use(passport.initialize());

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
