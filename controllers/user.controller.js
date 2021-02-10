const User = require("../models/user.model");
const UserStatus = require("../models/user.status.model");

// Find a single User by name
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
