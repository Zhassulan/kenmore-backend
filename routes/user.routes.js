module.exports = app => {

    const users = require("../controllers/user.controller.js");

    // Retrieve a User by name
    app.get("/users/:name", users.findByName);

};
