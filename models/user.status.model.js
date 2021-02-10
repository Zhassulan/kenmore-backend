const sql = require("./db.js");

const UserStatus = function(userStatus) {
    this.status = userStatus.status;
}
const QUERY_GET_ALL_STATUSES = 'SELECT status FROM user_statuses ORDER BY status';

UserStatus.getAll = result => {
    sql.query(QUERY_GET_ALL_STATUSES, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found statuses: ", res);
            result(null, res);
            return;
        }

        // not found
        result({ kind: "not_found" }, null);
    });
};

module.exports = UserStatus;
