module.exports = app => {

    const files = require("../controllers/file.controller.js");

    app.post("/files/user/:id", files.upload);
    app.get("/files/user/:id", files.download);

};
