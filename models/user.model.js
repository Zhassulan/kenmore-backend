const sql = require("./db.js");

const User = function(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.birthDate = user.birthDate;
    this.ipAddress = user.ip_address;
    this.status = user.status;
};
const QUERY_FIND_USER_BY =
    'SELECT \n' +
    '  u.firstname, \n' +
    '  u.lastname, \n' +
    '  u.email, \n' +
    '  u.birth_date,  \n' +
    '  u.ip_address,  \n' +
    '  s.status  \n' +
    'FROM users u \n' +
    '  INNER JOIN user_statuses s ON s.id = u.status_id \n';

User.findByName = (param, result) => {
    sql.query(QUERY_FIND_USER_BY + `WHERE u.firstname like '%${param}%' or u.lastname like '%${param}%'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user(s): ", res);
            result(null, res);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

User.findByEmail = (param, result) => {
    sql.query(QUERY_FIND_USER_BY + `WHERE u.email like '%${param}%'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user(s): ", res);
            result(null, res);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

User.findByBirthdate = (param, result) => {
    sql.query(QUERY_FIND_USER_BY + `WHERE u.birth_date = STR_TO_DATE('${param}', '%d.%m.%Y');`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user(s): ", res);
            result(null, res);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

User.findByStatus = (param, result) => {
    sql.query(QUERY_FIND_USER_BY + `WHERE s.status = '${param}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user(s): ", res);
            result(null, res);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};


module.exports = User;
