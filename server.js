const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const bodyParser = require("body-parser");
require('dotenv').config();
const cors = require("cors");
const multer = require("multer");



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
}
// Add routes, both API and view
app.use(routes);

//Added to resolve a depercation issue
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true );

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/familyties")
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));;

  // Multer Upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/images/uploads')
},
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
}
});
const upload = multer({ storage })

app.use(cors());

app.post('/upload', upload.single('image'), (req, res) => {
if (req.file)
  res.json({
    imageUrl: `images/uploads/${req.file.filename}`
});
else
  res.status("409").json("No Files to Upload.");
});

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
