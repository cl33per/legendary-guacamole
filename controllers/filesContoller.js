const db = require("../models");

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
