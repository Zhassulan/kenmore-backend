module.exports = app => {
    const customers = require("../controllers/user.controller.js");

    // Retrieve a User by name
    app.get("/users/:name", users.findByName);

};
