module.exports = app => {

    const files = require("../controllers/file.controller.js");

    app.post("/files", files.upload);
    app.get("/files/:name", files.download);

};
