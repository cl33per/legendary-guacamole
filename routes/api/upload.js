const router = require("express").Router();
const multer = require("multer");

// Multer Upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "client/public/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

router.route("/").post(upload.single("image"), (req, res) => {
  if (req.file) {
    console.log("Server upload:");
    res.json({
      imageUrl: `/images/uploads/${req.file.filename}`
    });
  }
  else res.status("409").json("No Files to Upload.");
});

module.exports = router;
