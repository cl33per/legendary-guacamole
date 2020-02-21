const db = require("../models");
const multer = require('multer');
const cors = require('cors');

module.exports = {
    findAll: function (req, res) {
        db.File
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.File
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.File
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.File
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.File
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

//? Need to create ticket for fileUpload
// Multer Upload
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images/uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// });
// const upload = multer({ storage })

// app.use(cors());

// app.post('/upload', upload.single('image'), (req, res) => {
//     if (req.file)
//         res.json({
//             imageUrl: `images/uploads/${req.file.filename}`
//         });
//     else
//         res.status("409").json("No Files to Upload.");
// });
