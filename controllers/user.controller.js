const User = require("../models/user.model.js");

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
