// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Fuck NPM, Yarn works so... Yarn FTW!" });
});

name = "";

app.post("/api/formdata", (req, res) => {
    var name = req.body.name;
    console.log("Uhm I guess a name will show up here? ", name);
});
    
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
