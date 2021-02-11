const multer = require("multer");
const maxSize = 10 * 1024 * 1024;

const storage = multer.diskStorage({
    destination: (req, file, cb) =>
        cb(null, __basedir + "/resources/static/assets/uploads/"),
    filename: (req, file, cb) => {
        let fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'application/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let uploadFile = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {fileSize: maxSize},
}).single('file');

module.exports = uploadFile;
