module.exports = app => {

    const users = require("../controllers/user.controller.js");

    // Retrieve a User(s) by name
    app.get("/users/name/:name", users.findByName);
    // Get all users statuses
    app.get("/users/statuses", users.getAllStatuses);
    // Retrieve a User(s) by email
    app.get("/users/email/:email", users.findByEmail);
    // Retrieve a User(s) by birthdate
    app.get("/users/birthdate/:date", users.findByBirthdate);
    // Retrieve a User(s) by status
    app.get("/users/status/:status", users.findByStatus);

};
