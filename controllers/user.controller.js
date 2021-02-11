const User = require("../models/user.model");
const UserStatus = require("../models/user.status.model");

// Find a User(s) by name
exports.findByName = (req, res) => {
    User.findByName(req.params.name, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with name ${req.params.name}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with name " + req.params.name
                });
            }
        } else res.send(data);
    });
};

exports.getAllStatuses = (req, res) => {
    UserStatus.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user statuses."
            });
        else res.send(data);
    });
}

// Find a User(s) by email
exports.findByEmail = (req, res) => {
    User.findByEmail(req.params.email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User(s) with e-mail ${req.params.email}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User(s) with e-mail " + req.params.email
                });
            }
        } else res.send(data);
    });
};

exports.findByBirthdate = (req, res) => {
    User.findByBirthdate(req.params.date, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User(s) with birthdate ${req.params.date}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User(s) with birthdate " + req.params.date
                });
            }
        } else res.send(data);
    });
};

exports.findByStatus = (req, res) => {
    User.findByStatus(req.params.status, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User(s) with status ${req.params.status}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User(s) with status " + req.params.status
                });
            }
        } else res.send(data);
    });
};


