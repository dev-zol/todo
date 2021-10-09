// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/send", (req, res) => {
    res.json({ message: "Fuck NPM, Yarn works so... Yarn FTW!" });
});

app.post("/send", (req, res) => {
    var name = req.body.name;
    console.log("Uhm I guess a name will show up here? ", name);
});
    
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
