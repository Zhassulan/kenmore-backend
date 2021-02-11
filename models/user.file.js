const sql = require("./db.js");

const UserFile = function(userFile) {
    this.fileName = userFile.fileName;
    this.originalName = userFile.originalName;
    this.size = userFile.size;
    this.userId = userFile.userId;
};

UserFile.addFile = (userFile, result) => {
    sql.query(`insert into user_files (
            filename, 
            original_name, 
            size, 
            user_id) 
       values (
            '${userFile.fileName}', 
            '${userFile.originalName}', 
             ${userFile.size}, 
             ${userFile.userId})`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    });
};

module.exports = UserFile;
