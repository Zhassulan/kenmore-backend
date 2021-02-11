const uploadFile = require("../middleware/upload");

const upload = (req, res) => {
    uploadFile(req, res, function (err) {
        if (err) return res.status(500).send({
            message: "Error uploading file. " + err
        });
        return res.status(201).send({
            message: 'File uploded successfully'
        });
    });
}

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = "resources/static/assets/uploads";

    res.download(directoryPath + "/" + fileName, fileName, (err) => {
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
