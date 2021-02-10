module.exports = app => {

    const users = require("../controllers/user.controller.js");

    // Retrieve a User by name
    app.get("/users/name/:name", users.findByName);
    // Get all users statuses
    app.get("/users/statuses", users.getAllStatuses);

};
