// server/index.js

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// var name = "Fuck NPM, Yarn works so... Yarn FTW!";

// app.use(express.json());

// app.get("http://localhost:3001/record/add", (req, res) => {
//     res.json({ message: name, duty: task});
// });

// app.post("/send", (req, res) => {
//     name = req.body.name;

//     console.log("Uhm I guess a name will show up here? ", name);
// });
    
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
