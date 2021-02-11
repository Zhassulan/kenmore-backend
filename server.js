const express = require("express");
const path = require('path');
const cors = require('cors');
const app = express();
const log4js = require("log4js");
const logger = log4js.getLogger();

logger.level = "debug";
global.__basedir = __dirname;
global.log = logger;
global.path = path;

app.use(cors());

require("./routes/user.routes.js")(app);
require("./routes/file.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
