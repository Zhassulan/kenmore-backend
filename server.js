const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());

require("./routes/user.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
