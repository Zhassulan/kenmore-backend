const uploadFile = require("../middleware/upload");

const upload = (req, res) => {
    uploadFile(req, res, function(err) {
        try {
            return res.status(201).json({
                message: 'File uploded successfully'
            });
        } catch (error) {
            console.error(error);
        }
    });
}

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/static/assets/uploads/";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

module.exports = {
    upload,
    download,
};
