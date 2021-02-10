const sql = require("./db.js");

const User = function(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.birthDate = user.birthDate;
    this.ipAddress = user.ip_address;
    this.status = user.status;
    this.registrationDate = user.created;
};
const QUERY_FIND_USER_BY =
    'SELECT \n' +
    '  u.firstname, \n' +
    '  u.lastname, \n' +
    '  u.email, \n' +
    '  u.birth_date, u.ip_address, s.status FROM users u \n' +
    '  INNER JOIN user_statuses s ON s.id = u.status_id \n';

User.findByName = (param, result) => {
    sql.query(QUERY_FIND_USER_BY + `WHERE u.firstname like '%${param}%' or u.lastname like '%${param}%'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = User;
